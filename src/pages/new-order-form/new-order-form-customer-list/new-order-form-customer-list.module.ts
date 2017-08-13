import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewOrderFormCustomerListPage } from './new-order-form-customer-list';

@NgModule({
  declarations: [
    NewOrderFormCustomerListPage,
  ],
  imports: [
    IonicPageModule.forChild(NewOrderFormCustomerListPage),
  ],
})
export class NewOrderFormCustomerListPageModule {}
