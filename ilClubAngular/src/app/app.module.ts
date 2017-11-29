import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routes';

import {AppComponent} from './app.component';
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
import {AppService} from './Services/app-service.service';

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
    EventListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    FirebaseService,
    NewEventGuard,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
