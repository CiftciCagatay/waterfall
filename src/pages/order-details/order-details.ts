import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Events } from 'ionic-angular';
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
    private loadingCtrl: LoadingController,
    private events: Events
  ) {
    this.events.subscribe("customer:updated", (data) => this.order.customer = data);
    
    this.events.subscribe("orderDetails:updated", (data) => {
      this.order.orderDetails = {
        orderDate: data.orderDate,
        deliveryDate: data.deliveryDate,
        personnel: data.personnel,
        amount: data.amount,
        currency: data.currency,
        note: data.note
      }
    });
    
    this.events.subscribe("payment:added", (data) => this.order.payments.push(data))

    this.events.subscribe("payment:updated", (data) => {
      this.order.payments[data.index].type = data.payment.type;
      this.order.payments[data.index].amount = data.payment.amount;
      this.order.payments[data.index].currency = data.payment.currency;
      this.order.payments[data.index].installments = data.payment.installments;
      this.order.payments[data.index].bank = data.payment.bank;
    })

    this.events.subscribe("product:added", (data) => this.order.products.push(data))

    this.events.subscribe("product:updated", (data) => {
      this.order.products[data.index].type = data.product.type;
      this.order.products[data.index].patternCode = data.product.patternCode;
      this.order.products[data.index].colorCode = data.product.colorCode;
      this.order.products[data.index].varietyCode = data.product.varietyCode;
      this.order.products[data.index].unitPrice = data.product.unitPrice;
      this.order.products[data.index].laborCost = data.product.laborCost;
      this.order.products[data.index].quantity = data.product.quantity;
    })

    this.order._id = this.navParams.get('orderId');
    
    if (!this.order._id) {
      this.navCtrl.pop();
    }

    let loading = this.loadingCtrl.create({ content: "Sipariş Detayları yükleniyor..." });

    loading.present();

    this.ods.getOrderDetails(this.order._id).subscribe((response) => {
      this.order = response.json();

      console.log(response.json());

      console.log(this.order._id, "gaha");

      loading.dismiss();
    })
  }

}
