import {Component, OnInit} from '@angular/core';
import { EventsHandler } from '../Services/eventsHandler.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SideMenuComponent implements OnInit {
  isMenuOpen: boolean;

  constructor(private router: Router, private appService: EventsHandler) {
    this.isMenuOpen = false;
    window.addEventListener('orientationchange', () => {
      if(Math.abs(Number(window.orientation)) === 90)
        this.close(); // close menu on landscape
      }, false);
    window.addEventListener("resize", () => {
      if(window.innerWidth >= 700)
        this.close();
    });
  }

  ngOnInit() {
    this.getIsMenuOpen();
    console.log('sei in init');
  }
  close() {
    this.appService.setIsMenuOpen(false);
  }
  getIsMenuOpen(): void {
    console.log('SIDEMENU');
    this.appService.getIsMenuOpen().subscribe(isMenuOpen => {
      console.log('SIDEMENU getIsMenuOpen: ' + isMenuOpen);
      this.isMenuOpen = isMenuOpen;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    console.log('logout effetuato con successo');
    this.close();
    this.router.navigateByUrl('/login');
  }
}
