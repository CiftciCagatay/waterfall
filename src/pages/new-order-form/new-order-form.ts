import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ModalController, Events } from 'ionic-angular';
import { OrderDetailsPage } from "../order-details/order-details";

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { CityDistrictProvider } from "../../providers/city-district/city-district";
import { OnesignalNotificationProvider } from "../../providers/onesignal-notification/onesignal-notification";

import { OrderDbServiceProvider } from "../../providers/Database_Service_Providers/order-db-service/order-db-service";
import { EventDbServiceProvider } from "../../providers/Database_Service_Providers/event-db-service/event-db-service";
import { PaymentDbServiceProvider } from "../../providers/Database_Service_Providers/payment-db-service/payment-db-service";
import { NewOrderFormCustomerListPage } from "./new-order-form-customer-list/new-order-form-customer-list";

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
      note: "",
      laborCost: 0.0
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
    public navParams: NavParams,

    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,

    private ods: OrderDbServiceProvider,
    private eds: EventDbServiceProvider,
    private pds: PaymentDbServiceProvider,

    private auth: AuthServiceProvider,
    private cityDistrictProvider: CityDistrictProvider,
    private oneSignalNotificationProvider: OnesignalNotificationProvider,
    private events: Events
  ) {
    this.citySelected(this.order.customer.address.city);

    this.events.subscribe("neworderform:customer:selected", (data) => {
      this.order.customer = data
    });
  }

  citySelected(city) {
    this.order.customer.address.district = "";

    this.cityDistrictProvider.getCounties(city)
  }

  openCustomerListPage() {
    let customerListModal = this.modalCtrl.create(NewOrderFormCustomerListPage, {
      customer: this.order.customer
    });

    customerListModal.present();
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
    this.eds.logEvent(
      "Yeni Sipariş",
      `${this.order.orderDetails.personnel} tarafından ${this.order.orderDetails.amount} ${this.order.orderDetails.currency} tutarında sipariş alındı`,
      this.order.orderDetails.personnel,
      this.order.orderDetails.orderDate
    )

    if (this.order.payments.length > 0) {
      this.eds.logEvent(
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

    this.ods.insertNewOrder(this.order).subscribe((response) => {
      if (response.status == 200) {
        this.orderId = response.json()[1]._id;

        console.log(response.json())

        this.logOrderSavedEvent();

        this.showOrderSavedAlert();

        loading.dismiss();
      } else {
        console.log(response);

        let alert = this.alertCtrl.create({
          title: "Sipariş Kaydedilemedi",
          subTitle: "Sipariş kaydedilirken bir hatayla karşılaşıldı. Forma girdiğiniz verileri ve internet bağlantınızı kontrol edin",
          buttons: [
            {
              text: "Tamam"
            }
          ]
        });

        loading.dismiss().then(() => alert.present())
      }

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
        note: "",
        laborCost: 0.0
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
    this.navCtrl.push(OrderDetailsPage, { orderId: this.orderId })
      .then(() => this.orderId = "");
  }
}
