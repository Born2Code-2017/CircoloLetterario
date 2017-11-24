import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import {PageHomeComponent} from './Pages/page-home/page-home.component';
import {PageProfileComponent} from './Pages/page-profile/page-profile.component';
import {PageNewEventComponent} from './Pages/page-new-event/page-new-event.component';
import {PageNotFoundComponent} from './Pages/page-notfoundcomponent/page-notfoundcomponent.component';

const appRoutes: Routes = [
  { path: '',   component: PageHomeComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'profile',      component: PageProfileComponent },
  { path: 'new event',      component: PageNewEventComponent },
  /*{ path: 'app-page-profile',      component: PageProfileComponent },*/
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    PageHomeComponent,
    PageProfileComponent,
    PageNewEventComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
