import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderDetailsPage } from "../order-details/order-details";

/**
 * Generated class for the OrdersListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-orders-list',
  templateUrl: 'orders-list.html',
})
export class OrdersListPage {

  orders = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showOrdersDetails(orderId: string) {
    this.navCtrl.push(OrderDetailsPage, {
      orderId: orderId
    });
  }

}
