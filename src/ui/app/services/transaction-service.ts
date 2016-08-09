import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BASE_URI }    from '../config';
import { Transaction } from '../models/transaction';

@Injectable()
export class TransactionService {

    private transactionUrl = `${BASE_URI}/api/transaction`;

    constructor(private http: Http) {}

    get(): Observable<Transaction[]> {
        return this.http
                   .get(this.transactionUrl)
                   .map(t => t.json())
                   .catch(this.handleError);
    }

    getSummary(): Observable<Transaction[]> {
        let url = `${this.transactionUrl}/summary`;
        return this.http
                   .get(url)
                   .map(t => t.json())
                   .catch(this.handleError);
    }

    getByCurrency(currency: string): Observable<Transaction> {
        let url = `${this.transactionUrl}/{transaction.currency}`;
        return this.http
                   .get(url)
                   .map(t => t.json)
                   .catch(this.handleError);
    }

    deposit(currency: string, amount: number): Observable<any> {
        let url = `${this.transactionUrl}/${currency}`;
        let transaction: Transaction = {
            currency: currency,
            amount: amount
        };
        console.log(JSON.stringify(transaction));
        return this.http
                   .put(url, JSON.stringify(transaction))
                   .catch(this.handleError);
    }

    private handleError(error: any, caught: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
