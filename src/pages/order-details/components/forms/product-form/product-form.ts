import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ProductFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-product-form',
  templateUrl: 'product-form.html',
})
export class ProductFormPage {

  mode: string;
  product: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.mode = this.navParams.get('mode');

    if (this.mode == 'edit') {
      this.product = this.navParams.get('product');
    } else {
      this.product = {
        type: "Perde",
        patternCode: "",
        colorCode: "",
        varietyCode: "",
        unitPrice: null,
        quantity: null
      }
    }
  }

  showSubmitAlert() {
    this.alertCtrl.create({
      title: 'Ürün Kaydedilecek',
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
