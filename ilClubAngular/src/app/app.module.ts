import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { PageHomeComponent } from './Pages/page-home/page-home.component';
import { PageNeweventComponent } from './Pages/page-newevent/page-newevent.component';
import { PageNotfoundcomponentComponent } from './Pages/page-notfoundcomponent/page-notfoundcomponent.component';
import { PageProfileComponent } from './Pages/page-profile/page-profile.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { CalendarComponent } from './calendar/calendar.component';
<<<<<<< HEAD
import { PageLoginComponent } from './Pages/page-login/page-login.component';
=======
>>>>>>> 362946196cbf8f96ac3534cc2ed59cb76482fcb6

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
    PageLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
