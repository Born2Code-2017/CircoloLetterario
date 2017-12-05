import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {User} from '../models/user';

@Injectable()
export class UserLoginService {
  loggedUser: Subject<User> = new Subject();
  constructor() { }

  getLoggedUser(): Observable<User> {
    return this.loggedUser.asObservable();
  }

  setLoggedUser(newLoggedUser: User): void {
    console.log('sei in service user:');
    console.log(newLoggedUser);
    this.loggedUser.next(newLoggedUser);
  }
}
