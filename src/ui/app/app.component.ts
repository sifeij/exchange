import { Component } from '@angular/core';
import { BASE_URI } from './config';

@Component({
  selector: 'my-app',
  template: `<h1>Our base uri is ${BASE_URI}</h1>`
})
export class AppComponent { 
  constructor() {

  }

  onInit() {
    console.log("Hello");  
  }
}
