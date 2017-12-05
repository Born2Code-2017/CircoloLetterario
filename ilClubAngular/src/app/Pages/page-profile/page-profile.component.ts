import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {UserLoginService} from '../../Services/user-login.service';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {
  currentUser: User;

  constructor( private userService: UserLoginService) {
    this.currentUser = new User();
    console.log('loggedUser constructor');
  }

  ngOnInit() {
    console.log('loggedUser ngOnInit');
    console.log(this.userService.getLoggedUser());
    this.userService.getLoggedUser().subscribe(loggedUser => {
      console.log('loggedUser:');
      console.log(loggedUser);
      this.currentUser = loggedUser;
    });
  }

  editImage() {
    // qui faccio la modifica dell'immagine di profilo
    // cliccando su edit l'utente puo cambiare l'immagine del profilo
  }
}
