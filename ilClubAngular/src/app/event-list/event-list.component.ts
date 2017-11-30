import {Component, Input, OnInit} from '@angular/core';
import {FirebaseService} from '../firebase.service';
import {Event} from '../models/event';
import {Router, ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventList: Event[];
  eventKeys: string[];

  @Input()
  eventsId: string[];

  showEvents: Event[];


  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: FirebaseService) {
    
    //this.eventsId = [];
    if(this.eventsId != []){
      this.loadList(1);
    }
    
  }

  ngOnInit() {
    this.service.clickedDay.subscribe(num => this.showList(num));
  }

  loadList(day: number) {
    
    this.eventKeys = [];
    this.eventList = [];
    console.log('load');
    
    this.service.getData('Eventi.json').subscribe(events => {
      for (const idx in events) {
        if (events[idx].owner ==='sandra.green@email.com' || this.eventsId && this.eventsId.indexOf(idx) !== -1) {
          var event={
            key: idx,
            data: events[idx].data,
            id:events[idx].id,
            descrizione: events[idx].descrizione,
            immagine: events[idx].immagine,
            ora: events[idx].ora,
            owner: events[idx].owner,
            partecipanti: events[idx].partecipanti,
            sede: events[idx].sede,
            titolo: events[idx].titolo
          }
          this.eventList.push(event);
          //this.eventKeys.push(idx);
          // console.log(i);
        }
      }
      console.log('------------');
      this.eventList = _.sortBy(this.eventList, e => e.data);
      this.showList(day); // giorno odierno
    });
  }

  showList(selectedDay: number) {
    console.log('showList');
    this.showEvents = [];
    for (const event of this.eventList) {
       const dayNumber = (event.data.split('-'))[2];

      if(parseFloat(dayNumber) >= selectedDay){
        // console.log(idx);
        this.showEvents.push(event);
        
        // console.log(this.eventList[idx]);
        // console.log("giorno: "+numero);
      }
    }
  }

  //tasto cancella, occhio a id / key
  deleteEvent(key: string) {
    if(window.confirm('sicuro di voler cancellare?')){
      for (const eventidx in this.eventList) {
        
        if (this.eventList[eventidx].owner === 'sandra.green@email.com' && this.eventList[eventidx].key === key) {
          //chiave evento
          console.log(key);
          console.log(eventidx);
          //this.eventList.splice(parseInt(eventidx),1);
  
          this.service.deleteEvent(key).subscribe(arg => {
            console.log('eliminato');
            // this.router.navigateByUrl('/home');
            this.loadList(1);
          });  
          
        }
      }
    }
    //console.log(key);
    //this.loadList(1);
  }

  editEvent(key: string){
    this.router.navigateByUrl('/new-event/'+key);
  }

}
