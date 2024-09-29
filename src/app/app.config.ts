import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  ExtraOptions,
  provideRouter,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
      withRouterConfig(routerOptions)
    ),
    provideHttpClient(),
    importProvidersFrom(SocketIoModule.forRoot(config)),
  ],
};
