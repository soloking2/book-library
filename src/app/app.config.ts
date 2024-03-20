import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_BASE_ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_BASE_ROUTES),
  provideHttpClient()],
};
