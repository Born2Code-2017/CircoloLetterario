import {Component} from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {
  email: string;
  password: string;
  loginError = false;
  loginDone = false;

  constructor(private router: Router, private service: FirebaseService) {
    // this.serviceUser.getEmail().subscribe(arg => console.log(arg));
  }

  login() {
    this.service.getData('Utenti.json').subscribe(users => {
      for (const idx in users) {
        if (users[idx].email.toLowerCase() === this.email.toLowerCase() &&
            users[idx].password === this.password) {
          this.loginError = false;
          this.loginDone = true;
          localStorage.setItem('currentUser', JSON.stringify(users[idx]));
          console.log('login effetuato con successo' + localStorage.getItem('currentUser'));
          this.router.navigateByUrl('/home');
        } else {
          this.loginError = true;
          console.log('errore nel login');
        }
      }
    });
  }
}
