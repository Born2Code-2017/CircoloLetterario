import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './home/lista/lista.component';
import { CalendarioComponent } from './home/calendario/calendario.component';
import { NewEventComponent } from './new-event/new-event.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    CalendarioComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
