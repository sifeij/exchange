import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BASE_URI }    from '../config';
import { Transaction } from '../models/transaction';

@Injectable()
export class TransactionService {
    constructor(private http: Http) {}

    get(): Observable<Transaction[]> {
        return this.http
                   .get(this.transactionUrl)
                   .catch(this.handleError);
    }

    getByCurrency(currency: string): Observable<Transaction> {
        let url = `${this.transactionUrl}/{transaction.currency}`;
        return this.http
                   .get(url)
                   .catch(this.handleError);
    }

    deposit(currency: string, amount: number): Observable<Transaction> {
        let url = `${this.transactionUrl}/{currency}`;
        let transaction: Transaction = {
            currency: currency, amount: amount
        }
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

    private transactionUrl = `${BASE_URI}/api/transaction`;
}
