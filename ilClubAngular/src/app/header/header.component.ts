import {Component, OnInit} from '@angular/core';
import { EventsHandler } from '../Services/eventsHandler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean;
  isCalendarOpen: boolean;
  constructor(private appService: EventsHandler) {
    this.isMenuOpen = false;
    this.isCalendarOpen = false;
  }
  ngOnInit() {
    this.getIsMenuOpen();
  this.getIsCalendarOpen();
  }
  getIsCalendarOpen(): void {
    this.appService.getCalendarOpen().subscribe(calendarState => {
      this.isCalendarOpen = calendarState;
    });
  }
  getIsMenuOpen(): void {
    this.appService.getIsMenuOpen().subscribe(isMenuOpen => {
      console.log('HEADER getIsMenuOpen: ' + isMenuOpen);
      this.isMenuOpen = isMenuOpen;
    });
  }

  menuClicked() {
    this.appService.setIsMenuOpen(!this.isMenuOpen);
  }
}
