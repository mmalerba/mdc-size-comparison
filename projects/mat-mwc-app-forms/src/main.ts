import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import '@material/mwc-button';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import '@material/mwc-radio';
import '@material/mwc-switch';
import '@material/mwc-textfield';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
