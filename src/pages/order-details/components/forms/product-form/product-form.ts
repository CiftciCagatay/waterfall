import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MongoDbServiceProvider } from '../../../../../providers/mongo-db-service/mongo-db-service';
import { ProductTypesProvider } from '../../../../../providers/product-types/product-types';

@Component({
  selector: 'page-product-form',
  templateUrl: 'product-form.html',
})
export class ProductFormPage {

  mode: string;
  orderId: string;
  product: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private mdbs: MongoDbServiceProvider,
    private productTypesProvider: ProductTypesProvider
  ) {
    this.mode = this.navParams.get('mode');
    this.orderId = this.navParams.get('orderId');

    if (this.mode == 'edit') {
      this.product = JSON.parse(JSON.stringify(this.navParams.get('product')))

    } else if (this.orderId) {

      this.product = {
        type: "Perde",
        patternCode: "",
        colorCode: "",
        varietyCode: "",
        unitPrice: null,
        quantity: null
      }

    } else {
      this.navCtrl.pop();
    }

    console.log(this.product);
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

  saveChanges() {
    let loading = this.loadingCtrl.create({ content: "Yeni ürün ekleniyor..." });

    loading.present();

    this.mdbs.updateProduct(this.product._id, this.product).subscribe((response) => {
      loading.dismiss().then(() => this.navCtrl.pop());
    });
  }

  appendToTheOrder() {
    let loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });

    loading.present();

    this.mdbs.insertProduct(this.orderId, this.product).subscribe((response) => {
      loading.dismiss().then(() => this.navCtrl.pop());
    });
  }

}
