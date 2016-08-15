import { Component } from '@angular/core';

import { Deposit }            from './deposit';
import { Summary }            from './summary';
import { PlaceOrder }         from './place-order';
import { TransactionService } from '../../services/transaction-service';
import { OrderService }       from '../../services/order-service';

@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'content.html',
  directives: [
    Summary,
    Deposit,
    PlaceOrder
  ],
  providers: [ TransactionService, OrderService ],
})
export class Content {

  constructor() {

  }
}
