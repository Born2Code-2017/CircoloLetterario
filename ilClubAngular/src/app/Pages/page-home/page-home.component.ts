import {Component, Output, OnInit} from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {User} from '../../models/user';
import {EventsHandler} from '../../Services/eventsHandler.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})

export class PageHomeComponent implements OnInit {
  currentUser: User;
  email = 'sandra.green@email.com';
  userList: User[];
  userEvents: string[];

  isCalendarOpen: boolean;
  idTaken: boolean;

  constructor(private appService: EventsHandler, private service: FirebaseService, private userService: UserService) {
    this.idTaken = false;
    this.loadUsers();
    this.isCalendarOpen = false;
  }

  ngOnInit() {
    this.getIsCalendarOpen();
  }

  OpenCalendar() {
    this.appService.setCalendarOpen(true);
  }

  getIsCalendarOpen(): void {
    this.appService.getCalendarOpen().subscribe(calendarState => {
      console.log('3calendarState: ' + calendarState);
      this.isCalendarOpen = calendarState;
    });
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
          console.log('chiavi eventi ' + eventId);
          this.userEvents.push(eventId);
        }

      }
    }
    this.idTaken = true;
    console.log(this.userEvents);
  }

}
