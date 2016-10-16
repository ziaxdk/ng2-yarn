import { Component } from '@angular/core';
@Component({
  selector: 'no1',
  template: `<form class="pure-form pure-form-stacked">
    <fieldset>
        <label for="text">Type Text</label>
        <input id="text" type="text" placeholder="Some text...">

        <button type="submit" class="pure-button pure-button-primary">Go!</button>
    </fieldset>
</form>`
})
export class No1Component { }