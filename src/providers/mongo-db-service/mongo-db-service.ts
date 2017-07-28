import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MongoDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MongoDbServiceProvider {
  
  ref = "http://localhost:5000"; // "https://quiet-chamber-99549.herokuapp.com";

  constructor(public http: Http) {
    console.log('Hello MongoDbServiceProvider Provider');
  }

  insertNewOrder(order: any) {
    return this.http.post(this.ref + "/orders/new", order);
  }

  insertPayment(orderId: string, paymentInformation: any) {
    let url = this.ref + "/orders/" + orderId + "/payments/new";

    return this.http.post(url, paymentInformation);
  }

  insertProduct(orderId: string, product: any) {
    let url = this.ref + "/orders/" + orderId + "/products/new";

    return this.http.post(url, product);
  }

  updatePayment(paymentId: string, newValue: any) {
    let url = this.ref + "/payments/" + paymentId;

    return this.http.put(url, newValue);
  }

  updateProduct(productId: string, newValue: any) {
    let url = this.ref + "/products/" + productId;

    return this.http.put(url, newValue);
  }

  updateCustomerInformation(customerId: string, newValue: any) {
    let url = this.ref + "/customers/" + customerId;

    return this.http.put(url, newValue);
  }

  updateOrderInformation(orderId: string, newValue: any) {
    let url = this.ref + "/orders/" + orderId;

    return this.http.put(url, newValue);
  }

  deleteOrder(id: string) {
    let url = this.ref + "/orders/" + id;

    return this.http.delete(url);
  }

  deletePayment(paymentId: string) {
    let url = this.ref + "/payments/" + paymentId;

    return this.http.delete(url);
  }

  deleteProduct(productId: string) {
    let url = this.ref + "/products/" + productId;

    return this.http.delete(url);
  }

  getOrdersList(customerName?: String, lastOrderKey?: String, limit = 10) {
    let url = this.ref + "/orders?limit=" + limit;

    if (customerName) { url = url + "&customerName=" + customerName; }
    if (lastOrderKey) { url = url + "&lastOrderKey=" + lastOrderKey; }

    console.log("GET ORDER URL : " + url);

    return this.http.get(url);
  }

  getOrderDetails(orderId: string) {
    let url = this.ref + "/orders/" + orderId;

    return this.http.get(url);
  }

  getEvents() {
    let url = this.ref + "/logs";

    return this.http.get(url);
  }

  logEvent(title: string, detail: string, personnel: any, date: Date) {
    let url = this.ref + "/logs";

    this.http.post(url, {
      title: title,
      detail: detail,
      personnel: personnel,
      date: date
    }).subscribe(result => {
      console.log(result)
    })
  }
}
