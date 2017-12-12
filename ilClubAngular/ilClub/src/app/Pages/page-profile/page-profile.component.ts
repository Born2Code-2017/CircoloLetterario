import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent {
  currentUser: User;
  idTaken: boolean;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.idTaken = (this.currentUser != null);
  }

}
