webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderDetailsPage = (function () {
    function OrderDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order = {
            customer: {
                name: "Çağatay Çiftçi",
                telephones: ["555"],
                email: "im.cgtycftc@gmail.com",
                address: {
                    line: "Örnektepe",
                    district: "Beyoğlu",
                    "city": "İstanbul",
                    note: "Dürümcü karşısı"
                }
            },
            orderDetails: {
                orderDate: new Date(),
                deliveryDate: new Date(),
                amount: 1200,
                currency: "TRY",
                note: "Selam",
                personnel: "Çağatay Çiftçi"
            },
            payments: [
                {
                    type: "Kredi Kartı",
                    amount: 1500,
                    currency: "TRY",
                    personnel: "Çağatay Çiftçi",
                    installments: 5,
                    bank: "Garanti",
                    note: "Kalanı nakit olacak ve teslm tarihinde verilecek"
                },
                {
                    type: "Kredi Kartı",
                    amount: 1500,
                    currency: "TRY",
                    personnel: "Çağatay Çiftçi",
                    installments: 5,
                    bank: "Garanti",
                    note: "Kalanı nakit olacak ve teslm tarihinde verilecek"
                },
                {
                    type: "Kredi Kartı",
                    amount: 1500,
                    currency: "TRY",
                    personnel: "Çağatay Çiftçi",
                    installments: 5,
                    bank: "Garanti",
                    note: "Kalanı nakit olacak ve teslm tarihinde verilecek"
                }
            ],
            products: [
                {
                    patternCode: "A1234",
                    varietyCode: "CCDE134",
                    colorCode: "SYH12",
                    unitPrice: 12.5,
                    quantity: 10.0
                }
            ]
        };
    }
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailsPage');
    };
    return OrderDetailsPage;
}());
OrderDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-details',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/order-details.html"*/'<!--\n  Generated template for the OrderDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title>Sipariş Detayları</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <customer-details-card [customer]="order.customer"></customer-details-card>\n      </ion-col>\n\n      <ion-col>\n        <order-details-card [orderDetails]="order.orderDetails"></order-details-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <payments-list-card [payments]="order.payments"></payments-list-card>\n      </ion-col>\n\n      <ion-col>\n        <products-list-card [products]="order.products"></products-list-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/order-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], OrderDetailsPage);

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_new_order_form_new_order_form__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_order_details_order_details__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_order_details_components_panels_products_list_card_products_list_card__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_order_details_components_panels_payments_list_card_payments_list_card__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_order_details_components_panels_order_details_card_order_details_card__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_order_details_components_panels_customer_details_card_customer_details_card__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_format_date_format_date__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_order_details_components_forms_product_form_product_form__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_order_details_components_forms_payment_form_payment_form__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_order_details_components_forms_customer_form_customer_form__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_order_details_components_forms_order_details_form_order_details_form__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_orders_list_orders_list__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_new_order_form_new_order_form__["a" /* NewOrderFormPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_orders_list_orders_list__["a" /* OrdersListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_order_details_order_details__["a" /* OrderDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_order_details_components_forms_customer_form_customer_form__["a" /* CustomerFormPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_order_details_components_forms_order_details_form_order_details_form__["a" /* OrderDetailsFormPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_order_details_components_forms_product_form_product_form__["a" /* ProductFormPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_order_details_components_forms_payment_form_payment_form__["a" /* PaymentFormPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_order_details_components_panels_customer_details_card_customer_details_card__["a" /* CustomerDetailsCardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_order_details_components_panels_order_details_card_order_details_card__["a" /* OrderDetailsCardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_order_details_components_panels_payments_list_card_payments_list_card__["a" /* PaymentsListCardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_order_details_components_panels_products_list_card_products_list_card__["a" /* ProductsListCardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_format_date_format_date__["a" /* FormatDatePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_new_order_form_new_order_form__["a" /* NewOrderFormPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_orders_list_orders_list__["a" /* OrdersListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_order_details_order_details__["a" /* OrderDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_order_details_components_forms_customer_form_customer_form__["a" /* CustomerFormPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_order_details_components_forms_order_details_form_order_details_form__["a" /* OrderDetailsFormPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_order_details_components_forms_product_form_product_form__["a" /* ProductFormPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_order_details_components_forms_payment_form_payment_form__["a" /* PaymentFormPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_order_form_new_order_form__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_orders_list_orders_list__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Anasayfa', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Yeni Sipariş Formu', component: __WEBPACK_IMPORTED_MODULE_5__pages_new_order_form_new_order_form__["a" /* NewOrderFormPage */] },
            { title: 'Siparişler', component: __WEBPACK_IMPORTED_MODULE_6__pages_orders_list_orders_list__["a" /* OrdersListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="navBarColor">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewOrderFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NewOrderFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewOrderFormPage = (function () {
    function NewOrderFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, toastCtrl, mdbs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.mdbs = mdbs;
        this.order = {
            customer: {
                identificationNumber: "",
                name: "",
                telephones: ["", ""],
                email: "",
                address: {
                    line: "",
                    city: "",
                    district: "",
                    note: ""
                }
            },
            orderDetails: {
                orderDate: new Date(),
                deliveryDate: new Date(),
                personnel: "Çağatay Çiftçi",
                amount: null,
                currency: "TRY",
                note: ""
            },
            payments: [
                {
                    type: "Nakit",
                    currency: "TRY",
                    amount: null,
                    note: "",
                    personnel: "Çağatay",
                    installments: null,
                    bank: ""
                }
            ]
        };
    }
    NewOrderFormPage.prototype.showSavingAlert = function () {
        var _this = this;
        this.alertCtrl.create({
            title: "Sipariş Kaydedilecek",
            subTitle: "Emin misiniz?",
            buttons: [
                {
                    text: "Vazgeç"
                },
                {
                    text: "Kaydet",
                    handler: function () {
                        _this.saveOrder();
                    }
                }
            ]
        }).present();
    };
    NewOrderFormPage.prototype.saveOrder = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Sipariş kaydediliyor..."
        });
        loading.present();
        this.mdbs.insertNewOrder(this.order).subscribe(function (response) {
            _this.orderId = response.json().orderId;
            loading.dismiss();
        });
    };
    NewOrderFormPage.prototype.showOrderSavedToast = function () {
        this.toastCtrl.create({
            message: "Sipariş başarıyla kaydedildi",
            closeButtonText: "Detaylara Git",
            duration: 10
        }).present();
    };
    NewOrderFormPage.prototype.goToOrderDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_details_order_details__["a" /* OrderDetailsPage */], {
            orderId: this.orderId
        });
    };
    return NewOrderFormPage;
}());
NewOrderFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-order-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/new-order-form/new-order-form.html"*/'<!--\n  Generated template for the NewOrderFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Yeni Sipariş Formu</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSavingAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form>\n    <ion-grid>\n      <ion-row>\n        <!-- Müşteri -->\n        <ion-col>\n          <ion-card>\n            <ion-card-header>Müşteri</ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <label ion-item>\n                  <ion-label fixed>*TC Kimlik</ion-label>\n                  <ion-input name="identificationNumber" [(ngModel)]="order.customer.identificationNumber" type="number"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>*İsim</ion-label>\n                  <ion-input name="name" [(ngModel)]="order.customer.name"></ion-input>\n                </label>\n\n                <ion-item-divider></ion-item-divider>\n\n                <label ion-item>\n                  <ion-label fixed>Telefon 1</ion-label>\n                  <ion-input name="telephone1" [(ngModel)]="order.customer.telephones[0]"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Telefon 2</ion-label>\n                  <ion-input name="telephone2" [(ngModel)]="order.customer.telephones[1]"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Email</ion-label>\n                  <ion-input name="email" [(ngModel)]="order.customer.email"></ion-input>\n                </label>\n\n                <ion-item-divider></ion-item-divider>\n\n                <label ion-item>\n                  <ion-label fixed>Adres Satırı</ion-label>\n                  <ion-textarea name="addressLine" [(ngModel)]="order.customer.address.line"></ion-textarea>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Şehir</ion-label>\n                  <ion-input name="addressCity" [(ngModel)]="order.customer.address.city"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>İlçe</ion-label>\n                  <ion-input name="addressDistrict" [(ngModel)]="order.customer.address.district"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Adres Not</ion-label>\n                  <ion-textarea name="addressNote" [(ngModel)]="order.customer.address.note"></ion-textarea>\n                </label>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <!-- Sipariş ve Kapora -->\n        <ion-col>\n          <!-- Sipariş -->\n          <ion-card>\n            <ion-card-header>Sipariş</ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <label ion-item>\n                  <ion-label>İş Teslim Tarihi</ion-label>\n                  <ion-datetime name="deliveryDate" [(ngModel)]="order.orderDetails.deliveryDate"></ion-datetime>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Sipariş Tutarı</ion-label>\n                  <ion-input name="orderAmount" [(ngModel)]="order.orderDetails.amount" type="number"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label>Para Birimi</ion-label>\n                  <ion-select name="orderCurrency" [(ngModel)]="order.orderDetails.currency">\n                    <ion-option *ngFor="let currency of currencies">{{ currency }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Sipariş Not</ion-label>\n                  <ion-textarea name="orderNote" [(ngModel)]="order.orderDetails.note"></ion-textarea>\n                </label>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n          \n          <!-- Kapora -->\n          <ion-card>\n            <ion-card-header>Kapora</ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <label ion-item>\n                  <ion-label>Ödeme Türü</ion-label>\n                  <ion-select name="paymentType" [(ngModel)]="order.payments[0].type">\n                    <ion-option *ngFor="let paymentType of paymentTypes">{{ paymentType }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Tutar</ion-label>\n                  <ion-input name="paymentAmount" [(ngModel)]="order.payments[0].amount" type="number"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label>Para Birimi</ion-label>\n                  <ion-select name="paymentCurrency" [(ngModel)]="order.payments[0].currency">\n                    <ion-option *ngFor="let currency of currencies">{{ currency }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Taksit Sayısı</ion-label>\n                  <ion-input name="installments" [(ngModel)]="order.payments[0].installments" type="number"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label>Banka</ion-label>\n                  <ion-select name="paymentBank" [(ngModel)]="order.payments[0].bank">\n                    <ion-option *ngFor="let bank of banks">{{ bank }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Ödeme Not</ion-label>\n                  <ion-textarea name="paymentNote" [(ngModel)]="order.payments[0].note"></ion-textarea>\n                </label>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/new-order-form/new-order-form.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */]) === "function" && _f || Object])
], NewOrderFormPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=new-order-form.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_customer_form_customer_form__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CustomerDetailsCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var CustomerDetailsCardComponent = (function () {
    function CustomerDetailsCardComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    CustomerDetailsCardComponent.prototype.presentModallyCustomerFormPage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__forms_customer_form_customer_form__["a" /* CustomerFormPage */], {
            customer: this.customer
        }).present();
    };
    return CustomerDetailsCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], CustomerDetailsCardComponent.prototype, "customer", void 0);
CustomerDetailsCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'customer-details-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/customer-details-card/customer-details-card.html"*/'<ion-card>\n  <ion-item color="secondBarColor">\n    <h2 style="color: white">Müşteri</h2>\n    <button (click)="presentModallyCustomerFormPage()" color="light" item-right outline icon-left ion-button>\n      <ion-icon ios="ios-create" md="md-create"></ion-icon>Düzenle\n    </button>\n  </ion-item>\n\n  <ion-card-content style="margin-top: 12px">\n    <ion-list>\n      <ion-item>\n        <ion-label>TC Kimlik No</ion-label>\n        <ion-label>{{ customer?.identificationNumber }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>İsim Soyisim</ion-label>\n        <ion-label>{{ customer?.name }}</ion-label>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item>\n        <ion-label>Telefon 1</ion-label>\n        <ion-label>{{ customer?.telephones[0] }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Telefon 2</ion-label>\n        <ion-label>{{ customer?.telephones[1] }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-label>{{ customer?.email }}</ion-label>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item>\n        <ion-label>Adres Satırı</ion-label>\n        <ion-label>{{ customer?.address?.line }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>İlçe / Şehir</ion-label>\n        <ion-label>{{ customer?.address?.district }} / {{ customer?.address?.city }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Adres Not</ion-label>\n        <ion-label>{{ customer?.address?.note }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/customer-details-card/customer-details-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], CustomerDetailsCardComponent);

//# sourceMappingURL=customer-details-card.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_order_details_form_order_details_form__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDetailsCardComponent = (function () {
    function OrderDetailsCardComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    OrderDetailsCardComponent.prototype.presentModallyOrderDetailsFormPage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__forms_order_details_form_order_details_form__["a" /* OrderDetailsFormPage */], {
            orderDetails: this.orderDetails
        }).present();
    };
    return OrderDetailsCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], OrderDetailsCardComponent.prototype, "orderDetails", void 0);
OrderDetailsCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'order-details-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/order-details-card/order-details-card.html"*/' <ion-card>\n          <ion-item color="secondBarColor">\n            <h2 style="color: white">Sipariş</h2>\n            <button color="light" (click)="presentModallyOrderDetailsFormPage()" outline icon-left item-right ion-button>\n                <ion-icon ios="ios-create" md="md-create"></ion-icon>Düzenle\n              </button>\n          </ion-item>\n\n          <ion-card-content style="margin-top: 12px">\n            <ion-list>\n              <ion-item>\n                <ion-label>Sipariş Tutarı</ion-label>\n                <ion-label>{{ orderDetails?.amount }} {{ orderDetails?.currency }}</ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Kalan Tutar</ion-label>\n                <ion-label><!-- TODO -->{{ orderDetails?.currency }}</ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Sipariş Tarihi</ion-label>\n                <ion-label>{{ orderDetails?.orderDate | formatDate }}</ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>İş Teslim Tarihi</ion-label>\n                <ion-label>{{ orderDetails?.deliveryDate | formatDate }}</ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Personel</ion-label>\n                <ion-label>{{ orderDetails?.personnel }}</ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Sipariş Not</ion-label>\n                <ion-label>{{ orderDetails?.note }}</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/order-details-card/order-details-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], OrderDetailsCardComponent);

