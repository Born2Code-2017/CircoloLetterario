import {Component} from '@angular/core';
import {User} from '../../models/user';
import {Event} from '../../models/event';
import {Router, ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../firebase.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-page-newevent',
  templateUrl: './page-newevent.component.html',
  styleUrls: ['./page-newevent.component.css']
})

export class PageNeweventComponent {
  currentEvent: Event;
  onSave: boolean;
  onSuccess: string;
  onError: string;
  key: string;
  show: boolean = false;
  email: string;

  constructor(private router: Router, 
    activatedRoute: ActivatedRoute, 
    private service: FirebaseService, 
    private serviceUser: UserService) {

    this.email = localStorage.getItem('email');
    //this.serviceUser.getEmail().subscribe(address => {this.email = address; console.log(address); });
    
    this.key = activatedRoute.snapshot.params['key'];
    
    if(this.key){
      this.service.getEvent(this.key).subscribe(event => {
        this.currentEvent = event; 
        console.log(this.key); 
        console.log(this.currentEvent);
        this.show = true;
      });
    }
    else{
      
      this.currentEvent = new Event;
      this.currentEvent.sede = 'Libreria Ostia';
      this.currentEvent.immagine = 'generale';
      this.currentEvent.owner = this.email;
      this.show = true;
      console.log(this.email);
    }
  }
  

  cancel() {
    this.onSave = false;
    this.router.navigateByUrl('/home');
  }

  save() {
    this.onSave = true;
    if(!this.key){
      this.service.createEvent(this.currentEvent).subscribe(arg => {
        this.router.navigateByUrl('/home');
        this.onSuccess = 'Evento salvato';
        console.log(this.onSuccess);
        },
        err => {
          this.onError = 'errore nel salvataggio';
          console.log(this.onError);
        }
      );
    }else{
      this.service.editEvent(this.key, this.currentEvent).subscribe(arg => {
        this.router.navigateByUrl('/home');
        this.onSuccess = 'Evento modificato';
        console.log(this.onSuccess);
        },
        err => {
          this.onError = 'errore nella modifica';
          console.log(this.onError);
        }
      );
    }
  }
}
