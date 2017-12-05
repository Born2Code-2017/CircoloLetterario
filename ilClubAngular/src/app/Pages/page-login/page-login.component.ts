import {Component} from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {UserService} from '../../user.service';
import {Router, ActivatedRoute} from '@angular/router';
import {EventsHandler} from '../../Services/eventsHandler.service';
import {UserLoginService} from '../../Services/user-login.service';

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

  constructor(private router: Router, private service: FirebaseService, private serviceUser: UserService, private userService: UserLoginService) {
    // this.serviceUser.getEmail().subscribe(arg => console.log(arg));
  }

  login() {
    this.service.getData('Utenti.json').subscribe(users => {

      for (const idx in users) {
        if (users[idx].email.toLowerCase() === this.email.toLowerCase() &&
            users[idx].password === this.password) {
          this.loginError = false;
          this.loginDone = true;
          // this.serviceUser.setUtente(users[idx]);
          this.userService.setLoggedUser(users[idx]);
          localStorage.setItem('email', users[idx].email);
        } else {
          this.loginError = true;
          this.loginDone = false;
        }
      }
    });
    console.log('loginDone: ' + this.loginDone);
  }
}
