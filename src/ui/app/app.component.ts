import { Component } from '@angular/core';

import { Summary } from './components/summary';
import { Deposit } from './components/deposit';

@Component({
  selector: 'exchange-app',
  templateUrl: 'app/app.component.html',
  directives: [ Summary, Deposit ]
})
export class AppComponent {

  constructor() {

  }
}
