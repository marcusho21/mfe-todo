import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { Capacitor } from '@capacitor/core';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    Capacitor.isNativePlatform() &&
      ScreenOrientation.lock({
        orientation: 'portrait',
      });
  })
  .catch((err) => console.error(err));
