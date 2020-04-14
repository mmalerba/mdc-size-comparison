import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div role="radiogroup">
      <label><mwc-radio value="1"></mwc-radio>Option 1</label>
      <label><mwc-radio value="2"></mwc-radio>Option 2</label>
    </div>`,
  styles: []
})
export class AppComponent { }
