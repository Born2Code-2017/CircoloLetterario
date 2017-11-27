import {Component} from '@angular/core';
import {User} from '../../models/user';
import {Event} from '../../models/event';
import {Router, ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../firebase.service';

@Component({
  selector: 'app-page-newevent',
  templateUrl: './page-newevent.component.html',
  styleUrls: ['./page-newevent.component.css'],
  providers: [FirebaseService]
})

export class PageNeweventComponent {
  currentEvent: Event;
  onSave: boolean;
  onSuccess: string;
  onError: string;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: FirebaseService) {
    this.currentEvent = new Event;
    this.currentEvent.sede = 'Libreria Ostia';
    this.currentEvent.immagine = 'generale';
    this.currentEvent.owner = 'utente loggato';
  }

  cancel() {
    this.onSave = false;
    this.router.navigateByUrl('/home');
  }

  save() {
    this.onSave = true;
    this.service.createEvent(this.currentEvent)
      .subscribe(
        arg => {
          this.router.navigateByUrl('/home');
          this.onSuccess = 'Evento salvato';
          console.log(this.onSuccess);
        },
        err => {
          this.onError = 'errore nel salvataggio';
          console.log(this.onError);
        }
      );
  }
}
