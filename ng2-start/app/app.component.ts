import {Component} from '@angular/core';
import {User} from './shared/models/user';

@Component({
    selector:'my-app',
    templateUrl:'./app/app.component.html',
    styleUrls:['./app/app.component.css']
})

export class AppComponent{
    message: string = 'Hello!';
    user = {
        id:25,
        name:'Chris',
        username:'christoph'
    };
    users :User[]= [{
        id:25,
        name:'Chris',
        username:'christoph'
    },{
        id:26,
        name:'Bharath',
        username:'uday'
    },{
        id:27,
        name:'Bob',
        username:'bobby'
    }];
    activeUser: User;
    selectUser(user){
        this.activeUser = user;
        console.log(this.activeUser);
    }
    onUserCreated(event){
       this.users.push(event.user);
    }
}