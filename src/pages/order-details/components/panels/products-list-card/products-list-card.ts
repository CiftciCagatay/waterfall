import { Component, Input } from '@angular/core';
import { ModalController, AlertController } from "ionic-angular";
import { ProductFormPage } from "../../forms/product-form/product-form";

/**
 * Generated class for the ProductsListCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'products-list-card',
  templateUrl: 'products-list-card.html'
})
export class ProductsListCardComponent {

  @Input() products: Array<any>;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
    console.log('Hello ProductsListCardComponent Component');
  }

  deleteProduct(productId: string, index: number) {
    this.products.splice(index, 1)
  }

  presentDeletionWarning(productId: string, index:number) {
    this.alertCtrl.create({
      title: "Ürün silinecek",
      subTitle: "Bu işlem geri alınmaz. Emin misiniz?",
      buttons: [
        {
          text: "Hayır"
        },
        {
          text: "Evet",
          handler: () => this.deleteProduct(productId, index)
        }
      ]
    }).present();
  }

  presentModallyProductFormPage(mode: string, product?: any) {
    this.modalCtrl.create(ProductFormPage, {
      mode: mode,
      product: product
    }).present();
  }

}
