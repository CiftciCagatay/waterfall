import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { CityDistrictProvider } from "../../../../../providers/city-district/city-district";
import { CustomerDbServiceProvider } from "../../../../../providers/Database_Service_Providers/customer-db-service/customer-db-service";

@Component({
  selector: 'page-customer-form',
  templateUrl: 'customer-form.html',
})
export class CustomerFormPage {

  customer: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private cds: CustomerDbServiceProvider,
    private events: Events,
    private cityDistrictProvider: CityDistrictProvider
  ) {

    this.customer = JSON.parse(JSON.stringify(this.navParams.get('customer')))

    if (!this.customer) {
      this.navCtrl.pop();
    }
  }

  citySelected(city) {
    this.customer.address.district = "";

    this.cityDistrictProvider.getCounties(city)
  }

  showSubmitAlert() {
    this.alertCtrl.create({
      title: 'Değişiklikler Kaydedilecek',
      subTitle: 'Bu değişiklikler geri alınamaz. Emin misiniz?',

      buttons: [
        {
          text: "Hayır"
        },
        {
          text: "Evet",
          handler: () => {
            this.saveChanges()
          }
        }
      ]
    }).present();
  }

  saveChanges() {
    let loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });

    loading.present();

    this.cds.updateCustomerInformation(this.customer._id, this.customer).subscribe((response) => {
      loading.dismiss().then(() => this.navCtrl.pop());

      this.events.publish("customer:updated", this.customer);
    })
  }

}
