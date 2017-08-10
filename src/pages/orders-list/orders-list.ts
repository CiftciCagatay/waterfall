import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { OrderDetailsPage } from "../order-details/order-details";
import { OrderDbServiceProvider } from "../../providers/Database_Service_Providers/order-db-service/order-db-service";

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

  lastOrderId = "";
  infiniteScrollEnable = true;

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    public navParams: NavParams,
    private ods: OrderDbServiceProvider,
    private alertCtrl: AlertController
  ) {
    let loading = this.loadingCtrl.create({ content: "Siparişler yükleniyor..." });

    loading.present();

    this.getOrders().then(() => {
      loading.dismiss();
    });
  }

  deneme() {
    
  }

  deleteOrder(orderId: string, index: number) {
    let loading = this.loadingCtrl.create({ content: "Sipariş siliniyor..." });

    loading.present();

    this.ods.deleteOrder(orderId).subscribe((response) => {
      this.orders.splice(index, 1);

      loading.dismiss();
    });
  }

  presentDeletionWarning(orderId: string, index: number) {
    this.alertCtrl.create({
      title: "Sipariş silinecek",
      subTitle: "Bu işlem geri alınmaz. Emin misiniz?",
      buttons: [
        {
          text: "Hayır",
          handler: () => console.log("Sipariş silmeden vazgeçildi.")
        },
        {
          text: "Evet",
          handler: () => this.deleteOrder(orderId, index)
        }
      ]
    }).present();
  }

  getOrders(searchbarText?: String) {
    return new Promise((resolve, reject) => {
      this.ods.getOrdersList(searchbarText, this.lastOrderId, 10).subscribe((response) => {
        this.orders = response.json();

        this.lastOrderId = this.orders[this.orders.length - 1]._id;

        this.infiniteScrollEnable = true;

        resolve();
      });
    })
  }

  refreshOrders(refresher?: any) {
    delete this.lastOrderId;

    if (!refresher) {
      let loading = this.loadingCtrl.create({ content: "Sipariş listesi yenileniyor..." });

      loading.present();

      this.getOrders().then(() => loading.dismiss());
    } else {
      this.getOrders().then(() => refresher.complete());
    }

    this.infiniteScrollEnable = true;
  }

  getMoreOrders(infiniteScroll) {
    this.ods.getOrdersList(undefined, this.lastOrderId, 10).subscribe(response => {
      console.log(response.json());

      this.orders.push(...response.json());

      if (this.lastOrderId == this.orders[this.orders.length - 1]._id)
        this.infiniteScrollEnable = false;

      this.lastOrderId = this.orders[this.orders.length - 1]._id;

      console.log(this.lastOrderId);

      infiniteScroll.complete();
    });
  }

  showOrdersDetails(orderId: string) {
    this.navCtrl.push(OrderDetailsPage, {
      orderId: orderId
    });
  }

}
