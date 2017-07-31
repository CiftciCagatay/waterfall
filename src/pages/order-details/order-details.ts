import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../providers/mongo-db-service/mongo-db-service";

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
    private mdbs: MongoDbServiceProvider,
    private loadingCtrl: LoadingController,
    private events: Events
  ) {
    this.events.subscribe("customer:updated", (data) => this.order.customer = data);
    
    this.events.subscribe("orderDetails:updated", (data) => this.order.orderDetails = data);
    
    this.events.subscribe("payment:added", (data) => this.order.payments.push(data))

    this.events.subscribe("payment:updated", (data) => {
      this.order.payments[data.index] = data.payment;
    })

    this.events.subscribe("product:added", (data) => this.order.products.push(data))

    this.events.subscribe("product:updated", (data) => {
      this.order.products[data.index] = data.product;
    })

    this.order._id = this.navParams.get('orderId');
    
    if (!this.order._id) {
      this.navCtrl.pop();
    }

    let loading = this.loadingCtrl.create({ content: "Sipariş Detayları yükleniyor..." });

    loading.present();

    this.mdbs.getOrderDetails(this.order._id).subscribe((response) => {
      this.order = response.json();

      console.log(response.json());

      console.log(this.order._id, "gaha");

      loading.dismiss();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
  }

}
