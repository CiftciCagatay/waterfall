import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from "@angular/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OneSignal } from '@ionic-native/onesignal';

import { LoginPage } from "../pages/login/login";

import { NewOrderFormPage } from "../pages/new-order-form/new-order-form";
import { NewOrderFormCustomerListPage } from "../pages/new-order-form/new-order-form-customer-list/new-order-form-customer-list";
import { OrdersListPage } from "../pages/orders-list/orders-list";
import { OrderDetailsPage } from "../pages/order-details/order-details";

import { CustomerListPage } from "../pages/customer-list/customer-list";
import { CustomerDetailsPage } from "../pages/customer-details/customer-details";

import { ProductFormPage } from "../pages/order-details/components/forms/product-form/product-form";
import { PaymentFormPage } from "../pages/order-details/components/forms/payment-form/payment-form";
import { CustomerFormPage } from "../pages/order-details/components/forms/customer-form/customer-form";
import { OrderDetailsFormPage } from "../pages/order-details/components/forms/order-details-form/order-details-form";

import { ProductsListCardComponent } from "../pages/order-details/components/panels/products-list-card/products-list-card";
import { PaymentsListCardComponent } from "../pages/order-details/components/panels/payments-list-card/payments-list-card";
import { OrderDetailsCardComponent } from "../pages/order-details/components/panels/order-details-card/order-details-card";
import { CustomerDetailsCardComponent } from "../pages/order-details/components/panels/customer-details-card/customer-details-card";

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { OnesignalNotificationProvider } from '../providers/onesignal-notification/onesignal-notification';
import { CityDistrictProvider } from '../providers/city-district/city-district';

import { CalculateBalancePipe } from "../pipes/calculate-balance/calculate-balance";
import { FormatDatePipe } from "../pipes/format-date/format-date";

import { OrderDbServiceProvider } from '../providers/Database_Service_Providers/order-db-service/order-db-service';
import { CustomerDbServiceProvider } from '../providers/Database_Service_Providers/customer-db-service/customer-db-service';
import { ProductDbServiceProvider } from '../providers/Database_Service_Providers/product-db-service/product-db-service';
import { PaymentDbServiceProvider } from '../providers/Database_Service_Providers/payment-db-service/payment-db-service';
import { EventDbServiceProvider } from '../providers/Database_Service_Providers/event-db-service/event-db-service';
import { GlobalsProvider } from '../providers/globals/globals';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReportsDbServiceProvider } from "../providers/Database_Service_Providers/reports-db-service/reports-db-service";
import { PaymentReportComponent } from "../components/payment-report/payment-report";
import { ProductReportComponent } from "../components/product-report/product-report";

var config = {
  apiKey: "AIzaSyCxmjHbtRTZF0ERTALuA7S2AzPa2uq7TlU",
  authDomain: "waterfall-e11fb.firebaseapp.com",
  databaseURL: "https://waterfall-e11fb.firebaseio.com",
  projectId: "waterfall-e11fb",
  storageBucket: "waterfall-e11fb.appspot.com",
  messagingSenderId: "841595940135"
};

@NgModule({
  declarations: [
    MyApp,

    LoginPage,
    HomePage,
    NewOrderFormPage,
    NewOrderFormCustomerListPage,
    OrdersListPage,
    OrderDetailsPage,

    CustomerListPage,
    CustomerDetailsPage,

    CustomerFormPage,
    OrderDetailsFormPage,
    ProductFormPage,
    PaymentFormPage,

    CustomerDetailsCardComponent,
    OrderDetailsCardComponent,
    PaymentsListCardComponent,
    ProductsListCardComponent,

    PaymentReportComponent,
    ProductReportComponent,

    FormatDatePipe,
    CalculateBalancePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      monthShortNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      dayNames: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
      dayShortNames: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    LoginPage,
    HomePage,
    NewOrderFormPage,
    NewOrderFormCustomerListPage,
    OrdersListPage,
    OrderDetailsPage,

    CustomerListPage,
    CustomerDetailsPage,

    CustomerFormPage,
    OrderDetailsFormPage,
    ProductFormPage,
    PaymentFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },

    AuthServiceProvider,

    OneSignal,
    OnesignalNotificationProvider,

    CityDistrictProvider,

    OrderDbServiceProvider,
    CustomerDbServiceProvider,
    ProductDbServiceProvider,
    PaymentDbServiceProvider,
    EventDbServiceProvider,
    ReportsDbServiceProvider,

    GlobalsProvider
  ]
})
export class AppModule { }
