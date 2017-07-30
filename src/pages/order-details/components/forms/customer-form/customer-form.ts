import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../../../../providers/mongo-db-service/mongo-db-service";

@Component({
  selector: 'page-customer-form',
  templateUrl: 'customer-form.html',
})
export class CustomerFormPage {

  customer: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private mdbs: MongoDbServiceProvider
  ) {

    this.customer = JSON.parse(JSON.stringify(this.navParams.get('customer')))

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
    let loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });

    loading.present();

    this.mdbs.updateCustomerInformation(this.customer._id, this.customer).subscribe((response) => {
      loading.dismiss().then(() => this.navCtrl.pop());
    })
  }

}