//# sourceMappingURL=order-details-card.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsListCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_payment_form_payment_form__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PaymentsListCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var PaymentsListCardComponent = (function () {
    function PaymentsListCardComponent(modalCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        console.log('Hello PaymentsListCardComponent Component');
    }
    PaymentsListCardComponent.prototype.deletePayment = function (paymentId, index) {
        this.payments.splice(index, 1);
    };
    PaymentsListCardComponent.prototype.presentDeletionWarning = function (paymentId, index) {
        var _this = this;
        this.alertCtrl.create({
            title: "Ödeme Silinecek",
            subTitle: "Bu işlem geri alınmaz. Emin misiniz?",
            buttons: [
                {
                    text: "Hayır"
                },
                {
                    text: "Evet",
                    handler: function () { return _this.deletePayment(paymentId, index); }
                }
            ]
        }).present();
    };
    PaymentsListCardComponent.prototype.presentModallyProductFormPage = function (mode, payment) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__forms_payment_form_payment_form__["a" /* PaymentFormPage */], {
            mode: mode,
            payment: payment
        }).present();
    };
    return PaymentsListCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], PaymentsListCardComponent.prototype, "payments", void 0);
PaymentsListCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'payments-list-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/payments-list-card/payments-list-card.html"*/'<ion-card>\n  <ion-item color="secondBarColor">\n    <h2 style="color: white">Ödemeler</h2>\n    <button color="light" (click)="presentModallyProductFormPage(\'new\', -1)" outline icon-left item-right ion-button>\n              <ion-icon ios="ios-add" md="md-add"></ion-icon>Yeni\n            </button>\n  </ion-item>\n\n  <ion-card-content style="margin-top: 12px">\n    <ion-list>\n      <ion-item-sliding *ngFor="let payment of payments; let i = index">\n        <ion-item>\n          <div item-start>\n            <h1>{{ payment.amount }} {{ payment.currency }}</h1>\n          </div>\n\n          <div style="width: 75%;" item-end>\n            <h2>{{ payment.type == "Kredi Kartı" ? payment.installments + " Taksit | " + payment.bank : "" }}</h2>\n            <h3>{{ payment.personnel }} | {{ payment.date| formatDate }}</h3>\n            <p>{{ payment.note }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item-options>\n          <button (click)="presentModallyProductFormPage(\'edit\', payment)" ion-button>DÜZENLE</button>\n          <button (click)="presentDeletionWarning(payment._id, i)" color="danger" ion-button>SİL</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/payments-list-card/payments-list-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PaymentsListCardComponent);

