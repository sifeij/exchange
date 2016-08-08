import { Component } from '@angular/core';
import { CORE_DIRECTIVES }   from '@angular/common';

import { Transaction }        from '../models/transaction';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'deposit',
  templateUrl: 'app/components/deposit.html',
  providers: [ TransactionService ],
  directives: [ CORE_DIRECTIVES ]
})
export class Deposit {

  public currency: string;
  public amount: number;
  public currencies: string[] = ['USD', 'BTC'];
  
  constructor(private service: TransactionService) {

  }

  public deposit(): void {
      this.service
          .deposit(this.currency, this.amount);
  }
}
