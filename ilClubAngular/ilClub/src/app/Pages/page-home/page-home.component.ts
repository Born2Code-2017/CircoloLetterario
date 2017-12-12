import {Component, Output, OnInit} from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {User} from '../../models/user';
import {EventsHandler} from '../../Services/eventsHandler.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})

export class PageHomeComponent implements OnInit {
  currentUser: User;
  isCalendarOpen: boolean;
  idTaken: boolean;

  constructor(private appService: EventsHandler, private service: FirebaseService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('HOME this.currentUser: ');
    console.log(this.currentUser);
    this.idTaken = (this.currentUser != null);
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
}
