import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideCharts(withDefaultRegisterables())
  ]
});