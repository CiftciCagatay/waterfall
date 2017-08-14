import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events, AlertController } from 'ionic-angular';
import { CustomerDbServiceProvider } from "../../../providers/Database_Service_Providers/customer-db-service/customer-db-service";

@IonicPage()
@Component({
  selector: 'page-new-order-form-customer-list',
  templateUrl: 'new-order-form-customer-list.html',
})
export class NewOrderFormCustomerListPage {

  customers = [];

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private events: Events,
    public cds: CustomerDbServiceProvider
  ) {
    let loading = this.loadingCtrl.create({ content: "Müşteriler yükleniyor..." });

    loading.present();

    this.cds.getCustomers().subscribe(response => {
      if (response.status == 200) {
        this.customers = response.json();

        loading.dismiss();
      } else {
        let alert = this.alertCtrl.create({
          title: "Müşteriler getirilmedi",
          subTitle: "Müşteriler listelenirken bir hatayla karşılaşıldı. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin",
          buttons: [
            {
              text: "Tamam",
              handler: () => {
                this.navCtrl.pop()
              }
            }
          ]
        })

        loading.dismiss().then(() => alert.present());
      }
    })
  }

  selectCustomer (customerId) {
    let loading = this.loadingCtrl.create({ content: "Müşteri seçiliyor..." });

    loading.present();

    this.cds.getCustomerById(customerId).subscribe(response => {
      if (response.status == 200) {
        this.events.publish("neworderform:customer:selected", response.json());

        loading.dismiss().then(() => this.navCtrl.pop());
      } else {
        let alert = this.alertCtrl.create({
          title: "Müşteri Seçilemedi",
          subTitle: "Müşterinin detayları getirilirken bir hatayla karşılaşıldı. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin",
          buttons: [
            {
              text: "Tamam"
            }
          ]
        })

        loading.dismiss().then(() => alert.present());
      }
    });
  }

  filterCustomers(text) {
    this.cds.getCustomers(text).subscribe(response => {
      if (response.status == 200)
        this.customers = response.json();
    })
  }

}
