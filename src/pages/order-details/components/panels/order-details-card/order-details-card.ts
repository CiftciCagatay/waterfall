import { Component, Input } from '@angular/core';
import { ModalController } from "ionic-angular";
import { OrderDetailsFormPage } from "../../forms/order-details-form/order-details-form";

@Component({
  selector: 'order-details-card',
  templateUrl: 'order-details-card.html'
})
export class OrderDetailsCardComponent {
  
  @Input() orderId: string;
  @Input() orderDetails: any;

  constructor(
    private modalCtrl: ModalController
  ) {
    
  }

  presentModallyOrderDetailsFormPage() {
    this.modalCtrl.create(OrderDetailsFormPage, {
      orderDetails: this.orderDetails,
      orderId: this.orderId
    }).present();
  }

}
