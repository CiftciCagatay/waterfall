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
export class ProductDbServiceProvider {

  types = [
    "Tül",
    "Kumaş",
    "Korniş",
    "Güneşlik",
    "Renso",
    "Store",
    "Zebra",
    "Astar",
    "Aksesuar",
    "Ruspik",
    "Lambiri",
    "Mekanizma",
    "Etek"
  ]

  constructor(
    public http: Http,
    private globals: GlobalsProvider
  ) {
    console.log('Hello PaymentDbServiceProvider Provider');
  }

  insertProduct(orderId: string, product: any) {
    let url = this.globals.ref + "/orders/" + orderId + "/products/new";

    return this.http.post(url, product);
  }

  updateProduct(productId: string, newValue: any) {
    let url = this.globals.ref + "/products/" + productId;

    return this.http.put(url, newValue);
  }

  deleteProduct(productId: string) {
    let url = this.globals.ref + "/products/" + productId;

    return this.http.delete(url);
  }

}
