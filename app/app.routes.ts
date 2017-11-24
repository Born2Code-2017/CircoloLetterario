import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewEventComponent } from './new-event/new-event.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'new-event',
        component: NewEventComponent
    },

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);
