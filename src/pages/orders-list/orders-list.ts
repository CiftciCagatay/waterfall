import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { OrderDetailsPage } from "../order-details/order-details";
import { MongoDbServiceProvider } from "../../providers/mongo-db-service/mongo-db-service";

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

  searchbarText = "";
  lastOrderKey = "";

  constructor(
    public navCtrl: NavController, 
    private loadingCtrl: LoadingController,
    public navParams: NavParams,
    private mdbs: MongoDbServiceProvider
  ) {
    let loading = this.loadingCtrl.create({ content: "Siparişler yükleniyor..." });

    loading.present();

    this.getOrders().then(() => {
      loading.dismiss();
    });
  }

  getOrders() {
    return new Promise((resolve, reject) => {
      this.mdbs.getOrdersList(this.searchbarText, this.lastOrderKey, 20).subscribe((response) => {
        this.orders = response.json();
        resolve();
      });
    })
  }

  showOrdersDetails(orderId: string) {
    this.navCtrl.push(OrderDetailsPage, {
      orderId: orderId
    });
  }

}
