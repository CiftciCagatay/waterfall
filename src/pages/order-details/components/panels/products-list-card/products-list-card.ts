import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController, Events } from "ionic-angular";
import { ProductFormPage } from "../../forms/product-form/product-form";
import { ProductDbServiceProvider } from "../../../../../providers/Database_Service_Providers/product-db-service/product-db-service";
import { OrderDbServiceProvider } from "../../../../../providers/Database_Service_Providers/order-db-service/order-db-service";

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
export class ProductsListCardComponent implements OnInit {

  @Input() products: Array<any>;
  @Input() orderId: string;
  @Input() laborCost = 0.0;

  totalQuantity = 0.0;
  totalAmount = 0.0;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private events: Events,
    private pds: ProductDbServiceProvider,
    private ods: OrderDbServiceProvider
  ) {
    this.events.subscribe("product:added", (data) => {
      if (this.products != null)  {
        this.products.push(data);
      } else {
        this.products = [data];
      }

      this.totalAmount += data.quantity * data.unitPrice;
      this.totalQuantity += data.quantity;
    });

    this.events.subscribe("product:updated", (data) => {
      this.products[data.index].type = data.product.type;
      this.products[data.index].patternCode = data.product.patternCode;
      this.products[data.index].colorCode = data.product.colorCode;
      this.products[data.index].varietyCode = data.product.varietyCode;
      this.products[data.index].unitPrice = data.product.unitPrice;
      this.products[data.index].laborCost = data.product.laborCost;
      this.products[data.index].quantity = data.product.quantity;

      this.calculateTotalAmountAndQuantity();
    });
  }

  ngOnInit() {
    if (this.products) {
      this.calculateTotalAmountAndQuantity();
    }
  }

  calculateTotalAmountAndQuantity() {
    this.totalAmount = 0.0;
    this.totalQuantity = 0.0;

    for (const product of this.products) {
      this.totalAmount += product.quantity * product.unitPrice;
      this.totalQuantity += product.quantity;
    }

    this.totalAmount += this.totalQuantity * this.laborCost;
  }

  showLaborCostAlert() {
    let alert = this.alertCtrl.create({
      title: "İşçilik",
      subTitle: "İşçilik birim fiyatını giriniz",
      inputs: [
        {
          placeholder: "İşçilik Birim Fiyat",
          min: 0.0,
          value: '' + this.laborCost,
          id: "laborCostField",
          name: "laborCost"
        }
      ],
      buttons: [
        {
          text: "Kaydet",
          handler: (data) => {
            this.laborCost = Number(data.laborCost)
            this.saveLaborCost();
            this.calculateTotalAmountAndQuantity();
          }
        },
        {
          text: "Vazgeç"
        }
      ]
    })

    alert.present();
  }

  saveLaborCost() {
    let loading = this.loadingCtrl.create({ content: "İşçilik maliyeti güncelleniyor..." });

    loading.present();

    this.ods.updateLaborCost(this.orderId, this.laborCost).subscribe(response => {
      console.log(response);

      if (response.status == 500) {

        let alert = this.alertCtrl.create({
          title: "Hata",
          subTitle: "İşçilik maliyeti güncellenirken bir hatayla karşılaşıldı. Lütfen tekrar deneyin",
          buttons: [
            {
              text: "Tamam"
            }
          ]
        })

        loading.dismiss().then(() => {
          alert.present();
        })
      } else if (response.status == 200) {
        loading.dismiss();
      }
    })
  }

  showProductMenuAlert(product, index) {
    let alert = this.alertCtrl.create({
      title: "Ürün Menüsü",
      subTitle: "Ne yapmak istiyorsunuz?",
      buttons: [
        {
          text: "Düzenle",
          handler: () => {
            this.presentModallyProductFormPage('edit', product, index);
          }
        },
        {
          text: "Sil",
          handler: () => {
            this.presentDeletionWarning(product._id, index);
          }
        },
        {
          text: "Geri Dön"
        }
      ]
    });

    alert.present();
  }

  deleteProduct(productId: string, index: number) {
    let loading = this.loadingCtrl.create({ content: "Ürün siliniyor..." });

    loading.present();

    this.pds.deleteProduct(productId).subscribe((response) => {
      this.totalAmount -= this.products[index].quantity * this.products[index].unitPrice
      this.totalQuantity -= this.products[index].quantity

      this.products.splice(index, 1);

      loading.dismiss();
    });
  }

  presentDeletionWarning(productId: string, index: number) {
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
