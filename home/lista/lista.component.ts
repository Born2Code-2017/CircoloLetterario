import { Component, Input, OnInit } from '@angular/core';
import { Event } from "../../events.model";
import { FirebaseService } from '../../firebase.service';
//import 'core-js/es6s/array';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['../home.component.css']
})


export class ListaComponent implements OnInit{

  eventList: Event[];
  eventKeys: string[];

  @Input()
  eventsId: number[];

  showEvents: Event[];
  

  constructor(private service: FirebaseService) {
    this.loadList(13);
  }

  ngOnInit(){
    this.service.clickedDay.subscribe(num => this.showList(num));
  }

  loadList(day:number){

    this.eventKeys = [];
    //id egli eventi dell'utente
    this.eventsId = [];
    this.eventList = [];
    this.service.getData('Eventi.json').subscribe(eventi => {
      for (let i in eventi){
        
        if(this.eventsId.indexOf(eventi[i].id)!== -1){
          this.eventList.push(eventi[i]);
          this.eventKeys.push(i);
          //console.log(i);
        } 
      }
      console.log('------------');
      this.showList(day);//giorno odierno
    });

    
  }

  showList(giorno:number){

    console.log('showList');
    this.showEvents = [];
    for(var idx in this.eventList){
      var evento = this.eventList[idx];            
      var data = evento.data;
      var _numero = data.split("-");
      var numero = _numero[2];

      if(parseInt(numero)>=giorno){
        //console.log(idx);
        this.showEvents.push(this.eventList[idx]);
        //console.log(this.eventList[idx]);
        //console.log("giorno: "+numero);
      }
    }
    
  }

  showEvent(id:number){
    console.log(id);
    for(var e in this.eventList){
      if(this.eventList[e].id === id){

        //chiave evento
        var str = this.eventKeys[e];
        console.log(str);

        //evento vuoto
        var evento = new Event();
        this.service.emptyEvent(str, evento).subscribe(arg => {
          console.log('eliminato');
        })
      }

    }
    this.loadList(13);
  }

}
