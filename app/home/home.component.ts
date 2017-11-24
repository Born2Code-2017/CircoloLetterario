import { Component, Output } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { User } from '../users.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    providers: [FirebaseService]
})

export class HomeComponent {

}
