import {Component, OnInit} from '@angular/core';
import {EventsHandler} from '../Services/eventsHandler.service';
import {User} from '../models/user';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean;
  isCalendarOpen: boolean;

  constructor(private appService: EventsHandler,private router: Router, activatedRoute: ActivatedRoute) {
    this.isMenuOpen = false;
    this.isCalendarOpen = false;
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
  logout() {
    localStorage.removeItem('currentUser');
    console.log('logout effetuato con successo');
    this.router.navigateByUrl('/login');
  }
}
