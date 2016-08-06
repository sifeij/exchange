import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, XHRBackend, XHRConnection } from '@angular/http';

import { AppComponent } from './app.component';
bootstrap(AppComponent,
         [
            HTTP_PROVIDERS
         ]);
