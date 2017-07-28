import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderDetailsPage } from "../order-details/order-details";

/**
 * Generated class for the OrdersListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-orders-list',
  templateUrl: 'orders-list.html',
})
export class OrdersListPage {

  orders = [
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
    },
    {
      customer: {
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

      orderDetails: {
        orderDate: new Date(),
        deliveryDate: new Date(),
        amount: 1200,
        currency: "TRY",
        note: "Selam",
        personnel: "Çağatay Çiftçi"
      },

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
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showOrdersDetails(orderId: string) {
    this.navCtrl.push(OrderDetailsPage, {
      orderId: orderId
    });
  }

}
