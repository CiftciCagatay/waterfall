import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { OrderDetailsPage } from "../order-details/order-details";

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { CityDistrictProvider } from "../../providers/city-district/city-district";
import { OnesignalNotificationProvider } from "../../providers/onesignal-notification/onesignal-notification";

import { OrderDbServiceProvider } from "../../providers/Database_Service_Providers/order-db-service/order-db-service";
import { EventDbServiceProvider } from "../../providers/Database_Service_Providers/event-db-service/event-db-service";
import { PaymentDbServiceProvider } from "../../providers/Database_Service_Providers/payment-db-service/payment-db-service";

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
    
    private ods: OrderDbServiceProvider,
    private eds: EventDbServiceProvider,
    private pds: PaymentDbServiceProvider,

    private auth: AuthServiceProvider,
    private cityDistrictProvider: CityDistrictProvider,
    private oneSignalNotificationProvider: OnesignalNotificationProvider
  ) {
    this.citySelected(this.order.customer.address.city);
  }

  isIdentificationNumberValid (id: String) {
    if (id[0] == '0') {
      console.log("TC Kimlik numarasının ilk karakteri 0 olamaz");
      return false;
    } else if(id.length != 11) {
      console.log("TC Kimlik numarası 11 haneli olmalıdır");
      return false
    } else if (Number(id) % 2 != 0) {
      console.log("TC Kimlik numarası tek sayı olamaz");
      return false;
    } else {

      var tekIndexToplam = Number(id[0]) + Number(id[2]) + Number(id[4]) + Number(id[6]) + Number(id[8]);
      var ciftIndexToplam = Number(id[1]) + Number(id[3]) + Number(id[5]) + Number(id[7]);


      var farkMod10 = ((tekIndexToplam * 7) - ciftIndexToplam) % 10;

      if (farkMod10 != Number(id[9])) {
        console.log("10. hanen doğru değil")
        return false
      }

      var ilkOnHaneToplam = tekIndexToplam + ciftIndexToplam + Number(id[9]);

      if (ilkOnHaneToplam % 10 != Number(id[10])) {
        console.log("11. hanen doğru değil")
        return false;
      }

    }
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
    if (!this.isIdentificationNumberValid(this.order.customer.identificationNumber)) {
      return;
    }

    if (!this.order.payments[0].amount) {
      this.order.payments.pop();
    }

    let loading = this.loadingCtrl.create({
      content: "Sipariş kaydediliyor..."
    });

    loading.present();

    this.ods.insertNewOrder(this.order).subscribe((response) => {
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
