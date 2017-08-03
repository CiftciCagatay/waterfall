import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NewOrderFormPage } from "../pages/new-order-form/new-order-form";
import { OrderDetailsPage } from "../pages/order-details/order-details";
import { OrdersListPage } from "../pages/orders-list/orders-list";
import { LoginPage } from "../pages/login/login";
import { OnesignalNotificationProvider } from "../providers/onesignal-notification/onesignal-notification";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private onesignal: OnesignalNotificationProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Anasayfa', component: HomePage },
      { title: 'Yeni Sipariş Formu', component: NewOrderFormPage },
      { title: 'Siparişler', component: OrdersListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      if (window["plugins"]) {
        var notificationOpenedCallback = function (jsonData) {
          console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };

        window["plugins"].OneSignal
          .startInit(this.onesignal.appId, this.onesignal.androidProjectNumber)
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit();
      } else {
        console.log("Notifications are GG my friend");
      }

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
