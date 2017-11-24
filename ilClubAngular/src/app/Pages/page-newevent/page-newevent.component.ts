import { Component} from '@angular/core';
import {User} from '../../models/user';
import {Event} from '../../models/event';
import {FirebaseService} from '../../firebase.service';
import {Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-page-newevent',
  templateUrl: './page-newevent.component.html',
  styleUrls: ['./page-newevent.component.css'],
  providers: [FirebaseService]
})
export class PageNeweventComponent {
  currentEvent: Event;

  onSuccess: string;
  onError: string;
  constructor(private router: Router, private service: FirebaseService) {
    this.currentEvent = new Event;
    this.currentEvent.sede = 'Libreria Ostia';
    this.currentEvent.immagine = 'default';
    this.currentEvent.owner = 'utente loggato';
  }

  cancel() {
    this.router.navigateByUrl('/home');
  }

  save() {
    this.service.createEvent(this.currentEvent)
      .subscribe(
        arg => {
          this.router.navigateByUrl('/home');
          this.onSuccess = 'Evento salvato';
          console.log(this.onSuccess);
        },
        err => {
          this.onError = 'errore nel salvataggio';
        }
      );
  }
}
