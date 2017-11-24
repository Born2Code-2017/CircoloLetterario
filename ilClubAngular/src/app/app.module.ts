import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageHomeComponent } from './Pages/page-home/page-home.component';
import { PageNeweventComponent } from './Pages/page-newevent/page-newevent.component';
import { PageNotfoundcomponentComponent } from './Pages/page-notfoundcomponent/page-notfoundcomponent.component';
import { PageProfileComponent } from './Pages/page-profile/page-profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home'},
  { path: 'home', component: PageHomeComponent },
  { path: 'new event', component: PageNeweventComponent },
  { path: 'profile', component: PageProfileComponent},
  { path: '**', component: PageNotfoundcomponentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageNeweventComponent,
    PageNotfoundcomponentComponent,
    PageProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
