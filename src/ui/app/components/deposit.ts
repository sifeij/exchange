import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
// import { NgForm } from '@angular/forms';

import { TransactionService } from '../services/transaction-service';

@Component({
  moduleId: module.id,
  selector: 'deposit',
  templateUrl: 'deposit.html',
  providers: [TransactionService],
  directives: [
    CORE_DIRECTIVES
    // , NgForm
  ]
})
export class Deposit {

  currency: string;
  amount: number;
  currencies: string[] = ['USD', 'BTC'];
  submitted = false;

  constructor(private service: TransactionService) { }

  onSubmit() {
    this.submitted = true;
    this.service
      .deposit(this.currency, this.amount)
      .subscribe(res => console.log(res));
  }
}
