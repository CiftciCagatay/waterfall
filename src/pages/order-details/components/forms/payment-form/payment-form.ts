import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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
  payment: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.mode = this.navParams.get('mode');

    if (this.mode == 'edit') {
      this.payment = this.navParams.get('payment');
    } else {
      this.payment = {
        type: "Nakit",
        amount: null,
        currency: "TRY",
        installments: null,
        bank: "",
        note: ""
      }
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

  }

  saveChanges() {

  }
}
