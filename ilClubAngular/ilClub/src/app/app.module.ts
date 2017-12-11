import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routes';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import {PageHomeComponent} from './Pages/page-home/page-home.component';
import {PageNeweventComponent} from './Pages/page-newevent/page-newevent.component';
import {PageNotfoundcomponentComponent} from './Pages/page-notfoundcomponent/page-notfoundcomponent.component';
import {PageProfileComponent} from './Pages/page-profile/page-profile.component';
import {HeaderComponent} from './header/header.component';
import {SideMenuComponent} from './sidemenu/sidemenu.component';
import {CalendarComponent} from './calendar/calendar.component';
import {PageLoginComponent} from './Pages/page-login/page-login.component';
import {FirebaseService} from './firebase.service';
import {NewEventGuard} from './Pages/page-newevent/newevent.guard';
import { EventListComponent } from './event-list/event-list.component';
import {EventsHandler} from './Services/eventsHandler.service';
import {AuthGuard} from './Guards/auth.guard';
import { PageEsploraComponent } from './Pages/page-esplora/page-esplora.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageNeweventComponent,
    PageNotfoundcomponentComponent,
    PageProfileComponent,
    HeaderComponent,
    SideMenuComponent,
    CalendarComponent,
    PageLoginComponent,
    EventListComponent,
    PageEsploraComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    FirebaseService,
    NewEventGuard,
    AuthGuard,
    EventsHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
