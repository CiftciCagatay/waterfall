import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';

import { ProductDbServiceProvider } from "../../../../../providers/Database_Service_Providers/product-db-service/product-db-service";

@Component({
  selector: 'page-product-form',
  templateUrl: 'product-form.html',
})
export class ProductFormPage {

  mode: string;
  orderId: string;
  product: any;
  productIndex: number;
  total = 0.0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,

    private pds: ProductDbServiceProvider,

    private events: Events
  ) {
    this.mode = this.navParams.get('mode');
    this.productIndex = this.navParams.get('productIndex');
    this.orderId = this.navParams.get('orderId');

    if (this.mode == 'edit') {
      this.product = JSON.parse(JSON.stringify(this.navParams.get('product')))

      this.calculateTotal();

    } else if (this.orderId) {

      this.product = {
        type: "Kumaş",
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

  calculateTotal() {
    let laborCost = this.product.laborCost ? parseFloat(this.product.laborCost) : 0.0;
    let unitPrice = this.product.unitPrice ? parseFloat(this.product.unitPrice) : 0.0;
    let quantity = this.product.quantity ? parseFloat(this.product.quantity) : 0.0;

    this.total = quantity * (unitPrice + laborCost);
  }

  convertProductPropsStringToNumber() {
    this.product.unitPrice = this.product.unitPrice ? parseFloat(this.product.unitPrice) : 0.0;
    this.product.quantity = this.product.quantity ? parseFloat(this.product.quantity) : 0.0;
  }

  setProducts(property, e) {
    switch (property) {
      case 'unitPrice':
        this.product.unitPrice = (e.value ? Number(e.value) : 0.0)
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
            this.convertProductPropsStringToNumber();

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
    let loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });

    loading.present();

    this.pds.updateProduct(this.product._id, this.product).subscribe(
      (response) => {
        if (response.status == 200) {
          this.events.publish("product:updated", {
            index: this.productIndex,
            product: this.product
          })

          loading.dismiss().then(() => this.navCtrl.pop());
        } else {
          let alert = this.alertCtrl.create({
            title: "Değişiklikler Kaydedilemedi",
            subTitle: "Kaydetme işlemi başarısız oldu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin",
            buttons: [
              {
                text: "Tamam"
              }
            ]
          });

          loading.dismiss().then(() => alert.present());
        }
      },
      (error) => {
        console.log(error);
        loading.dismiss().then(() => {
          this.navCtrl.pop()
        })
      }
    );
  }

  appendToTheOrder() {
    let loading = this.loadingCtrl.create({ content: "Yeni ürün ekleniyor..." });

    loading.present();

    console.log(this.orderId, this.product)

    this.pds.insertProduct(this.orderId, this.product).subscribe(
      (response) => {
        if (response.status == 200) {
          this.product = response.json();
          this.events.publish("product:added", this.product);

          loading.dismiss().then(() => this.navCtrl.pop());
        } else {
          let alert = this.alertCtrl.create({
            title: "Ürün Kaydedilemedi",
            subTitle: "Ürün ekleme işlemi başarısız oldu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin",
            buttons: [
              {
                text: "Tamam"
              }
            ]
          });

          loading.dismiss().then(() => alert.present());
        }
      },
      (error) => {
        console.log(error);
        loading.dismiss().then(() => {
          this.navCtrl.pop()
        })
      }
    );
  }

}
