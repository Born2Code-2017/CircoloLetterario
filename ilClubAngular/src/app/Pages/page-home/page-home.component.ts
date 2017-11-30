import { Component, Output, OnInit } from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {User} from '../../models/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent{
  currentUser: User;
  email = 'sandra.green@email.com';
  userList: User[];
  service: FirebaseService;
  isCalendarVisible = false;

  @Output()
  userEvents: string[];

  idTaken: boolean;

  constructor(service: FirebaseService, private userService: UserService) {
    this.idTaken = false;
    this.service = service;
    this.loadUsers();
  }

  loadUsers() {
    
    this.service.getData('Utenti.json').subscribe(users => {
      this.userList = [];
      for (const idx in users) {
        // console.log('utente');
        // console.log(users[idx]);
        this.userList.push(users[idx]);
        // console.log(this.userList);
      }
      this.findUser();
    });
  }

  findUser() {
    this.userEvents = [];
    for (const idx in this.userList) {
      if (this.userList[idx].email === this.email) {
        this.currentUser = this.userList[idx];
        for (let eventId in this.currentUser.eventi) {
          console.log('chiavi eventi '+eventId);
          this.userEvents.push(eventId);
        }

      }
    }
    this.idTaken = true;
    console.log(this.userEvents);
  }

  OpenCalendar() {
    this.isCalendarVisible = true;
  }

}
