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

  getCustomerById (id: String) {
    let url = this.globals.ref + "/customers/" + id;

    return this.http.get(url);
  }

  getCustomers (searchtext?: String, limit = 20) {
    let url = this.globals.ref + "/customers?limit=" + limit;

    if (searchtext) {
      url += "&searchText=" + searchtext;
    }

    return this.http.get(url);
  }

  updateCustomerInformation(customerId: string, newValue: any) {
    let url = this.globals.ref + "/customers/" + customerId;

    return this.http.put(url, newValue);
  }

}
