import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './Pages/page-home/page-home.component';
import { PageNeweventComponent } from './Pages/page-newevent/page-newevent.component';
import { PageNotfoundcomponentComponent } from './Pages/page-notfoundcomponent/page-notfoundcomponent.component';
import { PageProfileComponent } from './Pages/page-profile/page-profile.component';
import { NewEventGuard } from './Pages/page-newevent/newevent.guard';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PageHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: PageLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'new-event',
    component: PageNeweventComponent,
    canDeactivate: [NewEventGuard],
    pathMatch: 'full'
  },
  {
    path: 'new-event/:key',
    component: PageNeweventComponent,
    canDeactivate: [NewEventGuard],
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: PageProfileComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotfoundcomponentComponent,
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
