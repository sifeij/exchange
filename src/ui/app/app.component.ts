import { Component } from '@angular/core';

import { MainNavbar } from './components/main-navbar';
import { Summary } from './components/summary';
import { Deposit } from './components/deposit';

@Component({
  selector: 'exchange-app',
  templateUrl: 'app/app.component.html',
  directives: [ MainNavbar, Summary, Deposit ]
})
export class AppComponent {

  constructor() {

  }
}
