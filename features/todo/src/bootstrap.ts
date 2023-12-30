import { isDevMode } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig, appCustomElements } from './app/app.config';
import { defineCustomElements } from '@mfe-todo/mfe-utils';
import { environment } from './environments/environment.prod';

createApplication(appConfig)
  .then((appRef) => {
    defineCustomElements(appCustomElements, { injector: appRef.injector });

    if (!environment.isProd) {
      console.log(!environment.isProd);
      appRef.bootstrap(AppComponent);
    }
  })
  .catch((err) => console.error(err));
