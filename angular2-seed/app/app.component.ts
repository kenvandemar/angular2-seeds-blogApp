import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {NavbarComponent} from './BlogApp/Component/navbar.component';
import {HomeComponent} from './BlogApp/Component/home.component';
import {UserComponent} from './BlogApp/Component/users.component';
import {PostComponent} from './BlogApp/PostComponent/posts.component';
import { NewUserComponent } from './BlogApp/Component/newUser.component';
import { NotFoundComponent } from './BlogApp/Component/not-found.component'

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent},
    { path: '/users', name: 'Users', component: UserComponent},
    { path: '/users/:id', name: 'EditUser', component: NewUserComponent},
    { path: '/users/new', name: 'NewUser', component: NewUserComponent},
    { path: '/posts', name: 'Posts', component: PostComponent},
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent},
    { path: '/*others', name: 'Other', redirectTo: ['Home']}

])

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
             <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { 

}