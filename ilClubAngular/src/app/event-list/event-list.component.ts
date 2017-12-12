import {Component, Input, OnInit} from '@angular/core';
import {FirebaseService} from '../firebase.service';
import {Event} from '../models/event';
import {Router, ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {User} from '../models/user';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  eventList: Event[];
  eventKeys: string[];

  @Input() eventsId: string[];
  showEvents: Event[];
  currentUser: User;

  @Input() esplora: boolean;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: FirebaseService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    if (this.eventsId !== []) {
      this.loadList(1);
    }
    this.service.clickedDay.subscribe(num => this.showList(num));
  }

  loadList(day: number) {
    this.eventKeys = [];
    this.eventList = [];
    this.service.getData('Eventi.json').subscribe(events => {
      for (const idx in events) {
        console.log('event:' + idx);
        console.log(this.eventsId);

        //solo i miei eventi
        if (!this.esplora) {

          if(events[idx].owner.toLowerCase() === this.currentUser.email.toLowerCase() || this.eventsId && _.includes(this.eventsId, idx)){
            console.log('miei eventi');
            const tmpEvent = {
              key: idx,
              data: events[idx].data,
              id: events[idx].id,
              descrizione: events[idx].descrizione,
              immagine: events[idx].immagine,
              ora: events[idx].ora,
              owner: events[idx].owner,
              partecipanti: events[idx].partecipanti,
              sede: events[idx].sede,
              titolo: events[idx].titolo
            };
            this.eventList.push(tmpEvent);
          }
      
        }
        //esplora nuovi eventi
        else if (this.esplora){

          if(events[idx].owner.toLowerCase() !== this.currentUser.email.toLowerCase() && !this.eventsId[idx]){

            console.log('esplora eventi');
            const tmpEvent = {
              key: idx,
              data: events[idx].data,
              id: events[idx].id,
              descrizione: events[idx].descrizione,
              immagine: events[idx].immagine,
              ora: events[idx].ora,
              owner: events[idx].owner,
              partecipanti: events[idx].partecipanti,
              sede: events[idx].sede,
              titolo: events[idx].titolo
            };
            this.eventList.push(tmpEvent);

          }

        }


      }
      this.eventList = _.sortBy(this.eventList, e => e.data);
      this.showList(day); // giorno odierno
    });
  }

  showList(selectedDay: number) {
    console.log('showList');
    this.showEvents = [];
    for (const event of this.eventList) {
      const dayNumber = (event.data.split('-'))[2];

      if (parseFloat(dayNumber) >= selectedDay) {
        // console.log(idx);
        this.showEvents.push(event);

        // console.log(this.eventList[idx]);
        // console.log("giorno: "+numero);
      }
    }
    console.log('this.showEvents caricato:' + this.showEvents);
    console.log(this.showEvents);
  }

  // tasto cancella, occhio a id / key
  deleteEvent(key: string) {
    if (window.confirm('sicuro di voler cancellare?')) {
      for (const eventidx in this.eventList) {

        if (this.eventList[eventidx].owner === 'sandra.green@email.com' && this.eventList[eventidx].key === key) {
          // chiave evento
          console.log(key);
          console.log(eventidx);
          // this.eventList.splice(parseInt(eventidx),1);

          this.service.deleteEvent(key).subscribe(arg => {
            console.log('eliminato');
            // this.router.navigateByUrl('/home');
            this.loadList(1);
          });

        }
      }
    }
    // console.log(key);
    // this.loadList(1);
  }

  editEvent(key: string) {
    this.router.navigateByUrl('/new-event/' + key);
  }

  partecipaEvent(key: string) {

  this.eventsId.push(key);
  this.service.edit('Utenti/'+this.currentUser+'/eventi.json', this.eventsId).subscribe(ids => this.loadList(1));

}
