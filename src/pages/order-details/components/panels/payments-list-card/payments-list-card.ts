import { Component, Input } from '@angular/core';
import { ModalController, AlertController } from "ionic-angular";
import { PaymentFormPage } from "../../forms/payment-form/payment-form";

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

  @Input() payments;
  
  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
    console.log('Hello PaymentsListCardComponent Component');
  }

  deletePayment(paymentId: string, index: number) {
    this.payments.splice(index, 1)
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

  presentModallyProductFormPage(mode: string, payment?: any) {
    this.modalCtrl.create(PaymentFormPage, {
      mode: mode,
      payment: payment
    }).present();
  }

}
