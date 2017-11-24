import { Component, Input } from '@angular/core';
import { Event } from '../../events.model';
import { FirebaseService } from '../../firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['../home.component.css'],
  providers: [FirebaseService]
})

export class ListaComponent {

  eventsList: Event[];
  sortedEvents: Event[];
  service: FirebaseService;

  showEvents: Event[];

  constructor(private router: Router, activatedRoute: ActivatedRoute, service: FirebaseService) {
    this.service = service;
    this.eventsList = [];
    this.showEvents = [];
    this.loadList();
  }

  loadList() {
    this.service.getData('Eventi.json').subscribe(eventi => {
      for (let key in eventi) {
        if (eventi.hasOwnProperty(key)) {
          this.eventsList.push(eventi[key]);
        }
      }
      this.sortedEvents = _.sortBy(this.eventsList, e => e.data);
      this.showList(13); // giorno odierno
    });
  }

  showList(giorno: number) {
    for (let evento of this.sortedEvents){
      const data = evento.data;
      const _numero = data.split('-');
      const numero = _numero[2];
      if (parseFloat(numero) >= giorno) {
        this.showEvents.push(evento);
      }
    }
  }

  nuovo() {
    this.router.navigateByUrl('/new-event');
  }
}
