import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html'
})
export class OrderDetailsPage {

  order = {
    customer : {
      name: "Çağatay Çiftçi",
      telephones: ["555"],
      email: "im.cgtycftc@gmail.com",
      address: {
        line: "Örnektepe",
        district: "Beyoğlu",
        "city": "İstanbul",
        note: "Dürümcü karşısı"
      }
    },

    orderDetails: {},

    payments: [
      {
        type: "Kredi Kartı",
        amount: 1500,
        currency: "TRY",
        personnel: "Çağatay Çiftçi",
        installments: 5,
        bank: "Garanti",
        note: "Kalanı nakit olacak ve teslm tarihinde verilecek"
      },
      {
        type: "Kredi Kartı",
        amount: 1500,
        currency: "TRY",
        personnel: "Çağatay Çiftçi",
        installments: 5,
        bank: "Garanti",
        note: "Kalanı nakit olacak ve teslm tarihinde verilecek"
      },
      {
        type: "Kredi Kartı",
        amount: 1500,
        currency: "TRY",
        personnel: "Çağatay Çiftçi",
        installments: 5,
        bank: "Garanti",
        note: "Kalanı nakit olacak ve teslm tarihinde verilecek"
      }
    ],

    products: [
      {
        patternCode: "A1234",
        varietyCode: "CCDE134",
        colorCode: "SYH12",
        unitPrice: 12.5,
        quantity: 10.0
      }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
  }

}
