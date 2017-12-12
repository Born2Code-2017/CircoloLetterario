import {Injectable, isDevMode} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {PageNeweventComponent} from './page-newevent.component';

@Injectable()
export class NewEventGuard implements CanDeactivate<PageNeweventComponent> {
  canDeactivate(component: PageNeweventComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve) => {

      if (component.onSave) {
        if (isDevMode()) {
          alert('Evento salvato con successo!');
        }
        resolve(true);
      } else {
        resolve(window.confirm('Ci sono modifiche non salvate. Sei sicuro di voler cancellare?'));
      }
    });
  }
}