//# sourceMappingURL=payments-list-card.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_product_form_product_form__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProductsListCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProductsListCardComponent = (function () {
    function ProductsListCardComponent(modalCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        console.log('Hello ProductsListCardComponent Component');
    }
    ProductsListCardComponent.prototype.deleteProduct = function (productId, index) {
        this.products.splice(index, 1);
    };
    ProductsListCardComponent.prototype.presentDeletionWarning = function (productId, index) {
        var _this = this;
        this.alertCtrl.create({
            title: "Ürün silinecek",
            subTitle: "Bu işlem geri alınmaz. Emin misiniz?",
            buttons: [
                {
                    text: "Hayır",
                    handler: function () { return console.log("Ürün silmeden vazgeçildi."); }
                },
                {
                    text: "Evet",
                    handler: function () { return _this.deleteProduct(productId, index); }
                }
            ]
        }).present();
    };
    ProductsListCardComponent.prototype.presentModallyProductFormPage = function (mode, product) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__forms_product_form_product_form__["a" /* ProductFormPage */], {
            mode: mode,
            product: product
        }).present();
    };
    return ProductsListCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ProductsListCardComponent.prototype, "products", void 0);
ProductsListCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'products-list-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/products-list-card/products-list-card.html"*/'<ion-card>\n  <ion-item color="secondBarColor">\n    <h2 style="color: white">Ürünler</h2>\n    <button color="light" (click)="presentModallyProductFormPage(\'new\', undefined)" outline icon-left item-right ion-button>\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>Yeni\n    </button>\n  </ion-item>\n\n  <ion-card-content style="margin-top: 12px">\n    <ion-list>\n      <ion-item>\n        <ion-label>Desen/Renk</ion-label>\n        <ion-label>Cins</ion-label>\n        <ion-label>Miktar</ion-label>\n        <ion-label>Birim Fiyat</ion-label>\n        <ion-label>Tutar</ion-label>\n      </ion-item>\n\n      <ion-item-sliding *ngFor="let product of products; let i = index">\n        <ion-item>\n          <ion-label>{{ product.patternCode }}/{{ product.colorCode }}</ion-label>\n          <ion-label>{{ product.varietyCode }}</ion-label>\n          <ion-label>{{ product.quantity }}</ion-label>\n          <ion-label>{{ product.unitPrice }}</ion-label>\n          <ion-label>{{product.unitPrice * product.quantity }}</ion-label>\n        </ion-item>\n\n        <ion-item-options>\n          <button (click)="presentModallyProductFormPage(\'edit\', product)" ion-button>Düzenle</button>\n          <button (click)="presentDeletionWarning(product._id, i)" color="danger" ion-button>Sil</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/products-list-card/products-list-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProductsListCardComponent);

//# sourceMappingURL=products-list-card.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FormatDatePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var FormatDatePipe = (function () {
    function FormatDatePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FormatDatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value;
    };
    return FormatDatePipe;
}());
FormatDatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'formatDate',
    })
], FormatDatePipe);

