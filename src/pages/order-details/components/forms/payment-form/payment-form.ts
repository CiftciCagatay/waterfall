import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../../../../providers/mongo-db-service/mongo-db-service";
import { CurrencyBankProvider } from '../../../../../providers/currency-bank/currency-bank';

@Component({
  selector: 'page-payment-form',
  templateUrl: 'payment-form.html',
})
export class PaymentFormPage {

  mode: string;
  orderId: string;

  payment: any;
  paymentId: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private mdbs: MongoDbServiceProvider,
    private currencyBankProvider: CurrencyBankProvider
  ) {
    this.mode = this.navParams.get('mode');
    this.orderId = this.navParams.get('orderId');

    console.log(this.orderId);

    if (this.mode == 'edit') {

      this.paymentId = this.navParams.get('payment')._id

      this.payment = {
        type: this.navParams.get('payment').type,
        amount: this.navParams.get('payment').amount,
        currency: this.navParams.get('payment').currency,
        installments: this.navParams.get('payment').installments,
        bank: this.navParams.get('payment').bank,
        note: this.navParams.get('payment').note
      }

    } else if (this.orderId) {

      this.payment = {
        type: "Nakit",
        amount: null,
        date: new Date(),
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

      this.navCtrl.pop()
    });
  }

  saveChanges() {
    let loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });

    loading.present();

    this.mdbs.updatePayment(this.paymentId, this.payment).subscribe((response) => {
      loading.dismiss();

      this.navCtrl.pop()
    });
  }
}
