import { NgModule } from '@angular/core';

import { CustomerDetailsCardComponent } from "../pages/order-details/components/panels/customer-details-card/customer-details-card";
import { OrderDetailsCardComponent } from "../pages/order-details/components/panels/order-details-card/order-details-card";
import { PaymentsListCardComponent } from "../pages/order-details/components/panels/payments-list-card/payments-list-card";
import { ProductsListCardComponent } from "../pages/order-details/components/panels/products-list-card/products-list-card";

@NgModule({
    declarations: [
        CustomerDetailsCardComponent,
        OrderDetailsCardComponent,
        PaymentsListCardComponent,
        ProductsListCardComponent],
    imports: [],
    exports: [
        CustomerDetailsCardComponent,
        OrderDetailsCardComponent,
        PaymentsListCardComponent,
        ProductsListCardComponent
    ]
})
export class ComponentsModule { }
