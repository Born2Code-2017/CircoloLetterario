import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {
  eventList: Event[]; // per caricare gli eventi da visualizzare
  currentUser: User; // per caricare le info dell'utente loggato

  constructor() { }

  ngOnInit() {
  }

  loadEvents() {
    // qui faccio la get degli eventi da visualizzare
    // l'utente visualizza gli eventi di cui è l'owner
  }

  editImage() {
    // qui faccio la modifica dell'immagine di profilo
    // cliccando su edit l'utente puo cambiare l'immagine del profilo
  }
}
