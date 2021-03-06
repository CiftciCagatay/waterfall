import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { CustomerDbServiceProvider } from "../../providers/Database_Service_Providers/customer-db-service/customer-db-service";
import { CustomerDetailsPage } from "../customer-details/customer-details";

/**
 * Generated class for the CustomerListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html',
})
export class CustomerListPage {

  customers = [];

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    public cds: CustomerDbServiceProvider
  ) {
    let loading = this.loadingCtrl.create({ content: "Müşteriler yükleniyor..." });

    loading.present();

    this.cds.getCustomers().subscribe(
      (response) => {
        this.customers = response.json();

        loading.dismiss();
      },
      (error) => {
        console.log(error);

        let alert = this.alertCtrl.create({
          title: "Müşteriler Listelenemedi",
          subTitle: "Müşteriler listenirken bir hatayla karşılaşıldı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin",
          buttons: [
            {
              text: "Tamam"
            }
          ]
        })

        loading.dismiss().then(() => alert.present());
      }
    )
  }

  goToCustomerDetailsPage(customerId: String) {
    this.navCtrl.push(CustomerDetailsPage, {
      customerId: customerId
    });
  }

  filterCustomers(text) {
    this.cds.getCustomers(text).subscribe(
      (response) => {
        if (response.status == 200) {
          this.customers = response.json();
          console.log(response);
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
