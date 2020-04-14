import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>This app demonstrates components that are used in building a form</h1>
    <form>
      <fieldset>
        <mwc-textfield label="Name"></mwc-textfield>
      </fieldset>
      <fieldset>
        <mwc-formfield>
          <mwc-checkbox></mwc-checkbox>
          Are you sure you want to submit?
        </mwc-formfield>
      </fieldset>
      <fieldset>
        <label for="confirm2">Are you really sure?</label>
        <div role="radiogroup" id="confirm2">
          <mwc-formfield>
            <mwc-radio [value]="false"></mwc-radio>
            No
          </mwc-formfield>
          <mwc-formfield>
            <mwc-radio [value]="true"></mwc-radio>
            Yes
          </mwc-formfield>
        </div>
      </fieldset>
      <fieldset>
        <mwc-formfield>
          <mwc-switch></mwc-switch>
          But are you really <b><i>really</i></b> sure?
        </mwc-formfield>
      </fieldset>
      <fieldset>
        <mwc-button>Submit</mwc-button>
      </fieldset>
    </form>
  `,
  styles: []
})
export class AppComponent { }
