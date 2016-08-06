import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BASE_URI } from '../config';
import { Product } from '../models/product';

@Injectable()
export class BalanceService {
    constructor(private http: Http) {}

    getBalance(): Observable<Product[]> {
        return this.http
                   .get(this.balanceUrl)
                   .map(this.extractData)
                   .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();

        var result = [];
        var keys = Object.keys(body);
        keys.forEach(key => {
            result.push({ name: key, amount: body[key] });
        });

        return result || [];
    }

    private handleError(error: any, caught: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private balanceUrl = `${BASE_URI}/api/balance`;
}