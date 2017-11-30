import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from './models/user';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

    email: Subject<string>= new Subject();
    constructor() { }
  
    setEmail(e): void {
      this.email.next(e);
      console.log(e);
    }
  
    getEmail(): Observable<string> {
      return this.email.asObservable();
    }
    
}