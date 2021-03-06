import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

// import { TransactionService } from './services/transaction-service';
// import { OrderService }       from './services/order-service';
import { AppComponent }       from './components/app.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

let appProviders = [
    HTTP_PROVIDERS
    // ,
    // TransactionService,
    // OrderService
];

bootstrap(
    AppComponent,
    appProviders
).catch(err => console.error(err));
