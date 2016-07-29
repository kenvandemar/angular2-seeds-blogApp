import { Component, OnInit } from 'angular2/core';
import { Router, CanDeactivate, RouteParams } from 'angular2/router';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { BasicValidators } from './BasicValidators';
import { UserService } from '../Service/user.service';
import { User } from './user';

@Component({
    templateUrl : 'app/BlogApp/Component/newUser.component.html',
    providers: [UserService]
})

export class NewUserComponent implements OnInit, CanDeactivate {
    form: ControlGroup;
    title: string;
    user = new User();

        constructor(
            private _routeParams: RouteParams,
            private _userService: UserService,
            private _route: Router, 
            fb: FormBuilder) { 
        this.form = fb.group({
                     userName: ['', Validators.required],
                     userEmail: ['', BasicValidators.email],
                     phone: [],
                     address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                     })
           
        });
    }

    ngOnInit(){
        var id = this._routeParams.get("id");

        this.title = id ? "Edit User": "New User";

        if(!id)
            return;
        
        this._userService.getUser(id)
            .subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404){
                        this._route.navigate(['NotFound']);
                    }
                });

    }
    routerCanDeactivate(){
         if (this.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to quit?');

        return true;
     }

   addNewUser(){
       var result;

       if(this.user.id)
            result = this._userService.updateUser(this.user);
        else
            result = this._userService.createUser(this.user);

        result.subscribe(x => {
            this._route.navigate(['User']);
        })
   }

     

}   