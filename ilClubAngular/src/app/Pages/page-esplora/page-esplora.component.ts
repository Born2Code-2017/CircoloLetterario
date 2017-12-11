import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { EventsHandler } from '../../Services/eventsHandler.service';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-page-esplora',
  templateUrl: './page-esplora.component.html',
  styleUrls: ['./page-esplora.component.css']
})
export class PageEsploraComponent implements OnInit {
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

