import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { OrderDbServiceProvider } from "../../providers/Database_Service_Providers/order-db-service/order-db-service";

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html'
})
export class OrderDetailsPage {

  order= {
    _id: "",
    customer: null,
    orderDetails: null,
    payments: null,
    products: null
  } ;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private ods: OrderDbServiceProvider,
    private loadingCtrl: LoadingController
  ) {
    this.order._id = this.navParams.get('orderId');
    
    if (!this.order._id) {
      this.navCtrl.pop();
    }

    let loading = this.loadingCtrl.create({ content: "Sipariş Detayları yükleniyor..." });

    loading.present();

    this.ods.getOrderDetails(this.order._id).subscribe((response) => {
      this.order = response.json();

      loading.dismiss();
    })
  }

}
