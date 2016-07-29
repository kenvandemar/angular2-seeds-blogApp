import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouterLink } from 'angular2/router';
import { UserService } from '../Service/user.service';


@Component({
    selector: 'users',
    templateUrl : 'app/BlogApp/Component/users.component.html',
    directives: [RouterLink],
    providers: [UserService]
    
})

export class UserComponent implements OnInit{
   isLoading = true;
   users: any[];

   constructor(private _userService: UserService){ }


   ngOnInit(){
       
        this._userService.getUsers()
            .subscribe(users =>{
                this.isLoading = false
                this.users = users           
             }); 
        }

        deleteUser(user){
                if(confirm("Are you sure to delete " + user.name + "?")){
                    var index = this.users.indexOf(user)
                    this.users.splice(index, 1);

                        this._userService.deleteUser(user.id)
                            .subscribe(null,
                            err =>{
                                alert("Could not delete the user");
                                this.users.splice(index, 0, user);
                            });
                }
        }
   }
