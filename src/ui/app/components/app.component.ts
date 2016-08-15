import { Component } from '@angular/core';

import { NavbarMain } from './header/navbar-main';
import { FooterArea } from './footer/footer-area';
import { Summary }    from './content/summary';
import { Deposit }    from './content/deposit';
import { PlaceOrder } from './content/place-order';

@Component({
  moduleId: module.id,
  selector: 'exchange-app',
  templateUrl: 'app.component.html',
  directives: [
    NavbarMain,
    FooterArea,
    Summary,
    Deposit,
    PlaceOrder
  ]
})
export class AppComponent {

  constructor() {

  }
}
