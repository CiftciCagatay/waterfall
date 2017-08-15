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

    this.getOrders()
      .then(() => {
        loading.dismiss();
      })
      .catch((error) => {
        console.log(error);

        let alert = this.alertCtrl.create({
          title: "Siparişler Getirilemedi",
          subTitle: "Siparişler listesi getirilirken bir hatayla karşılaşıldı. Lütfen sayfayı yenileyip tekrar deneyin",
          buttons: [
            {
              text: "Tamam"
            }
          ]
        })

        loading.dismiss();
      })
  }

  filterOrders (customerName) {
    this.ods.getOrdersList(customerName, undefined, undefined)
      .subscribe(
        (response) => {
          if (response.status == 200) {
            console.log(response);
            this.orders = response.json();
          }
        },
        (error) => {
          console.log(error);
        }
      )
  }

  deleteOrder(orderId: string, index: number) {
    let loading = this.loadingCtrl.create({ content: "Sipariş siliniyor..." });

    loading.present();

    this.ods.deleteOrder(orderId).subscribe((response) => {
      if (response.status == 200) {
        this.orders.splice(index, 1);

        loading.dismiss();
      } else {
        let alert = this.alertCtrl.create({
          title: "Sipariş Silinemedi",
          subTitle: "Sipariş silinirken bir hatayla karşılaşıldı. Lütfen tekrar deneyin.",
          buttons: [
            {
              text: "Tamam"
            }
          ]
        })

        loading.dismiss().then(() => alert.present());
      }
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
        if (response.status == 200) {
          this.orders = response.json();

          if (this.orders.length > 0)
            this.lastOrderId = this.orders[this.orders.length - 1]._id;

          this.infiniteScrollEnable = true;

          resolve();
        } else {
          reject("Ödemeler getirilemedi");
        }
      });
    })
  }

  refreshOrders(refresher?: any) {
    delete this.lastOrderId;

    let loading = this.loadingCtrl.create({ content: "Sipariş listesi yenileniyor..." });

    loading.present();

    if (!refresher) {
      // Eğer liste butona basılarak yenilenmişse
      this.getOrders()
        .then(() => loading.dismiss())
        .catch((error) => {
          console.log(error);
          loading.dismiss();
        })
    } else {
      // Eğer aşağı çekilerek liste yenilenmişse
      this.getOrders()
        .then(() => {
          refresher.complete();
          loading.dismiss();
        })
        .catch((error) => {
          console.log(error);
          loading.dismiss();
        })
    }

    this.infiniteScrollEnable = true;
  }

  getMoreOrders(infiniteScroll) {
    this.ods.getOrdersList(undefined, this.lastOrderId, 10).subscribe(response => {
      if (response.status == 200) {
        console.log(response.json());

        this.orders.push(...response.json());

        if (this.lastOrderId == this.orders[this.orders.length - 1]._id)
          this.infiniteScrollEnable = false;

        this.lastOrderId = this.orders[this.orders.length - 1]._id;

        console.log(this.lastOrderId);

        infiniteScroll.complete();
      } else {
        infiniteScroll.complete();
      }
    });
  }

  showOrdersDetails(orderId: string) {
    this.navCtrl.push(OrderDetailsPage, {
      orderId: orderId
    });
  }

}
