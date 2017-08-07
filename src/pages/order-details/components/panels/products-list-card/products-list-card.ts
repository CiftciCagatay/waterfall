import { Component, Input, Renderer } from '@angular/core';
import { ModalController, AlertController, LoadingController, Events, ItemSliding, Item, PopoverController } from "ionic-angular";
import { ProductFormPage } from "../../forms/product-form/product-form";
import { MongoDbServiceProvider } from "../../../../../providers/mongo-db-service/mongo-db-service";

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
  @Input() orderId: string;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private mdbs: MongoDbServiceProvider,
    private events: Events,
    private po: PopoverController,
    public renderer: Renderer
  ) {
    
  }

  deleteProduct(productId: string, index: number) {
    let loading = this.loadingCtrl.create({ content: "Ürün siliniyor..." });

    loading.present();

    this.mdbs.deleteProduct(productId).subscribe((response) => {
      this.products.splice(index, 1);
      
      loading.dismiss();
    });
  }

  presentDeletionWarning(productId: string, index:number) {
    this.alertCtrl.create({
      title: "Ürün silinecek",
      subTitle: "Bu işlem geri alınmaz. Emin misiniz?",
      buttons: [
        {
          text: "Hayır",
          handler: () => console.log("Ürün silmeden vazgeçildi.")
        },
        {
          text: "Evet",
          handler: () => this.deleteProduct(productId, index)
        }
      ]
    }).present();
  }

  presentModallyProductFormPage(mode: string, product?: any, index?: number) {
    this.modalCtrl.create(ProductFormPage, {
      mode: mode,
      product: product,
      orderId: this.orderId,
      productIndex: index
    }).present();
  }

}
