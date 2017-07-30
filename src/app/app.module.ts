import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewOrderFormPage } from "../pages/new-order-form/new-order-form";
import { OrderDetailsPage } from "../pages/order-details/order-details";
import { ComponentsModule } from "../components/components.module";

import { ProductsListCardComponent } from "../pages/order-details/components/panels/products-list-card/products-list-card";
import { PaymentsListCardComponent } from "../pages/order-details/components/panels/payments-list-card/payments-list-card";
import { OrderDetailsCardComponent } from "../pages/order-details/components/panels/order-details-card/order-details-card";
import { CustomerDetailsCardComponent } from "../pages/order-details/components/panels/customer-details-card/customer-details-card";
import { FormatDatePipe } from "../pipes/format-date/format-date";
import { ProductFormPage } from "../pages/order-details/components/forms/product-form/product-form";
import { PaymentFormPage } from "../pages/order-details/components/forms/payment-form/payment-form";
import { CustomerFormPage } from "../pages/order-details/components/forms/customer-form/customer-form";
import { OrderDetailsFormPage } from "../pages/order-details/components/forms/order-details-form/order-details-form";
import { OrdersListPage } from "../pages/orders-list/orders-list";
import { MongoDbServiceProvider } from '../providers/mongo-db-service/mongo-db-service';
import { HttpModule } from "@angular/http";
import { CurrencyBankProvider } from '../providers/currency-bank/currency-bank';
import { ProductTypesProvider } from '../providers/product-types/product-types';

@NgModule({
  declarations: [
    MyApp,

    HomePage,
    NewOrderFormPage,
    OrdersListPage,
    OrderDetailsPage,

    CustomerFormPage,
    OrderDetailsFormPage,
    ProductFormPage,
    PaymentFormPage,

    CustomerDetailsCardComponent,
    OrderDetailsCardComponent,
    PaymentsListCardComponent,
    ProductsListCardComponent,
    
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    HomePage,
    NewOrderFormPage,
    OrdersListPage,
    OrderDetailsPage,

    CustomerFormPage,
    OrderDetailsFormPage,
    ProductFormPage,
    PaymentFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MongoDbServiceProvider,
    CurrencyBankProvider,
    ProductTypesProvider
  ]
})
export class AppModule { }
