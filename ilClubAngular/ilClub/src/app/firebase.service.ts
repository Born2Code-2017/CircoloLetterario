import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Event} from './models/event';


@Injectable()
export class FirebaseService {

  public clickedDay = new EventEmitter<number>();
  private apiUrl: string;
  private http: Http;

  constructor(http: Http) {
    this.apiUrl = 'https://ilclub-e17b5.firebaseio.com/';
    this.http = http;
  }

  public getData(data: string) {
    return this.http.get(this.apiUrl + data)
      .map((res: Response) => res.json());

  }

  public getEvent(key: string) {
    return this.http.get(this.apiUrl + 'Eventi/' + key+'.json').map((response: Response) => response.json());
  }

  public createEvent(event: Event) {
    return this.http.post(this.apiUrl + 'Eventi.json', event).map((response: Response) => response.json());
  }

  public deleteEvent(key: string){
    return this.http.delete(this.apiUrl + 'Eventi/' + key + '.json').map((response: Response) => response.json());
  }

  public editEvent(key: string, event: Event) {
    return this.http.put(this.apiUrl + 'Eventi/' + key+'.json', event).map((response: Response) => response.json());
  }

  public edit(key: string, id: string) {
    return this.http.post(this.apiUrl + key, id).map((response: Response) => response.json());
  }

}
