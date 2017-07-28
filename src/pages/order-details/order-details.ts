import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../providers/mongo-db-service/mongo-db-service";

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html'
})
export class OrderDetailsPage {

  order= {
    _id: ""
  } ;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private mdbs: MongoDbServiceProvider,
    private loadingCtrl: LoadingController
  ) {
    this.order._id = this.navParams.get('orderId');
    
    if (!this.order._id) {
      this.navCtrl.pop();
    }

    let loading = this.loadingCtrl.create({ content: "Sipariş Detayları yükleniyor..." });

    loading.present();

    this.mdbs.getOrderDetails(this.order._id).subscribe((response) => {
      this.order = response.json();

      console.log(response.json());

      loading.dismiss();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
  }

}
