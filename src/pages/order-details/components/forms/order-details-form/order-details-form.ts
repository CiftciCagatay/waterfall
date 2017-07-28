import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../../../../providers/mongo-db-service/mongo-db-service";

/**
 * Generated class for the OrderInformationFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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
    private mdbs: MongoDbServiceProvider
  ) {
    this.orderId = this.navParams.get('orderId');
    this.orderDetails = this.navParams.get('orderDetails');

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
    })
  }

}
