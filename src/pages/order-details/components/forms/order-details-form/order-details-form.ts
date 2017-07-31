import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../../../../providers/mongo-db-service/mongo-db-service";
import { CurrencyBankProvider } from '../../../../../providers/currency-bank/currency-bank';

@Component({
  selector: 'page-order-details-form',
  templateUrl: 'order-details-form.html',
})
export class OrderDetailsFormPage {

  orderId: string;
  orderDetails: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private mdbs: MongoDbServiceProvider,
    private currencyBankProvider: CurrencyBankProvider,
    private events: Events
  ) {
    this.orderId = this.navParams.get('orderId');
    
    this.orderDetails = {
      orderDate: this.navParams.get('orderDetails').orderDate,
      deliveryDate: this.navParams.get('orderDetails').deliveryDate,
      personnel: this.navParams.get('orderDetails').personnel,
      amount: this.navParams.get('orderDetails').amount,
      currency: this.navParams.get('orderDetails').currency,
      note: this.navParams.get('orderDetails').note
    }

    if (!this.orderDetails || !this.orderId) {
      this.navCtrl.pop();
    }
  }

  showSubmitAlert() {
    this.alertCtrl.create({
      title: 'Değişiklikler Kaydedilecek',
      subTitle: 'Bu değişiklikler geri alınamaz. Emin misiniz?',

      buttons: [
        {
          text: "Hayır"
        },
        {
          text: "Evet",
          handler: () => {
            this.saveChanges()
          }
        }
      ]
    }).present();
  }

  saveChanges() {
    let loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });

    loading.present();

    this.mdbs.updateOrderInformation(this.orderId, this.orderDetails).subscribe((response) => {
      loading.dismiss().then(() => this.navCtrl.pop());

      this.events.publish("orderDetails:updated", this.orderDetails);
    })
  }

}
