import { Component, Input } from '@angular/core';
import { Event } from '../events.model';
import { User } from '../users.model';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
  providers: [FirebaseService]
})
export class NewEventComponent {

  // @Input()
  currentEvent: Event;

  onSuccess: string;
  onError: string;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: FirebaseService) {

    this.currentEvent = new Event;
    this.currentEvent.sede = 'Libreria Ostia';
    this.currentEvent.immagine = 'immagine default';
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
