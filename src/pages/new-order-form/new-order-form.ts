import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the NewOrderFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-order-form',
  templateUrl: 'new-order-form.html',
})
export class NewOrderFormPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
  }

  showSavingAlert() {
    this.alertCtrl.create({
      title: "Sipariş Kaydedilecek",
      subTitle: "Emin misiniz?",
      buttons: [
        {
          text: "Vazgeç"
        },
        {
          text: "Kaydet",
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: "Sipariş kaydediliyor..."
            });

            loading.present();

            setTimeout(() => {
              loading.setContent("Vazgeçtim")
            }, 1500);
            
            this.saveOrder()
              .then((result) => {
                loading.dismiss();

                console.log(result)
              })
              .catch((error) => {
                loading.dismiss();

                console.log(error)
              });
          }
        }
      ]
    }).present();
  }

  saveOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("HAHAHAHAH");
      }, 3000);
    })
  }

  goToOrderDetailsPage() {

  }
}
