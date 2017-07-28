import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CustomerFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer-form',
  templateUrl: 'customer-form.html',
})
export class CustomerFormPage {

  customer: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {

    this.customer = this.navParams.get('customer');

    if (!this.customer) {
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

  }

}
