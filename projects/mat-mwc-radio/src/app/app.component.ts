import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div role="radiogroup">
      <mwc-formfield><mwc-radio value="1"></mwc-radio>Option 1</mwc-formfield>
      <mwc-formfield><mwc-radio value="2"></mwc-radio>Option 2</mwc-formfield>
    </div>`,
  styles: []
})
export class AppComponent { }
