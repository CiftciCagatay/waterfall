import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from "../../globals/globals";

/*
  Generated class for the ProductDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ReportsDbServiceProvider {
  ref = "";

  constructor(
    private http: Http,
    private globals: GlobalsProvider
  ) {
    this.ref = this.globals.ref;
  }

  getPaymentReport (minDate, maxDate) {
    let url = this.ref + "/reports/paymentReport?minDate=" + minDate + "&maxDate=" + maxDate;

    return this.http.get(url);
  }
}
