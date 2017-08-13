import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from "../../globals/globals";

/*
  Generated class for the PaymentDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PaymentDbServiceProvider {

  banks = [
    "Garanti",
    "Ziraat",
    "Akbank",
    "Finansbank",
    "İş Bankası",
    "Yapı Kredi"
  ];

  currencies = [
    "TRY",
    "EUR",
    "USD"
  ];

  paymentTypes = [
    "Nakit",
    "Kredi Kartı"
  ]

  constructor(
    public http: Http,
    private globals: GlobalsProvider
  ) {
    console.log('Hello PaymentDbServiceProvider Provider');
  }

  insertPayment(orderId: string, paymentInformation: any) {
    let url = this.globals.ref + "/orders/" + orderId + "/payments";

    return this.http.post(url, paymentInformation);
  }

  updatePayment(paymentId: string, newValue: any) {
    let url = this.globals.ref + "/payments/" + paymentId;

    return this.http.put(url, newValue);
  }

  deletePayment(paymentId: string) {
    let url = this.globals.ref + "/payments/" + paymentId;

    return this.http.delete(url);
  }

}
