import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../providers/mongo-db-service/mongo-db-service";
import { OrderDetailsPage } from "../order-details/order-details";
import { CurrencyBankProvider } from '../../providers/currency-bank/currency-bank';

@Component({
  selector: 'page-new-order-form',
  templateUrl: 'new-order-form.html',
})
export class NewOrderFormPage {

  orderId: string;
  order = {
    customer: {
      identificationNumber: "",
      name: "",
      telephones: ["", ""],
      email: "",
      address: {
        line: "",
        city: "",
        district: "",
        note: ""
      }
    },

    orderDetails: {
      orderDate: new Date(),
      deliveryDate: new Date(),
      personnel: "Çağatay Çiftçi",
      amount: null,
      currency: "TRY",
      note: ""
    },

    payments: [
      {
        type: "Nakit",
        currency: "TRY",
        amount: null,
        note: "",
        personnel: "Çağatay",
        installments: null,
        bank: "",
        date: new Date()
      }
    ]
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private mdbs: MongoDbServiceProvider,
    private currencyBankProvider: CurrencyBankProvider
  ) {
  }

  showSavingAlert() {
    this.alertCtrl.create({
      title: "Sipariş Kaydedilecek",
      subTitle: "Emin misiniz?",
      buttons: [
        {
          text: "Vazgeç"
        },
        {
          text: "Kaydet",
          handler: () => {
            this.saveOrder();
          }
        }
      ]
    }).present();
  }

  saveOrder() {
    let loading = this.loadingCtrl.create({
      content: "Sipariş kaydediliyor..."
    });

    loading.present();

    this.mdbs.insertNewOrder(this.order).subscribe((response) => {
      this.orderId = response.json().orderId;

      loading.dismiss();

      this.showOrderSavedToast();
    });
  }

  showOrderSavedToast() {
    let toast = this.toastCtrl.create({
      message: "Sipariş başarıyla kaydedildi",
      closeButtonText: "Detaylara Git",
      showCloseButton: true,
      duration: 10000
    });

    toast.onDidDismiss(() => {
      this.goToOrderDetailsPage();
    })

    toast.present();
  }

  goToOrderDetailsPage() {
    this.navCtrl.push(OrderDetailsPage, {
      orderId: this.orderId
    });
  }
}
