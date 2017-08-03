import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
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
  productIndex: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private mdbs: MongoDbServiceProvider,
    private productTypesProvider: ProductTypesProvider,
    private events: Events
  ) {
    this.mode = this.navParams.get('mode');
    this.productIndex = this.navParams.get('productIndex');
    this.orderId = this.navParams.get('orderId');

    if (this.mode == 'edit') {
      this.product = JSON.parse(JSON.stringify(this.navParams.get('product')))

    } else if (this.orderId) {

      this.product = {
        type: "Kumaş",
        patternCode: "",
        colorCode: "",
        varietyCode: "",
        unitPrice: null,
        quantity: null,
        laborCost: null
      }

    } else {
      this.navCtrl.pop();
    }

    console.log(this.product);
  }

  setProducts(property, e) {
    switch (property) {
      case 'unitPrice':
        this.product.unitPrice = (e.value ? Number(e.value) : 0.0)
        break
      case 'laborCost':
        this.product.laborCost = (e.value ? Number(e.value) : 0.0)
        break
      case 'quantity':
        this.product.quantity = (e.value ? Number(e.value) : 0.0)
        break
      default:
        break;
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

  saveChanges() {
    let loading = this.loadingCtrl.create({ content: "Yeni ürün ekleniyor..." });

    loading.present();

    this.mdbs.updateProduct(this.product._id, this.product).subscribe((response) => {
      this.events.publish("product:updated", {
        index: this.productIndex,
        product: this.product
      })

      loading.dismiss().then(() => this.navCtrl.pop());
    });
  }

  appendToTheOrder() {
    let loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });

    loading.present();

    this.mdbs.insertProduct(this.orderId, this.product).subscribe((response) => {
      if (response.json().result) {
        this.product._id = response.json().productId;
        this.events.publish("product:added", this.product);
      }

      loading.dismiss().then(() => this.navCtrl.pop());
    });
  }

}
