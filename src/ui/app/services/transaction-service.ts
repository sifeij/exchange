import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BASE_URI }    from '../config';
import { Transaction } from '../models/transaction';

@Injectable()
export class TransactionService {

    private transactionUrl = `${BASE_URI}/api/transaction`;

    constructor(private _http: Http) {}

    get(): Observable<Transaction[]> {
        return this._http
                   .get(this.transactionUrl)
                   .map(t => t.json())
                   .catch(this.handleError);
    }

    getSummary(): Observable<Transaction[]> {
        let url = `${this.transactionUrl}/summary`;
        return this._http
                   .get(url)
                   .map(t => t.json())
                   .catch(this.handleError);
    }

    getByCurrency(currency: string): Observable<Transaction> {
        let url = `${this.transactionUrl}/{transaction.currency}`;
        return this._http
                   .get(url)
                   .map(t => t.json)
                   .catch(this.handleError);
    }

    deposit(currency: string, amount: number): Observable<any> {
        let url = `${this.transactionUrl}/${currency}`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http
                   .put(url, amount, options)
                   .catch(this.handleError);
    }

    private handleError(error: any, caught: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
