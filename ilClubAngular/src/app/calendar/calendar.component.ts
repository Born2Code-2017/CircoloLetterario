import {Component} from '@angular/core';
import {Event} from '../models/event';
import {FirebaseService} from '../firebase.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  constructor(private service: FirebaseService) {
  }

  showDay(num: number) {
    this.service.clickedDay.emit(num);
  }

}