//# sourceMappingURL=format-date.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProductFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProductFormPage = (function () {
    function ProductFormPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.mode = this.navParams.get('mode');
        if (this.mode == 'edit') {
            this.product = this.navParams.get('product');
        }
        else {
            this.product = {
                type: "Perde",
                patternCode: "",
                colorCode: "",
                varietyCode: "",
                unitPrice: null,
                quantity: null
            };
        }
    }
    ProductFormPage.prototype.showSubmitAlert = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Ürün Kaydedilecek',
            subTitle: this.mode == 'edit' ? 'Bu değişiklikler geri alınamaz. Emin misiniz?' : '',
            buttons: [
                {
                    text: "Hayır"
                },
                {
                    text: "Evet",
                    handler: function () {
                        if (_this.mode == 'edit') {
                            _this.saveChanges();
                        }
                        else {
                            _this.appendToTheOrder();
                        }
                    }
                }
            ]
        }).present();
    };
    ProductFormPage.prototype.appendToTheOrder = function () {
    };
    ProductFormPage.prototype.saveChanges = function () {
    };
    return ProductFormPage;
}());
ProductFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/product-form/product-form.html"*/'<ion-header>\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>{{ mode == \'new\' ? \'Yeni Ürün\' : \'Ürünü Düzenle\' }}</ion-title>\n    \n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Desen Kodu</ion-label>\n        <ion-input name="patternCode" [(ngModel)]="product.patternCode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Renk Kodu</ion-label>\n        <ion-input name="colorCode" [(ngModel)]="product.colorCode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Cins</ion-label>\n        <ion-input name="varietyCode" [(ngModel)]="product.varietyCode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Birim Fiyat</ion-label>\n        <ion-input type="number" name="unitPrice" [(ngModel)]="product.unitPrice"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Miktar</ion-label>\n        <ion-input type="number" name="unitPrice" [(ngModel)]="product.unitPrice"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Tutar</ion-label>\n        <ion-input [disabled]="true" [value]="product.quantity * product.unitPrice + \' TRY\'"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/product-form/product-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProductFormPage);

//# sourceMappingURL=product-form.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaymentFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentFormPage = (function () {
    function PaymentFormPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.mode = this.navParams.get('mode');
        if (this.mode == 'edit') {
            this.payment = this.navParams.get('payment');
        }
        else {
            this.payment = {
                type: "Nakit",
                amount: null,
                currency: "TRY",
                installments: null,
                bank: "",
                note: ""
            };
        }
    }
    PaymentFormPage.prototype.showSubmitAlert = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Ödeme Kaydedilecek',
            subTitle: this.mode == 'edit' ? 'Bu değişiklikler geri alınamaz. Emin misiniz?' : '',
            buttons: [
                {
                    text: "Hayır"
                },
                {
                    text: "Evet",
                    handler: function () {
                        if (_this.mode == 'edit') {
                            _this.saveChanges();
                        }
                        else {
                            _this.appendToTheOrder();
                        }
                    }
                }
            ]
        }).present();
    };
    PaymentFormPage.prototype.appendToTheOrder = function () {
    };
    PaymentFormPage.prototype.saveChanges = function () {
    };
    return PaymentFormPage;
}());
PaymentFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/payment-form/payment-form.html"*/'<!--\n  Generated template for the PaymentFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>{{ mode == \'new\' ? \'Yeni Ödeme Formu\' : \'Ödeme Düzenleme Formu\' }}</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label>Ödeme Türü</ion-label>\n        <ion-select name="type" [(ngModel)]="payment.type">\n          <ion-option *ngFor="let type of paymentTypes">{{ type }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Tutar</ion-label>\n        <ion-input\n          type="number"\n          name="amount"\n          [(ngModel)]="payment.amount"\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Para Birimi</ion-label>\n        <ion-select name="currency" [(ngModel)]="payment.currency">\n          <ion-option *ngFor="let currency of currencies">{{ currency }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="payment.type == \'Kredi Kartı\'">\n        <ion-label fixed>Taksit Sayısı</ion-label>\n        <ion-input\n          type="number"\n          name="amount"\n          [(ngModel)]="payment.amount"\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="payment.type == \'Kredi Kartı\'">\n        <ion-label>Banka</ion-label>\n        <ion-select name="bank" [(ngModel)]="payment.bank">\n          <ion-option *ngFor="let bank of banks">{{ bank }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Not</ion-label>\n        <ion-textarea\n          name="note"\n          [(ngModel)]="payment.note"\n        >\n        </ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/payment-form/payment-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PaymentFormPage);

