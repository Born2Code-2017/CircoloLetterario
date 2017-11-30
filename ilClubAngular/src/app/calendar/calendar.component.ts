import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../firebase.service';
import {EventsHandler} from '../Services/eventsHandler.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  dayOfMouth = [];
  selectedDay: number;
  calendario: any;

  isCalendarOpen: boolean;
  constructor(private appService: EventsHandler, private service: FirebaseService) {
    for (let i = 1; i < 31; i++) {
      this.dayOfMouth.push(i);
    }
  }
  ngOnInit() {
    this.getIsCalendarOpen();
  }
  changeCalendarState(open: boolean) {
    this.appService.setCalendarOpen(open);
  }
  getIsCalendarOpen(): void {
    this.appService.getCalendarOpen().subscribe(calendarState => {
      console.log('calendarState: ' + calendarState);
      this.isCalendarOpen = calendarState;
    });
  }
  showDay() {
    this.service.clickedDay.emit(this.selectedDay);
    this.changeCalendarState(false);
  }

  changeSelectedDay(dayNum: number) {
    this.selectedDay = dayNum;
  }
}
