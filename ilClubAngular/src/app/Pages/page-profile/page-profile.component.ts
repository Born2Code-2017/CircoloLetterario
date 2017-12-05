import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent {
  currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('PROFILE this.currentUser ' + this.currentUser);
  }
  editImage() {
    // qui faccio la modifica dell'immagine di profilo
    // cliccando su edit l'utente puo cambiare l'immagine del profilo
  }
}
