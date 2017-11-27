import { Injectable, EventEmitter } from '@angular/core';
import { Event } from './events.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FirebaseService {

    public clickedDay = new EventEmitter<number>();

    private apiUrl: string;
    private http: Http;

    //il new Http() è sostituito da (http: Http), lo istanzio direttamente nel parametro nel costruttore, fa da solo Angular Injectable
    constructor(http: Http) {
        this.apiUrl = 'https://ilclub-e17b5.firebaseio.com/';
        this.http = http;
    }

    public getData(data: string) {
        return this.http.get(this.apiUrl + data)
        .map((res: Response) => res.json());
        
    }

    public getEvent(id: number){
        return this.http.get(this.apiUrl + 'Eventi.json/' + id).map((response: Response) => response.json());
    }

    public createEvent(event: Event){
        return this.http.post(this.apiUrl + 'Eventi.json', event).map((response: Response) => response.json());
    }

    public emptyEvent(key:string, event: Event){
        return this.http.put(this.apiUrl + 'Eventi/' + key + '.json', event).map((response: Response) => response.json());
    }

    public deleteEvent(key: string){
        return this.http.delete(this.apiUrl + 'Eventi/' + key).map((response: Response) => response.json());
    }

    public editEvent(key:string, event: Event){
        return this.http.put(this.apiUrl + 'Eventi/' + key, event).map((response: Response) => response.json());
    }

}