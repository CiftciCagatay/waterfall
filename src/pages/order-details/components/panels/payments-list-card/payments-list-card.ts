import { Component, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from "ionic-angular";
import { PaymentFormPage } from "../../forms/payment-form/payment-form";
import { MongoDbServiceProvider } from "../../../../../providers/mongo-db-service/mongo-db-service";

/**
 * Generated class for the PaymentsListCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payments-list-card',
  templateUrl: 'payments-list-card.html'
})
export class PaymentsListCardComponent {
  
  @Input() orderId: string;
  @Input() payments;
  
  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private mdbs: MongoDbServiceProvider
  ) {
    console.log(this.orderId);
  }

  showPaymentMenuAlert (payment, index) {
    let alert = this.alertCtrl.create({
      title: "Ürün Menüsü",
      subTitle: "Ne yapmak istiyorsunuz?",
      buttons: [
        {
          text: "Düzenle",
          handler: () => {
            this.presentModallyPaymentFormPage('edit', payment, index);
          }
        },
        {
          text: "Sil",
          handler: () => {
            this.presentDeletionWarning(payment._id, index);
          }
        },
        {
          text: "Geri Dön"
        }
      ]
    

    });

    alert.present();
  }

  deletePayment(paymentId: string, index: number) {
    let loading = this.loadingCtrl.create({ content: "Ödeme siliniyor..." });

    loading.present();

    this.mdbs.deletePayment(paymentId).subscribe((response) => {
      this.payments.splice(index, 1)
      
      loading.dismiss();
    });
  }

  presentDeletionWarning(paymentId: string, index:number) {
    this.alertCtrl.create({
      title: "Ödeme Silinecek",
      subTitle: "Bu işlem geri alınmaz. Emin misiniz?",
      buttons: [
        {
          text: "Hayır"
        },
        {
          text: "Evet",
          handler: () => this.deletePayment(paymentId, index)
        }
      ]
    }).present();
  }

  presentModallyPaymentFormPage(mode: string, payment?: any, index?: number) {
    console.log(this.orderId);

    this.modalCtrl.create(PaymentFormPage, {
      mode: mode,
      payment: payment,
      orderId: this.orderId,
      paymentIndex: index
    }).present();
  }

}
