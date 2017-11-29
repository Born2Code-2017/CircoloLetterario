import {Component, Input} from '@angular/core';
import {FirebaseService} from '../firebase.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  dayOfMouth = [];
  selectedDay: number;
  calendario: any;

  @Input() isCalendarVisible: boolean;

  constructor(private service: FirebaseService) {
    for (let i = 1; i < 31; i++) {
      this.dayOfMouth.push(i);
    }
  }

  show() {
    this.isCalendarVisible = true;
  }

  hide() {
    this.isCalendarVisible = false;
  }

  showDay() {
    this.service.clickedDay.emit(this.selectedDay);
    this.hide();
  }

  changeSelectedDay(dayNum: number) {
    this.selectedDay = dayNum;
  }
}
