import {Component, Output} from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
  providers: [FirebaseService]
})
export class PageHomeComponent {
  currentUser: User;
  email = 'sandra.green@email.com';
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
      for (const user of users) {
        // console.log('utente');
        // console.log(users[idx]);
        this.userList.push(user);
        // console.log(this.userList);
      }
      this.findUser();
    });
  }

  findUser() {
    this.userEvents = [];
    for (const idx in this.userList) {
      // console.log(this.userList[idx].email);
      if (this.userList[idx].email === this.email) {
        this.currentUser = this.userList[idx];
        for (const eventId of this.userList[idx].eventi) {
          this.userEvents.push(eventId);
        }

      }
    }
    console.log(this.userEvents);
  }


}
