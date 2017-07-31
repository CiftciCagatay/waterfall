import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../../../../providers/mongo-db-service/mongo-db-service";
import { CurrencyBankProvider } from '../../../../../providers/currency-bank/currency-bank';
import { AuthServiceProvider } from "../../../../../providers/auth-service/auth-service";

@Component({
  selector: 'page-payment-form',
  templateUrl: 'payment-form.html',
})
export class PaymentFormPage {

  mode: string;
  orderId: string;

  payment: any;
  paymentId: string;
  paymentIndex: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private mdbs: MongoDbServiceProvider,
    private currencyBankProvider: CurrencyBankProvider,
    private events: Events,
    private auth: AuthServiceProvider
  ) {
    this.mode = this.navParams.get('mode');
    this.orderId = this.navParams.get('orderId');
    this.paymentIndex = this.navParams.get('paymentIndex');

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
        personnel: this.auth.getUser(),
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
      this.events.publish("payment:added", this.payment);

      if (this.payment.amount) {
        this.mdbs.logEvent(
          "Yeni Ödeme",
          `${this.payment.personnel} tarafından ${this.payment.amount} ${this.payment.currency} tutarında ödeme alındı`,
          this.payment.personnel,
          this.payment.date
        )
      }
      
      loading.dismiss();

      this.navCtrl.pop()
    });
  }

  saveChanges() {
    let loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });

    loading.present();

    this.mdbs.updatePayment(this.paymentId, this.payment).subscribe((response) => {
      this.events.publish("payment:updated", {
        index: this.paymentIndex,
        payment: this.payment
      })

      loading.dismiss();

      this.navCtrl.pop()
    });
  }
}
