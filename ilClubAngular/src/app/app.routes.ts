import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './Pages/page-home/page-home.component';
import { PageNeweventComponent } from './Pages/page-newevent/page-newevent.component';
import { PageNotfoundcomponentComponent } from './Pages/page-notfoundcomponent/page-notfoundcomponent.component';
import { PageProfileComponent } from './Pages/page-profile/page-profile.component';
import { NewEventGuard } from './Pages/page-newevent/newevent.guard';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PageHomeComponent
  },
  {
    path: 'new',
    component: PageNeweventComponent,
    canDeactivate: [NewEventGuard]
  },
  {
    path: 'profile',
    component: PageProfileComponent
  },
  {
    path: '**',
    component: PageNotfoundcomponentComponent
  }
];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
