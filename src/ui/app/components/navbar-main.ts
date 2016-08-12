import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import { Transaction }        from '../models/transaction';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'navbar-main',
  templateUrl: 'app/components/navbar-main.html',
  providers: [ TransactionService ],
  directives: [ CORE_DIRECTIVES ]
})
export class NavbarMain {

  transactions: Transaction[];
  summary: Transaction[];

  constructor(private service: TransactionService) {

  }

  ngOnInit(): void {
     this.service
         .get()
         .subscribe(res => this.transactions = res);

    this.service
         .getSummary()
         .subscribe(res => this.summary = res);
  }

}
