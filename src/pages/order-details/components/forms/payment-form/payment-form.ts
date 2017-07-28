import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../../../../providers/mongo-db-service/mongo-db-service";

/**
 * Generated class for the PaymentFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment-form',
  templateUrl: 'payment-form.html',
})
export class PaymentFormPage {

  mode: string;
  orderId: string;
  payment: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private mdbs: MongoDbServiceProvider
  ) {
    this.mode = this.navParams.get('mode');
    this.orderId = this.navParams.get('orderId');

    console.log(this.orderId);
    
    if (this.mode == 'edit') {
      
      this.payment = this.navParams.get('payment');

    } else if (this.orderId) {
      
      this.payment = {
        type: "Nakit",
        amount: null,
        currency: "TRY",
        installments: null,
        bank: "",
        note: ""
      }

    } else {
      this.navCtrl.pop();
    }
  }

  showSubmitAlert() {
    this.alertCtrl.create({
      title: 'Ödeme Kaydedilecek',
      subTitle: this.mode == 'edit' ? 'Bu değişiklikler geri alınamaz. Emin misiniz?' : '',

      buttons: [
        {
          text: "Hayır"
        },
        {
          text: "Evet",
          handler: () => {
            if (this.mode == 'edit') {
              this.saveChanges();
            } else {
              this.appendToTheOrder();
            }
          }
        }
      ]
    }).present();
  }

  appendToTheOrder() {
    let loading = this.loadingCtrl.create({ content: "Yeni ödeme ekleniyor..." });

    loading.present();

    this.mdbs.insertPayment(this.orderId, this.payment).subscribe((response) => {
      loading.dismiss();
    });
  }

  saveChanges() {
    let loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });

    loading.present();

    this.mdbs.updatePayment(this.payment._id, this.payment).subscribe((response) => {
      loading.dismiss();
    });
  }
}
