import { Component } from '@angular/core';

import { NavbarMain, FooterArea, Content } from './index';

@Component({
  moduleId: module.id,
  selector: 'exchange-app',
  templateUrl: 'app.component.html',
  directives: [ NavbarMain, FooterArea, Content ]
})
export class AppComponent {

  constructor() {

  }
}
