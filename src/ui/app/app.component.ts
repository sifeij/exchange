import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import { Product } from './models/product';
import { BalanceService } from './services/balance-service';

@Component({
  selector: 'exchange-app',
  template: `
    <nav class="navbar navbar-default navbar-inverse">
      <a class="navbar-brand" href="#">Exchange</a>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <table class="col-xs-10 col-xs-offset-1">
          <tr *ngFor="let product of products">
            <td>{{ product.name }}</td><td class="pull-right">{{ product.amount }}</td>
          </tr>
        </table>
      </div>
    </div>
  `,
  providers: [ BalanceService ],
  directives: [ CORE_DIRECTIVES ]
})
export class AppComponent {
  products: Product[]; 
  constructor(private service: BalanceService) {

  }

  ngOnInit() {
     this.service
         .getBalance()
         .subscribe(products => this.products = products);
  }
}
