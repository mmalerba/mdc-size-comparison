import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // TODO: Add modules for MDC based pizza.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
