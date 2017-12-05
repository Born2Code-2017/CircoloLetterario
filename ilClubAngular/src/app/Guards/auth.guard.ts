import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> {
    console.log('GUARD' + localStorage.getItem('currentUser'));
    return new Promise((resolve) => {
      if (localStorage.getItem('currentUser')) {
        // logged in so return true
        resolve(true);
      } else {
        // not logged in so redirect to login page with the return url
        this.router.navigateByUrl('/login');
        resolve(false);
      }
    });
  }
}
