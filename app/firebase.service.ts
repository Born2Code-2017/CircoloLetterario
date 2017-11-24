import { Injectable } from '@angular/core';
import { Event } from './events.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FirebaseService {

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

    public getEvent(data: string, id: number) {
        return this.http.get(this.apiUrl + 'Eventi.json/' + id)
        .map((response: Response) => response.json());
    }

    public createEvent(event: Event) {
        return this.http.post(this.apiUrl + 'Eventi.json', event)
        .map((response: Response) => response.json());
    }

    public deleteEvent(id: string) {
        return this.http.delete(this.apiUrl + 'Eventi.json/' + id)
        .map((response: Response) => response.json());
    }

    public editEvent(id: string, event: Event) {
        return this.http.put(this.apiUrl + 'Eventi.json/' + id, event)
        .map((response: Response) => response.json());
    }

}
