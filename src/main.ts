import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Merge provideAnimations into appConfig providers
const mergedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // preserve existing providers
    provideAnimations()             // add required animations provider
  ]
};

bootstrapApplication(AppComponent, mergedConfig)
  .catch((err) => console.error(err));
