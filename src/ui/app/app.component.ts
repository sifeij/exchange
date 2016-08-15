import { Component } from '@angular/core';

import { NavbarMain } from './components/navbar-main';
import { Summary }    from './components/summary';
import { Deposit }    from './components/deposit';
import { PlaceOrder } from './components/place-order';

@Component({
  selector: 'exchange-app',
  templateUrl: 'app/app.component.html',
  directives: [
    NavbarMain,
    Summary,
    Deposit,
    PlaceOrder
  ]
})
export class AppComponent {

  constructor() {

  }
}
