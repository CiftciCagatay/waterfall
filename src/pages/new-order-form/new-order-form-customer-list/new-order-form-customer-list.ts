import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
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
    public navParams: NavParams,
    private events: Events,
    public cds: CustomerDbServiceProvider
  ) {
    let loading = this.loadingCtrl.create({ content: "Müşteriler yükleniyor..." });

    loading.present();

    this.cds.getCustomers().subscribe(response => {
      this.customers = response.json();
      
      loading.dismiss();
    })
  }

  selectCustomer (customerId) {
    let loading = this.loadingCtrl.create({ content: "Müşteri seçiliyor..."});

    loading.present();

    this.cds.getCustomerById(customerId).subscribe(response => {
      this.events.publish("neworderform:customer:selected", response.json());

      loading.dismiss();

      this.navCtrl.pop();
    });
  }

  filterCustomers (text) {
    this.cds.getCustomers(text).subscribe(response => {
      this.customers = response.json();
    })
  }

}
