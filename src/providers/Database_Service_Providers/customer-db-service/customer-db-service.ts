import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from "../../globals/globals";

/*
  Generated class for the CustomerDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CustomerDbServiceProvider {

  constructor(
    public http: Http,
    private globals: GlobalsProvider
  ) {
    console.log('Hello PaymentDbServiceProvider Provider');
  }

  updateCustomerInformation(customerId: string, newValue: any) {
    let url = this.globals.ref + "/customers/" + customerId;

    return this.http.put(url, newValue);
  }

}
