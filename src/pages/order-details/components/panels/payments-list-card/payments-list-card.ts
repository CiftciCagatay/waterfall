import { Component, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController, Events } from "ionic-angular";
import { PaymentFormPage } from "../../forms/payment-form/payment-form";
import { PaymentDbServiceProvider } from "../../../../../providers/Database_Service_Providers/payment-db-service/payment-db-service";

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
    private pds: PaymentDbServiceProvider,
    private events: Events
  ) {
    console.log(this.orderId);

    this.events.subscribe("payment:added", (data) => {
      console.log(data);
      this.payments.push(data)
    })

    this.events.subscribe("payment:updated", (data) => {
      this.payments[data.index].type = data.payment.type;
      this.payments[data.index].amount = data.payment.amount;
      this.payments[data.index].currency = data.payment.currency;
      this.payments[data.index].installments = data.payment.installments;
      this.payments[data.index].bank = data.payment.bank;
    })
  }

  showPaymentMenuAlert (payment, index) {
    let alert = this.alertCtrl.create({
      title: "Ödeme Menüsü",
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

    this.pds.deletePayment(paymentId).subscribe((response) => {
      if (response.status == 200) {
        this.payments.splice(index, 1)
        loading.dismiss();
      } else {
        let alert = this.alertCtrl.create({
          title: "Ödeme Silinemedi",
          subTitle: "Ödeme silinirken bir hatayla karşılaşıldı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin",
          buttons: [
            {
              text: "Tamam"
            }
          ]
        });

        loading.dismiss().then(() => alert.present());
      }
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
