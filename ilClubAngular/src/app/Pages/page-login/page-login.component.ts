import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  utente: string;
  password: string;
  loginError = false;
  constructor() { }
  login() {
    this.loginError = true;
  }
  ngOnInit() {
  }

}
