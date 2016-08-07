import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import { Product } from './models/product';
import { BalanceService } from './services/balance-service';

@Component({
  selector: 'exchange-app',
  templateUrl: 'app/app.component.html',
  providers: [ BalanceService ],
  directives: [ CORE_DIRECTIVES ]
})
export class AppComponent implements OnInit {
  products: Product[];
  constructor(private service: BalanceService) {

  }

  public ngOnInit(): void {
     this.service
         .getBalance()
         .subscribe(products => this.products = products);
  }
}
