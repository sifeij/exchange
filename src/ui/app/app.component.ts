import { Component } from '@angular/core';

import { Product } from './models/product';
import { BalanceService } from './services/balance-service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{balance | json}}</h1>
  `,
  providers: [ BalanceService ]
})
export class AppComponent {
  balance: Product[]; 
  constructor(private service: BalanceService) {

  }

  ngOnInit() {
     this.service
         .getBalance()
         .subscribe(bal => this.balance = bal);
  }
}
