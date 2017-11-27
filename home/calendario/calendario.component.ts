import { Component } from '@angular/core';
import { Event } from "../../events.model";
import { ListaComponent } from "../lista/lista.component";
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['../home.component.css']
})

export class CalendarioComponent {

  constructor(private service: FirebaseService) {
  }

  showDay(num:number){
    this.service.clickedDay.emit(num);
  }

}
