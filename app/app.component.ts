import { Component, Directive } from '@angular/core';
import { No1Component } from './app.no1'
@Component({
  selector: 'my-app',
  template: `<div class="pure-g">
    <div class="pure-u-1"><no1></no1></div>
  </div>`
})
export class AppComponent { }

