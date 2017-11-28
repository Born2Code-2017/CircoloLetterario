import {Component, Input, OnInit} from '@angular/core';
import {FirebaseService} from '../firebase.service';
import {Event} from '../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventList: Event[];
  eventKeys: string[];

  @Input()
  eventsId: number[];

  showEvents: Event[];


  constructor(private service: FirebaseService) {
    this.eventKeys = [];
    this.eventList = [];
    //this.eventsId = [];
    if(this.eventsId != []){
      this.loadList(13);
    }
    
  }

  ngOnInit() {
    this.service.clickedDay.subscribe(num => this.showList(num));
  }

  loadList(day: number) {

    //this.eventKeys = [];
    // id egli eventi dell'utente
    //this.eventsId = [];
    //this.eventList = [];
    this.service.getData('Eventi.json').subscribe(events => {
      for (const idx in events) {
        if (this.eventsId && this.eventsId.indexOf(events[idx].id) !== -1) {
          this.eventList.push(events[idx]);
          this.eventKeys.push(idx);
          // console.log(i);
        }
      }
      console.log('------------');
      this.showList(day); // giorno odierno
    });


  }

  showList(selectedDay: number) {
    console.log('showList');
    this.showEvents = [];
    for (const event of this.eventList) {
       const dayNumber = (event.data.split('-'))[2];

      if (parseInt(dayNumber, 10) >= selectedDay) {
        // console.log(idx);
        this.showEvents.push(event);
        // console.log(this.eventList[idx]);
        // console.log("giorno: "+numero);
      }
    }

  }

  showEvent(id: number) {
    console.log(id);
    for (const eventidx in this.eventList) {
      if (this.eventList[eventidx].id === id) {

        // chiave evento
        const eventKey = this.eventKeys[eventidx];
        console.log(eventKey);

        this.service.emptyEvent(eventKey, new Event()).subscribe(arg => {
          console.log('eliminato');
        });
      }
    }
    this.loadList(13);
  }

}
