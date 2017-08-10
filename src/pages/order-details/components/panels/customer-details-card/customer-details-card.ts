import { Component, Input } from '@angular/core';
import { ModalController, Events } from "ionic-angular";
import { CustomerFormPage } from "../../forms/customer-form/customer-form";

/**
 * Generated class for the CustomerDetailsCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'customer-details-card',
  templateUrl: 'customer-details-card.html'
})
export class CustomerDetailsCardComponent {

  @Input() customer: any;
  
  constructor(
    private modalCtrl: ModalController,
    private events: Events
  ) {
    this.events.subscribe("customer:updated", (data) => this.customer = data);
  }

  presentModallyCustomerFormPage() {
    this.modalCtrl.create(CustomerFormPage, {
      customer: this.customer
    }).present();
  }


}
