import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../providers/mongo-db-service/mongo-db-service";
import { OrderDetailsPage } from "../order-details/order-details";
import { CurrencyBankProvider } from '../../providers/currency-bank/currency-bank';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { CityDistrictProvider } from "../../providers/city-district/city-district";
import { OnesignalNotificationProvider } from "../../providers/onesignal-notification/onesignal-notification";

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
        city: "İstanbul",
        district: "",
        note: ""
      }
    },

    orderDetails: {
      orderDate: new Date(),
      deliveryDate: (new Date()).toISOString(),
      personnel: this.auth.getUser(),
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
        personnel: this.auth.getUser(),
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
    private mdbs: MongoDbServiceProvider,
    private currencyBankProvider: CurrencyBankProvider,
    private auth: AuthServiceProvider,
    private cityDistrictProvider: CityDistrictProvider,
    private oneSignalNotificationProvider: OnesignalNotificationProvider
  ) {
    this.citySelected(this.order.customer.address.city);
  }

  citySelected(city) {
    this.order.customer.address.district = "";

    this.cityDistrictProvider.getCounties(city)
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

  logOrderSavedEvent() {
    this.mdbs.logEvent(
      "Yeni Sipariş",
      `${this.order.orderDetails.personnel} tarafından ${this.order.orderDetails.amount} ${this.order.orderDetails.currency} tutarında sipariş alındı`,
      this.order.orderDetails.personnel,
      this.order.orderDetails.orderDate
    )

    if (this.order.payments.length > 0) {
      this.mdbs.logEvent(
        "Yeni Ödeme",
        `${this.order.orderDetails.personnel} tarafından ${this.order.payments[0].amount} ${this.order.payments[0].currency} tutarında ödeme alındı`,
        this.order.orderDetails.personnel,
        this.order.orderDetails.orderDate
      )
    }

    this.oneSignalNotificationProvider.notifyManagers(`${this.order.orderDetails.personnel} tarafından ${this.order.orderDetails.amount} ${this.order.orderDetails.currency} tutarında sipariş alındı`);
  }

  saveOrder() {
    if (!this.order.payments[0].amount) {
      this.order.payments.pop();
    }

    let loading = this.loadingCtrl.create({
      content: "Sipariş kaydediliyor..."
    });

    loading.present();

    this.mdbs.insertNewOrder(this.order).subscribe((response) => {
      this.orderId = response.json().orderId;

      this.logOrderSavedEvent();

      this.showOrderSavedAlert();

      loading.dismiss();
    });

  }

  showOrderSavedAlert() {
    this.resetOrder();
    
    this.alertCtrl.create({
      title: "Sipariş başarıyla kaydedildi",
      message: "Detaylara gitmek ister misiniz?",
      buttons: [
        {
          text: "Hayır"
        },
        {
          text: "Evet",
          handler: () => {
            this.goToOrderDetailsPage();
          }
        }
      ]
    }).present();
  }

  resetOrder() {
    this.order = {
      customer: {
        identificationNumber: "",
        name: "",
        telephones: ["", ""],
        email: "",
        address: {
          line: "",
          city: "İstanbul",
          district: "",
          note: ""
        }
      },

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: (new Date()).toISOString(),
        personnel: this.auth.getUser(),
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
          personnel: this.auth.getUser(),
          installments: null,
          bank: "",
          date: new Date()
        }
      ]
    };
  }

  goToOrderDetailsPage() {
    this.navCtrl.push(OrderDetailsPage, {
      orderId: this.orderId
    }).then(() => this.orderId = "");
  }
}
