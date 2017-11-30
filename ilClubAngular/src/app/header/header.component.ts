import {Component, OnInit} from '@angular/core';
import {EventsHandler} from '../Services/eventsHandler.service';
import {User} from '../models/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean;
  isCalendarOpen: boolean;
  userEmail: string;

  constructor(private appService: EventsHandler, private serviceUser: UserService) {
    this.isMenuOpen = false;
    this.isCalendarOpen = false;
    // this.userEmail = localStorage.getItem('email');
  }

  ngOnInit() {
    // this.serviceUser.setEmail(this.userEmail);
    this.appService.getCalendarOpen().subscribe(calendarState => {
      this.isCalendarOpen = calendarState;
    });
    this.appService.getIsMenuOpen().subscribe(isMenuOpen => {
      console.log('HEADER getIsMenuOpen: ' + isMenuOpen);
      this.isMenuOpen = isMenuOpen;
    });
  }
  closeSideMenu() {
    this.appService.setIsMenuOpen(false);
  }
  menuClicked() {
    this.appService.setIsMenuOpen(!this.isMenuOpen);
  }
}
