import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CurrencyBankProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CurrencyBankProvider {

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

  constructor(public http: Http) {
    console.log('Hello CurrencyBankProvider Provider');
  }

}
