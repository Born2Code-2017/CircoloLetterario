import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PageNeweventComponent } from './page-newevent.component';

@Injectable()
export class NewEventGuard implements CanDeactivate<PageNeweventComponent> {
    canDeactivate(
        component: PageNeweventComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        if (component.onCancel) {
            return window.confirm('Ci sono modifiche non salvate. Sei sicuro di voler cancellare?');
        } else {
            alert('Evento salvato con successo!');
            return true;
        }
    }
}
