import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

    private loadingCtrl: LoadingController
  ) {
    let customerId = this.navParams.get('customerId');

    if (!customerId)
      this.navCtrl.pop();

    let loading = this.loadingCtrl.create({ content: "Müşteri bilgileri yükleniyor..." });

    loading.present();

    this.cds.getCustomerById(customerId).subscribe(response => {
      this.customer = response.json();

      loading.setContent("Müşteriye ait siparişler yükleniyor...");

      this.ods.getOrdersByCustomerId(customerId).subscribe(ordersResponse => {
        this.orders = ordersResponse.json();
        
        loading.dismiss();
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerDetailsPage');
  }

  showOrdersDetails (orderId) {
    this.navCtrl.push(OrderDetailsPage, {
      orderId: orderId
    })
  }

}
