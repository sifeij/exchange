import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BASE_URI } from '../config';
import { Order } from '../models/order';

@Injectable()
export class OrderService {

    private orderUrl = `${BASE_URI}/api/order`;

    constructor(private http: Http) { }

    get(): Observable<Order[]> {
        return this.http
            .get(this.orderUrl)
            .map(t => t.json())
            .catch(this.handleError);
    }

    placeOrder(order: Order): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .put(this.orderUrl, order, options)
            .catch(this.handleError);
    }

    private handleError(error: any, caught: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
