import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-page-esplora',
  templateUrl: './page-esplora.component.html',
  styleUrls: ['./page-esplora.component.css']
})
export class PageEsploraComponent  {
  currentUser: User;
  idTaken: boolean;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.idTaken = (this.currentUser != null);
  }

}

