import {Component, OnInit} from '@angular/core';
import {EventsHandler} from '../../Services/eventsHandler.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  utente: string;
  password: string;
  loginError = false;
  loginDone = false;

  constructor() {
  }

  ngOnInit() {
  }

  login() {
    this.loginError = false;
    this.loginDone = true;
    console.log('loginDone: ' + this.loginDone);
  }


}
