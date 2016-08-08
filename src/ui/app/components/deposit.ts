import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { NgForm } from '@angular/forms';

import { Transaction }        from '../models/transaction';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'deposit',
  templateUrl: 'app/components/deposit.html',
  providers: [ TransactionService ],
  directives: [ CORE_DIRECTIVES ]
})
export class Deposit {

  currency: string;
  amount: number;
  currencies: string[] = ['USD', 'BTC'];
  submitted = false;
  
  constructor(private service: TransactionService) {

  }

  onSubmit() {
    this.service
          .deposit(this.currency, this.amount);
    this.submitted = true;
  }
}
