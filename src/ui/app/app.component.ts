import { Component } from '@angular/core';

import { NavbarMain } from './components/navbar-main';
import { Summary } from './components/summary';
import { Deposit } from './components/deposit';

@Component({
  selector: 'exchange-app',
  templateUrl: 'app/app.component.html',
  directives: [ NavbarMain, Summary, Deposit ]
})
export class AppComponent {

  constructor() {

  }
}
