import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import { OrderService } from '../services/order-service';
import { Order }        from '../models/order';

@Component({
    moduleId: module.id,
    selector: 'place-order',
    templateUrl: 'place-order.html',
    providers: [OrderService],
    directives: [CORE_DIRECTIVES]
})
export class PlaceOrder {

    order: Order;
    types: string[] = ['Market', 'Limit', 'Stop'];
    restrictions: string[] = ['AON', 'GTC', 'DAY'];
    submitted = false;

    constructor(private service: OrderService) { }

    onSubmit(order: Order) {
        this.submitted = true;
        this.service
            .placeOrder(order)
            .subscribe(res => console.log(res));
    }
}
