import { Component, Input } from '@angular/core';
import { ModalController, Events } from "ionic-angular";
import { OrderDetailsFormPage } from "../../forms/order-details-form/order-details-form";

@Component({
  selector: 'order-details-card',
  templateUrl: 'order-details-card.html'
})
export class OrderDetailsCardComponent {
  
  @Input() orderId: string;
  @Input() orderDetails: any;

  @Input() balance;

  constructor(
    private modalCtrl: ModalController,
    private events: Events
  ) {
    this.events.subscribe("orderDetails:updated", (data) => {
      this.orderDetails = {
        orderDate: data.orderDate,
        deliveryDate: data.deliveryDate,
        personnel: data.personnel,
        amount: data.amount,
        currency: data.currency,
        note: data.note
      }
    });
  }

  presentModallyOrderDetailsFormPage() {
    this.modalCtrl.create(OrderDetailsFormPage, {
      orderDetails: this.orderDetails,
      orderId: this.orderId
    }).present();
  }

}
