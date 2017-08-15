import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from "../../globals/globals";

/*
  Generated class for the OrderDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrderDbServiceProvider {

  constructor(
    public http: Http,
    private globals: GlobalsProvider
  ) {
    console.log('Hello PaymentDbServiceProvider Provider');
  }

  insertNewOrder(order: any) {
    return this.http.post(this.globals.ref + "/orders", order);
  }

  updateOrderInformation(orderId: string, newValue: any) {
    let url = this.globals.ref + "/orders/" + orderId;

    return this.http.put(url, newValue);
  }

  deleteOrder(id: string) {
    let url = this.globals.ref + "/orders/" + id;

    return this.http.delete(url);
  }

  getOrdersList(customerName?: String, lastOrderId?: String, limit = 10) {
    let url = this.globals.ref + "/orders?limit=" + limit;

    if (customerName) { url = url + "&searchText=" + customerName; }
    if (lastOrderId) { url = url + "&lastOrderId=" + lastOrderId; }

    console.log("GET ORDER URL : " + url);

    return this.http.get(url);
  }

  getOrdersByCustomerId (customerId: String) {
    let url = this.globals.ref + "/customers/" + customerId + "/orders";

    return this.http.get(url);
  }

  getOrderDetails(orderId: string) {
    let url = this.globals.ref + "/orders/" + orderId;

    return this.http.get(url);
  }

  updateLaborCost (orderId: string, laborCost: Number) {
    let url = this.globals.ref + "/orders/" + orderId + "/laborCost";

    return this.http.put(url, {
      laborCost: laborCost
    });
  }

}
