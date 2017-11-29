import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() calendarVisibleChange: EventEmitter<boolean>;
  constructor(private service: FirebaseService) {
    this.calendarVisibleChange = new EventEmitter<boolean>();
    for (let i = 1; i < 31; i++) {
      this.dayOfMouth.push(i);
    }
  }

  show() {
    this.isCalendarVisible = true;
    this.calendarVisibleChange.emit(this.isCalendarVisible);
  }

  hide() {
    this.isCalendarVisible = false;
    this.calendarVisibleChange.emit(this.isCalendarVisible);
  }

  showDay() {
    this.service.clickedDay.emit(this.selectedDay);
    this.hide();
  }

  changeSelectedDay(dayNum: number) {
    this.selectedDay = dayNum;
  }
}
