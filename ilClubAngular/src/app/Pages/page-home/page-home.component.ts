import {Component, Output, OnInit} from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {User} from '../../models/user';
import { EventsHandler} from '../../Services/eventsHandler.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
  providers: [FirebaseService]
})
export class PageHomeComponent implements OnInit  {
  currentUser: User;
  email = 'sandra.green@email.com';
  userList: User[];

  isCalendarOpen: boolean;
  idTaken: boolean;

  @Output() userEvents: number[];

  constructor(private appService: EventsHandler, private service: FirebaseService) {
    this.idTaken = false;
    this.loadUsers();
    this.isCalendarOpen = false;
  }
  ngOnInit() {
    console.log('1calendarState: ' + this.isCalendarOpen);
    this.getIsCalendarOpen();
  }
  OpenCalendar() {
    this.appService.setCalendarOpen(true);
  }
  getIsCalendarOpen(): void {
    console.log('2calendarState: ' + this.isCalendarOpen);
    this.appService.getCalendarOpen().subscribe(calendarState => {
      console.log('3calendarState: ' + calendarState);
      this.isCalendarOpen = calendarState;
    });
  }

  // menuClicked() {
  //   this.appService.setIsMenuOpen(!this.isMenuOpen);
  // }
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
        for (const eventId of this.userList[idx].eventi) {
          // console.log(eventId);
          this.userEvents.push(eventId);
        }
      }
    }
    this.idTaken = true;
    console.log(this.userEvents);
  }



}