//# sourceMappingURL=payment-form.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CustomerFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerFormPage = (function () {
    function CustomerFormPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.customer = this.navParams.get('customer');
        if (!this.customer) {
            this.navCtrl.pop();
        }
    }
    CustomerFormPage.prototype.showSubmitAlert = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Değişiklikler Kaydedilecek',
            subTitle: 'Bu değişiklikler geri alınamaz. Emin misiniz?',
            buttons: [
                {
                    text: "Hayır"
                },
                {
                    text: "Evet",
                    handler: function () {
                        _this.saveChanges();
                    }
                }
            ]
        }).present();
    };
    CustomerFormPage.prototype.saveChanges = function () {
    };
    return CustomerFormPage;
}());
CustomerFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/customer-form/customer-form.html"*/'<!--\n  Generated template for the CustomerFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>Müşteri Bilgileri Düzenleme Formu</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label>TC Kimlik</ion-label>\n        <ion-input type="number" name="identificationNumber" [(ngModel)]="customer.identificationNumber"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>İsim</ion-label>\n        <ion-input name="name" [(ngModel)]="customer.name"></ion-input>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n      \n      <ion-item>\n        <ion-label>Telefon 1</ion-label>\n        <ion-input name="telephone1" [(ngModel)]="customer.telephones[0]"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Telefon 2</ion-label>\n        <ion-input name="telephone2" [(ngModel)]="customer.telephones[1]"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input name="email" [(ngModel)]="customer.email"></ion-input>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n      \n      <ion-item>\n        <ion-label>Adres Satırı</ion-label>\n        <ion-textarea name="addressLine" [(ngModel)]="customer.address.line"></ion-textarea>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>Şehir</ion-label>\n        <ion-input name="addressCity" [(ngModel)]="customer.address.city"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>İlçe</ion-label>\n        <ion-input name="addressDistrict" [(ngModel)]="customer.address.district"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Adres Not</ion-label>\n        <ion-input name="addressNote" [(ngModel)]="customer.address.note"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/customer-form/customer-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CustomerFormPage);

//# sourceMappingURL=customer-form.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderInformationFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderDetailsFormPage = (function () {
    function OrderDetailsFormPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.orderDetails = this.navParams.get('orderDetails');
        if (!this.orderDetails) {
            this.navCtrl.pop();
        }
    }
    OrderDetailsFormPage.prototype.showSubmitAlert = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Değişiklikler Kaydedilecek',
            subTitle: 'Bu değişiklikler geri alınamaz. Emin misiniz?',
            buttons: [
                {
                    text: "Hayır"
                },
                {
                    text: "Evet",
                    handler: function () {
                        _this.saveChanges();
                    }
                }
            ]
        }).present();
    };
    OrderDetailsFormPage.prototype.saveChanges = function () {
    };
    return OrderDetailsFormPage;
}());
OrderDetailsFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-details-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/order-details-form/order-details-form.html"*/'<!--\n  Generated template for the OrderInformationFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>Sipariş Detayları Düzenleme Formu</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label>Sipariş Tarihi</ion-label>\n        <ion-datetime name="orderDate" [(ngModel)]="orderDetails.orderDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>İş Teslim Tarihi</ion-label>\n        <ion-datetime name="deliveryDate" [(ngModel)]="orderDetails.deliveryDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Tutar</ion-label>\n        <ion-input type="number" name="amount" [(ngModel)]="orderDetails.amount">\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Para Birimi</ion-label>\n        <ion-select name="currency" [(ngModel)]="orderDetails.currency">\n          <ion-option *ngFor="let currency of currencies">{{ currency }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Personel</ion-label>\n        <ion-select name="personnel" [(ngModel)]="orderDetails.personnel">\n          <ion-option *ngFor="let personnel of personnels">{{ personnel }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Not</ion-label>\n        <ion-textarea name="note" [(ngModel)]="orderDetails.note"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/order-details-form/order-details-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], OrderDetailsFormPage);

//# sourceMappingURL=order-details-form.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details_order_details__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OrdersListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrdersListPage = (function () {
    function OrdersListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orders = [];
    }
    OrdersListPage.prototype.showOrdersDetails = function (orderId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_details_order_details__["a" /* OrderDetailsPage */], {
            orderId: orderId
        });
    };
    return OrdersListPage;
}());
OrdersListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orders-list',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/orders-list/orders-list.html"*/'<!--\n  Generated template for the OrdersListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Siparişler</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="navBarColor">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-toolbar color="navBarColor">\n    <ion-item color="navBarColor">\n      <ion-label>Müşteri</ion-label>\n      <ion-label>Sipariş Tarihi</ion-label>\n      <ion-label>İş Teslim Tarihi</ion-label>\n      <ion-label>Personel</ion-label>\n      <ion-label>Sipariş Tutarı</ion-label>\n      <ion-label>Kalan tutar</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let order of orders">\n      <ion-item (click)="showOrdersDetails(order._id)">\n        <ion-label>{{ order.customer.name }}</ion-label>\n        <ion-label>{{ order.orderDetails.orderDate }}</ion-label>\n        <ion-label>{{ order.orderDetails.deliveryDate }}</ion-label>\n        <ion-label>{{ order.orderDetails.personnel }}</ion-label>\n        <ion-label>{{ order.orderDetails.amount }} {{ order.orderDetails.currency }}</ion-label>\n        <ion-label>TODO</ion-label>\n      </ion-item>\n\n      <ion-item-options>\n        <button color="danger" ion-button>Sil</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/orders-list/orders-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], OrdersListPage);

