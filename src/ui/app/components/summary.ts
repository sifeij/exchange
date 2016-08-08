import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES }   from '@angular/common';

import { Transaction }        from '../models/transaction';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'summary',
  templateUrl: 'app/components/summary.html',
  providers: [ TransactionService ],
  directives: [ CORE_DIRECTIVES ]
})
export class Summary implements OnInit {

  public transactions: Transaction[];

  constructor(private service: TransactionService) {

  }

  public ngOnInit(): void {
     this.service
         .get()
         .subscribe(res => this.transactions = res);
  }
}
