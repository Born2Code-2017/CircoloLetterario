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

  @Input() esploraFilter: boolean;
  @Input() ownerFilter: boolean;
  @Input() goingFilter: boolean;

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
        const isOwner = events[idx].owner.toLowerCase() === this.currentUser.email.toLowerCase();
        const isGoing = _.includes(this.currentUser.eventi, idx);
        console.log('isOwner:' + isOwner);
        console.log('isGoing:' + isGoing);
        if ((this.esploraFilter && isOwner === false && isGoing === false) ||
          (this.goingFilter && (isOwner || isGoing)) ||
          (this.ownerFilter && isOwner)) {
          console.log('add evento to list');
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

          this.service.deleteEvent(key).subscribe(arg => {
            console.log('eliminato');
            this.loadList(1);
          });

        }
      }
    }
  }

  editEvent(key: string) {
    this.router.navigateByUrl('/new-event/' + key);
  }

  partecipaEvent(key: string) {

    var keys = this.currentUser.eventi;
    console.log(Object.keys(keys).length);
    if(_.includes(keys, key)){
      //tolgo
      console.log(keys); 
      //keys.splice(keys[key],1);
      delete keys[key];
      this.currentUser.eventi = keys;
      console.log(Object.keys(this.currentUser.eventi).length);
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));

    }else{

      //aggiungo
      console.log(keys); 
      keys[key]=key;
      //keys.push(key);
      this.currentUser.eventi = keys;
      console.log(Object.keys(this.currentUser.eventi).length);
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    }
    this.loadList(1);
    //this.service.edit('Utenti/' + this.currentUser + '/eventi.json', key).subscribe(ids => this.loadList(1));

  }
}
