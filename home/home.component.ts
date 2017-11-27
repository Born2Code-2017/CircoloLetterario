import { Component, Output } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { User } from '../users.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    providers: [FirebaseService]
})

export class HomeComponent {
    currentUser: User;
    email: string = 'sandra.green@email.com';
    userList: User[];
    service: FirebaseService;

    @Output()
    userEvents: number[];

    constructor(service: FirebaseService) {
        this.service = service;
        this.loadUsers();
        
    }

    loadUsers() {
        this.service.getData('Utenti.json').subscribe(users => {
            this.userList = [];
            for (let idx in users) {
                //console.log('utente');
                //console.log(users[idx]);
                this.userList.push(users[idx]);
                //console.log(this.userList);
            }
            this.findUser();
        });
    }

    findUser(){
        this.userEvents=[];
        for(let idx in this.userList) {
            //console.log(this.userList[idx].email);
            if(this.userList[idx].email === this.email){
                this.currentUser = this.userList[idx];
                for(let eventId of this.userList[idx].eventi){
                    this.userEvents.push(eventId);
                }

            }
        }
        console.log(this.userEvents);
    }

}