//# sourceMappingURL=orders-list.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MongoDbServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MongoDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MongoDbServiceProvider = (function () {
    function MongoDbServiceProvider(http) {
        this.http = http;
        this.ref = "http://localhost:5000"; // "https://quiet-chamber-99549.herokuapp.com";
        console.log('Hello MongoDbServiceProvider Provider');
    }
    MongoDbServiceProvider.prototype.insertNewOrder = function (order) {
        return this.http.post(this.ref + "/orders/new", order);
    };
    MongoDbServiceProvider.prototype.insertPayment = function (orderId, paymentInformation) {
        var url = this.ref + "/orders/" + orderId + "/payments/new";
        return this.http.post(url, paymentInformation);
    };
    MongoDbServiceProvider.prototype.insertProduct = function (orderId, product) {
        var url = this.ref + "/orders/" + orderId + "/products/new";
        return this.http.post(url, product);
    };
    MongoDbServiceProvider.prototype.updatePayment = function (paymentId, newValue) {
        var url = this.ref + "/payments/" + paymentId;
        return this.http.put(url, newValue);
    };
    MongoDbServiceProvider.prototype.updateProduct = function (productId, newValue) {
        var url = this.ref + "/products/" + productId;
        return this.http.put(url, newValue);
    };
    MongoDbServiceProvider.prototype.updateCustomerInformation = function (customerId, newValue) {
        var url = this.ref + "/customers/" + customerId;
        return this.http.put(url, newValue);
    };
    MongoDbServiceProvider.prototype.updateOrderInformation = function (orderId, newValue) {
        var url = this.ref + "/orders/" + orderId;
        return this.http.put(url, newValue);
    };
    MongoDbServiceProvider.prototype.deleteOrder = function (id) {
        var url = this.ref + "/orders/" + id;
        return this.http.delete(url);
    };
    MongoDbServiceProvider.prototype.deletePayment = function (paymentId) {
        var url = this.ref + "/payments/" + paymentId;
        return this.http.delete(url);
    };
    MongoDbServiceProvider.prototype.deleteProduct = function (productId) {
        var url = this.ref + "/products/" + productId;
        return this.http.delete(url);
    };
    MongoDbServiceProvider.prototype.getOrdersList = function (customerName, lastOrderKey, limit) {
        if (limit === void 0) { limit = 10; }
        var url = this.ref + "/orders?limit=" + limit;
        if (customerName) {
            url = url + "&customerName=" + customerName;
        }
        if (lastOrderKey) {
            url = url + "&lastOrderKey=" + lastOrderKey;
        }
        console.log("GET ORDER URL : " + url);
        return this.http.get(url);
    };
    MongoDbServiceProvider.prototype.getOrderDetails = function (orderId) {
        var url = this.ref + "/orders/" + orderId;
        return this.http.get(url);
    };
    MongoDbServiceProvider.prototype.getEvents = function () {
        var url = this.ref + "/logs";
        return this.http.get(url);
    };
    MongoDbServiceProvider.prototype.logEvent = function (title, detail, personnel, date) {
        var url = this.ref + "/logs";
        this.http.post(url, {
            title: title,
            detail: detail,
            personnel: personnel,
            date: date
        }).subscribe(function (result) {
            console.log(result);
        });
    };
    return MongoDbServiceProvider;
}());
MongoDbServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MongoDbServiceProvider);

var _a;
//# sourceMappingURL=mongo-db-service.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map