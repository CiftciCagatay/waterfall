import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { CustomerDbServiceProvider } from "../../providers/Database_Service_Providers/customer-db-service/customer-db-service";
import { OrderDbServiceProvider } from "../../providers/Database_Service_Providers/order-db-service/order-db-service";
import { OrderDetailsPage } from "../order-details/order-details";

/**
 * Generated class for the CustomerDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-details',
  templateUrl: 'customer-details.html',
})
export class CustomerDetailsPage {

  customer: any;
  orders = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,

    private cds: CustomerDbServiceProvider,
    private ods: OrderDbServiceProvider,

    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    let customerId = this.navParams.get('customerId');

    if (!customerId)
      this.navCtrl.pop();

    let loading = this.loadingCtrl.create({ content: "Müşteri bilgileri yükleniyor..." });

    loading.present();

    this.cds.getCustomerById(customerId).subscribe(
      (response) => {
        if (response.status == 200) {
          this.customer = response.json();

          loading.setContent("Müşteriye ait siparişler yükleniyor...");

          this.ods.getOrdersByCustomerId(customerId).subscribe(
            (ordersResponse) => {
              if (ordersResponse.status == 200)
                this.orders = ordersResponse.json();

              loading.dismiss();
            },
            (error) => {
              console.log(error);

              let alert = this.alertCtrl.create({
                title: "Müşteriye Ait Siparişler Getirilemedi",
                buttons: [
                  {
                    text: "Tamam"
                  }
                ]
              })

              loading.dismiss().then(() => alert.present());
            }
          );
        } else {
          loading.dismiss();
        }
      },
      (error) => {
        console.log(error);

        let alert = this.alertCtrl.create({
          title: "Müşteri Detayları Getirilemedi",
          subTitle: "Müşteriye ait detaylar getirilirken bir hatayla karşılaşıldı. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin",
          buttons: [
            {
              text: "Tamam",
              handler: () => {
                this.navCtrl.pop()
              }
            }
          ]
        })

        loading.dismiss().then(() => alert.present());
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerDetailsPage');
  }

  showOrdersDetails(orderId) {
    this.navCtrl.push(OrderDetailsPage, {
      orderId: orderId
    })
  }

}
