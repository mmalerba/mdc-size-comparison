import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-form-field>
      <mat-label>Hello</mat-label>
      <input matInput>
    </mat-form-field>    
  `,
  styles: []
})
export class AppComponent {
  title = 'mat-form-field';
}
