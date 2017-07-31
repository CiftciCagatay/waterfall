webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
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
    function OrderDetailsPage(navCtrl, navParams, mdbs, loadingCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mdbs = mdbs;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.order = {
            _id: "",
            customer: null,
            orderDetails: null,
            payments: null,
            products: null
        };
        this.events.subscribe("customer:updated", function (data) { return _this.order.customer = data; });
        this.events.subscribe("orderDetails:updated", function (data) { return _this.order.orderDetails = data; });
        this.events.subscribe("payment:added", function (data) { return _this.order.payments.push(data); });
        this.events.subscribe("payment:updated", function (data) {
            _this.order.payments[data.index] = data.payment;
        });
        this.events.subscribe("product:added", function (data) { return _this.order.products.push(data); });
        this.events.subscribe("product:updated", function (data) {
            _this.order.products[data.index] = data.product;
        });
        this.order._id = this.navParams.get('orderId');
        if (!this.order._id) {
            this.navCtrl.pop();
        }
        var loading = this.loadingCtrl.create({ content: "Sipariş Detayları yükleniyor..." });
        loading.present();
        this.mdbs.getOrderDetails(this.order._id).subscribe(function (response) {
            _this.order = response.json();
            console.log(response.json());
            console.log(_this.order._id, "gaha");
            loading.dismiss();
        });
    }
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailsPage');
    };
    return OrderDetailsPage;
}());
OrderDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-details',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/order-details.html"*/'<!--\n  Generated template for the OrderDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title>Sipariş Detayları</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <customer-details-card [customer]="order.customer"></customer-details-card>\n      </ion-col>\n\n      <ion-col>\n        <order-details-card [orderId]="order._id" [orderDetails]="order.orderDetails"></order-details-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <payments-list-card [orderId]="order._id" [payments]="order.payments"></payments-list-card>\n      </ion-col>\n\n      <ion-col>\n        <products-list-card [orderId]="order._id" [products]="order.products"></products-list-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/order-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], OrderDetailsPage);

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		278,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 153;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MongoDbServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(101);
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



var MongoDbServiceProvider = (function () {
    function MongoDbServiceProvider(http) {
        this.http = http;
        this.ref = "http://localhost:5000";
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MongoDbServiceProvider);

//# sourceMappingURL=mongo-db-service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(280);
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
    function HomePage(navCtrl, mdbs, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.mdbs = mdbs;
        this.auth = auth;
        this.events = [];
        this.mdbs.getEvents().subscribe(function (data) { return _this.events = data.json(); });
        console.log(this.auth.getUser());
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let event of events">\n      <ion-icon name="leaf" item-start></ion-icon>\n\n      <h1>{{ event.title }}</h1>\n      <h2>{{ event.date | formatDate }} | {{ event.personnel }}</h2>\n      <p>{{ event.detail }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewOrderFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_bank_currency_bank__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewOrderFormPage = (function () {
    function NewOrderFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, mdbs, currencyBankProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mdbs = mdbs;
        this.currencyBankProvider = currencyBankProvider;
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
                deliveryDate: (new Date()).toISOString(),
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
                    bank: "",
                    date: new Date()
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
            _this.mdbs.logEvent("Yeni Sipariş", _this.order.orderDetails.personnel + " taraf\u0131ndan " + _this.order.orderDetails.amount + " " + _this.order.orderDetails.currency + " tutar\u0131nda sipari\u015F al\u0131nd\u0131", _this.order.orderDetails.personnel, _this.order.orderDetails.orderDate);
            if (_this.order.payments[0].amount) {
                _this.mdbs.logEvent("Yeni Ödeme", _this.order.orderDetails.personnel + " taraf\u0131ndan " + _this.order.payments[0].amount + " " + _this.order.payments[0].currency + " tutar\u0131nda \u00F6deme al\u0131nd\u0131", _this.order.orderDetails.personnel, _this.order.orderDetails.orderDate);
            }
            loading.dismiss();
            _this.showOrderSavedToast();
        });
    };
    NewOrderFormPage.prototype.showOrderSavedToast = function () {
        var _this = this;
        this.alertCtrl.create({
            title: "Sipariş başarıyla kaydedildi",
            message: "Detaylara gitmek ister misiniz?",
            buttons: [
                {
                    text: "Hayır"
                },
                {
                    text: "Evet",
                    handler: function () { return _this.goToOrderDetailsPage(); }
                }
            ]
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
        selector: 'page-new-order-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/new-order-form/new-order-form.html"*/'<!--\n  Generated template for the NewOrderFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Yeni Sipariş Formu</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSavingAlert()" [disabled]="!siparisForm.form.valid" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #siparisForm="ngForm">\n    <ion-grid>\n      <ion-row>\n        <!-- Müşteri -->\n        <ion-col>\n          <ion-card>\n            <ion-card-header>Müşteri</ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <label ion-item>\n                  <ion-label fixed>*TC Kimlik</ion-label>\n                  <ion-input name="identificationNumber" maxLength="11" [(ngModel)]="order.customer.identificationNumber" type="tel"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>*İsim</ion-label>\n                  <ion-input name="name" [(ngModel)]="order.customer.name"></ion-input>\n                </label>\n\n                <ion-item-divider></ion-item-divider>\n\n                <label ion-item>\n                  <ion-label fixed>Telefon 1</ion-label>\n                  <ion-input name="telephone1" [(ngModel)]="order.customer.telephones[0]"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Telefon 2</ion-label>\n                  <ion-input name="telephone2" [(ngModel)]="order.customer.telephones[1]"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Email</ion-label>\n                  <ion-input name="email" [(ngModel)]="order.customer.email"></ion-input>\n                </label>\n\n                <ion-item-divider></ion-item-divider>\n\n                <label ion-item>\n                  <ion-label fixed>Adres Satırı</ion-label>\n                  <ion-textarea name="addressLine" [(ngModel)]="order.customer.address.line"></ion-textarea>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Şehir</ion-label>\n                  <ion-input name="addressCity" [(ngModel)]="order.customer.address.city"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>İlçe</ion-label>\n                  <ion-input name="addressDistrict" [(ngModel)]="order.customer.address.district"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Adres Not</ion-label>\n                  <ion-textarea name="addressNote" [(ngModel)]="order.customer.address.note"></ion-textarea>\n                </label>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <!-- Sipariş ve Kapora -->\n        <ion-col>\n          <!-- Sipariş -->\n          <ion-card>\n            <ion-card-header>Sipariş</ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <label ion-item>\n                  <ion-label>İş Teslim Tarihi</ion-label>\n                  <ion-datetime name="deliveryDate" [(ngModel)]="order.orderDetails.deliveryDate"></ion-datetime>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Sipariş Tutarı</ion-label>\n                  <ion-input name="orderAmount" [(ngModel)]="order.orderDetails.amount" type="number"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label>Para Birimi</ion-label>\n                  <ion-select name="orderCurrency" [(ngModel)]="order.orderDetails.currency">\n                    <ion-option *ngFor="let currency of currencyBankProvider.currencies">{{ currency }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Sipariş Not</ion-label>\n                  <ion-textarea name="orderNote" [(ngModel)]="order.orderDetails.note"></ion-textarea>\n                </label>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n\n          <!-- Kapora -->\n          <ion-card>\n            <ion-card-header>Kapora</ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <label ion-item>\n                  <ion-label>Ödeme Türü</ion-label>\n                  <ion-select name="paymentType" [(ngModel)]="order.payments[0].type">\n                    <ion-option *ngFor="let paymentType of currencyBankProvider.paymentTypes">{{ paymentType }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Tutar</ion-label>\n                  <ion-input name="paymentAmount" [(ngModel)]="order.payments[0].amount" type="number"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label>Para Birimi</ion-label>\n                  <ion-select name="paymentCurrency" [(ngModel)]="order.payments[0].currency">\n                    <ion-option *ngFor="let currency of currencyBankProvider.currencies">{{ currency }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label *ngIf="order.payments[0].type == \'Kredi Kartı\'" ion-item>\n                  <ion-label fixed>Taksit Sayısı</ion-label>\n                  <ion-input name="installments" [(ngModel)]="order.payments[0].installments" type="number"></ion-input>\n                </label>\n\n                <label *ngIf="order.payments[0].type == \'Kredi Kartı\'" ion-item>\n                  <ion-label>Banka</ion-label>\n                  <ion-select name="paymentBank" [(ngModel)]="order.payments[0].bank">\n                    <ion-option *ngFor="let bank of currencyBankProvider.banks">{{ bank }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Ödeme Not</ion-label>\n                  <ion-textarea name="paymentNote" [(ngModel)]="order.payments[0].note"></ion-textarea>\n                </label>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/new-order-form/new-order-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_currency_bank_currency_bank__["a" /* CurrencyBankProvider */]])
], NewOrderFormPage);

//# sourceMappingURL=new-order-form.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details_order_details__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
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
    function OrdersListPage(navCtrl, loadingCtrl, navParams, mdbs, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.mdbs = mdbs;
        this.alertCtrl = alertCtrl;
        this.orders = [];
        this.searchbarText = "";
        this.lastOrderKey = "";
        var loading = this.loadingCtrl.create({ content: "Siparişler yükleniyor..." });
        loading.present();
        this.getOrders().then(function () {
            loading.dismiss();
        });
    }
    OrdersListPage.prototype.deleteOrder = function (orderId, index) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Sipariş siliniyor..." });
        loading.present();
        this.mdbs.deleteOrder(orderId).subscribe(function (response) {
            _this.orders.splice(index, 1);
            loading.dismiss();
        });
    };
    OrdersListPage.prototype.presentDeletionWarning = function (orderId, index) {
        var _this = this;
        this.alertCtrl.create({
            title: "Sipariş silinecek",
            subTitle: "Bu işlem geri alınmaz. Emin misiniz?",
            buttons: [
                {
                    text: "Hayır",
                    handler: function () { return console.log("Sipariş silmeden vazgeçildi."); }
                },
                {
                    text: "Evet",
                    handler: function () { return _this.deleteOrder(orderId, index); }
                }
            ]
        }).present();
    };
    OrdersListPage.prototype.getOrders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mdbs.getOrdersList(_this.searchbarText, _this.lastOrderKey, 20).subscribe(function (response) {
                _this.orders = response.json();
                resolve();
            });
        });
    };
    OrdersListPage.prototype.showOrdersDetails = function (orderId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_details_order_details__["a" /* OrderDetailsPage */], {
            orderId: orderId
        });
    };
    return OrdersListPage;
}());
OrdersListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orders-list',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/orders-list/orders-list.html"*/'<!--\n  Generated template for the OrdersListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Siparişler</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="navBarColor">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-toolbar color="navBarColor">\n    <ion-item color="navBarColor">\n      <ion-label>Müşteri</ion-label>\n      <!--\n        <ion-label>Sipariş Tarihi</ion-label>\n        <ion-label>İş Teslim Tarihi</ion-label>\n        <ion-label>Personel</ion-label>\n      -->\n      <ion-label>Sipariş Tutarı</ion-label>\n      <ion-label>Kalan tutar</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let order of orders; let i = index">\n      <ion-item (click)="showOrdersDetails(order._id)">\n        <ion-label>{{ order.customer.name }}</ion-label>\n        <!-- \n          <ion-label>{{ order.orderDetails.orderDate }}</ion-label>\n          <ion-label>{{ order.orderDetails.deliveryDate }}</ion-label>\n          <ion-label>{{ order.orderDetails.personnel }}</ion-label>\n        -->\n        <ion-label>{{ order.orderDetails.amount }} {{ order.orderDetails.currency }}</ion-label>\n        <ion-label>TODO</ion-label>\n      </ion-item>\n\n      <ion-item-options>\n        <button color="danger" (click)="presentDeletionWarning(order._id, i)" ion-button>Sil</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/orders-list/orders-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], OrdersListPage);

//# sourceMappingURL=orders-list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_types_product_types__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductFormPage = (function () {
    function ProductFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, mdbs, productTypesProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mdbs = mdbs;
        this.productTypesProvider = productTypesProvider;
        this.events = events;
        this.mode = this.navParams.get('mode');
        this.productIndex = this.navParams.get('productIndex');
        this.orderId = this.navParams.get('orderId');
        if (this.mode == 'edit') {
            this.product = JSON.parse(JSON.stringify(this.navParams.get('product')));
        }
        else if (this.orderId) {
            this.product = {
                type: "Perde",
                patternCode: "",
                colorCode: "",
                varietyCode: "",
                unitPrice: null,
                quantity: null
            };
        }
        else {
            this.navCtrl.pop();
        }
        console.log(this.product);
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
    ProductFormPage.prototype.saveChanges = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Yeni ürün ekleniyor..." });
        loading.present();
        this.mdbs.updateProduct(this.product._id, this.product).subscribe(function (response) {
            _this.events.publish("product:updated", {
                index: _this.productIndex,
                product: _this.product
            });
            loading.dismiss().then(function () { return _this.navCtrl.pop(); });
        });
    };
    ProductFormPage.prototype.appendToTheOrder = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });
        loading.present();
        this.mdbs.insertProduct(this.orderId, this.product).subscribe(function (response) {
            _this.events.publish("product:added", _this.product);
            loading.dismiss().then(function () { return _this.navCtrl.pop(); });
        });
    };
    return ProductFormPage;
}());
ProductFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/product-form/product-form.html"*/'<ion-header>\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>{{ mode == \'new\' ? \'Yeni Ürün\' : \'Ürünü Düzenle\' }}</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label>Ürün Kategori</ion-label>\n        <ion-select name="productType" [(ngModel)]="product.type">\n          <ion-option *ngFor="let type of productTypesProvider.types">{{ type }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Desen Kodu</ion-label>\n        <ion-input name="patternCode" [(ngModel)]="product.patternCode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Renk Kodu</ion-label>\n        <ion-input name="colorCode" [(ngModel)]="product.colorCode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Cins</ion-label>\n        <ion-input name="varietyCode" [(ngModel)]="product.varietyCode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Birim Fiyat</ion-label>\n        <ion-input type="number" name="unitPrice" [(ngModel)]="product.unitPrice"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Miktar</ion-label>\n        <ion-input type="number" name="unitPrice" [(ngModel)]="product.quantity"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Tutar</ion-label>\n        <ion-input [disabled]="true" [value]="product.quantity * product.unitPrice + \' TRY\'"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/product-form/product-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_product_types_product_types__["a" /* ProductTypesProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], ProductFormPage);

//# sourceMappingURL=product-form.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(101);
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
  Generated class for the ProductTypesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ProductTypesProvider = (function () {
    function ProductTypesProvider(http) {
        this.http = http;
        this.types = [
            "Perde"
        ];
        console.log('Hello ProductTypesProvider Provider');
    }
    return ProductTypesProvider;
}());
ProductTypesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ProductTypesProvider);

//# sourceMappingURL=product-types.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_bank_currency_bank__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentFormPage = (function () {
    function PaymentFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, mdbs, currencyBankProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mdbs = mdbs;
        this.currencyBankProvider = currencyBankProvider;
        this.events = events;
        this.mode = this.navParams.get('mode');
        this.orderId = this.navParams.get('orderId');
        this.paymentIndex = this.navParams.get('paymentIndex');
        console.log(this.orderId);
        if (this.mode == 'edit') {
            this.paymentId = this.navParams.get('payment')._id;
            this.payment = {
                type: this.navParams.get('payment').type,
                amount: this.navParams.get('payment').amount,
                currency: this.navParams.get('payment').currency,
                installments: this.navParams.get('payment').installments,
                bank: this.navParams.get('payment').bank,
                note: this.navParams.get('payment').note
            };
        }
        else if (this.orderId) {
            this.payment = {
                type: "Nakit",
                amount: null,
                date: new Date(),
                currency: "TRY",
                installments: null,
                personnel: "",
                bank: "",
                note: ""
            };
        }
        else {
            this.navCtrl.pop();
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
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Yeni ödeme ekleniyor..." });
        loading.present();
        this.mdbs.insertPayment(this.orderId, this.payment).subscribe(function (response) {
            _this.events.publish("payment:added", _this.payment);
            if (_this.payment.amount) {
                _this.mdbs.logEvent("Yeni Ödeme", _this.payment.personnel + " taraf\u0131ndan " + _this.payment.amount + " " + _this.payment.currency + " tutar\u0131nda \u00F6deme al\u0131nd\u0131", _this.payment.personnel, _this.payment.date);
            }
            loading.dismiss();
            _this.navCtrl.pop();
        });
    };
    PaymentFormPage.prototype.saveChanges = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });
        loading.present();
        this.mdbs.updatePayment(this.paymentId, this.payment).subscribe(function (response) {
            _this.events.publish("payment:updated", {
                index: _this.paymentIndex,
                payment: _this.payment
            });
            loading.dismiss();
            _this.navCtrl.pop();
        });
    };
    return PaymentFormPage;
}());
PaymentFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/payment-form/payment-form.html"*/'<!--\n  Generated template for the PaymentFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>{{ mode == \'new\' ? \'Yeni Ödeme Formu\' : \'Ödeme Düzenleme Formu\' }}</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form *ngIf="payment">\n    <ion-list>\n      <ion-item>\n        <ion-label>Ödeme Türü</ion-label>\n        <ion-select name="type" [(ngModel)]="payment.type">\n          <ion-option *ngFor="let type of currencyBankProvider.paymentTypes">{{ type }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Tutar</ion-label>\n        <ion-input\n          type="number"\n          name="amount"\n          [(ngModel)]="payment.amount"\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Para Birimi</ion-label>\n        <ion-select name="currency" [(ngModel)]="payment.currency">\n          <ion-option *ngFor="let currency of currencyBankProvider.currencies">{{ currency }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="payment.type == \'Kredi Kartı\'">\n        <ion-label fixed>Taksit Sayısı</ion-label>\n        <ion-input\n          type="number"\n          name="amount"\n          [(ngModel)]="payment.installments"\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="payment.type == \'Kredi Kartı\'">\n        <ion-label>Banka</ion-label>\n        <ion-select name="bank" [(ngModel)]="payment.bank">\n          <ion-option *ngFor="let bank of currencyBankProvider.banks">{{ bank }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Not</ion-label>\n        <ion-textarea\n          name="note"\n          [(ngModel)]="payment.note"\n        >\n        </ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/payment-form/payment-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_currency_bank_currency_bank__["a" /* CurrencyBankProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], PaymentFormPage);

//# sourceMappingURL=payment-form.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_bank_currency_bank__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetailsFormPage = (function () {
    function OrderDetailsFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, mdbs, currencyBankProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mdbs = mdbs;
        this.currencyBankProvider = currencyBankProvider;
        this.events = events;
        this.orderId = this.navParams.get('orderId');
        this.orderDetails = {
            orderDate: this.navParams.get('orderDetails').orderDate,
            deliveryDate: this.navParams.get('orderDetails').deliveryDate,
            personnel: this.navParams.get('orderDetails').personnel,
            amount: this.navParams.get('orderDetails').amount,
            currency: this.navParams.get('orderDetails').currency,
            note: this.navParams.get('orderDetails').note
        };
        if (!this.orderDetails || !this.orderId) {
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
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });
        loading.present();
        this.mdbs.updateOrderInformation(this.orderId, this.orderDetails).subscribe(function (response) {
            loading.dismiss().then(function () { return _this.navCtrl.pop(); });
            _this.events.publish("orderDetails:updated", _this.orderDetails);
        });
    };
    return OrderDetailsFormPage;
}());
OrderDetailsFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-details-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/order-details-form/order-details-form.html"*/'<!--\n  Generated template for the OrderInformationFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>Sipariş Detayları Düzenleme Formu</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label>Sipariş Tarihi</ion-label>\n        <ion-datetime name="orderDate" [(ngModel)]="orderDetails.orderDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>İş Teslim Tarihi</ion-label>\n        <ion-datetime name="deliveryDate" [(ngModel)]="orderDetails.deliveryDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Tutar</ion-label>\n        <ion-input type="number" name="amount" [(ngModel)]="orderDetails.amount">\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Para Birimi</ion-label>\n        <ion-select name="currency" [(ngModel)]="orderDetails.currency">\n          <ion-option *ngFor="let currency of currencyBankProvider.currencies">{{ currency }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Personel</ion-label>\n        <ion-select name="personnel" [(ngModel)]="orderDetails.personnel">\n          <ion-option *ngFor="let personnel of personnels">{{ personnel }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Not</ion-label>\n        <ion-textarea name="note" [(ngModel)]="orderDetails.note"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/order-details-form/order-details-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_currency_bank_currency_bank__["a" /* CurrencyBankProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], OrderDetailsFormPage);

//# sourceMappingURL=order-details-form.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerFormPage = (function () {
    function CustomerFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, mdbs, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mdbs = mdbs;
        this.events = events;
        this.customer = JSON.parse(JSON.stringify(this.navParams.get('customer')));
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
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });
        loading.present();
        this.mdbs.updateCustomerInformation(this.customer._id, this.customer).subscribe(function (response) {
            loading.dismiss().then(function () { return _this.navCtrl.pop(); });
            _this.events.publish("customer:updated", _this.customer);
        });
    };
    return CustomerFormPage;
}());
CustomerFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/customer-form/customer-form.html"*/'<!--\n  Generated template for the CustomerFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>Müşteri Bilgileri Düzenleme Formu</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label>TC Kimlik</ion-label>\n        <ion-input type="tel" maxLength="11" name="identificationNumber" [(ngModel)]="customer.identificationNumber"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>İsim</ion-label>\n        <ion-input name="name" [(ngModel)]="customer.name"></ion-input>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n      \n      <ion-item>\n        <ion-label>Telefon 1</ion-label>\n        <ion-input name="telephone1" [(ngModel)]="customer.telephones[0]"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Telefon 2</ion-label>\n        <ion-input name="telephone2" [(ngModel)]="customer.telephones[1]"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input name="email" [(ngModel)]="customer.email"></ion-input>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n      \n      <ion-item>\n        <ion-label>Adres Satırı</ion-label>\n        <ion-textarea name="addressLine" [(ngModel)]="customer.address.line"></ion-textarea>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>Şehir</ion-label>\n        <ion-input name="addressCity" [(ngModel)]="customer.address.city"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>İlçe</ion-label>\n        <ion-input name="addressDistrict" [(ngModel)]="customer.address.district"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Adres Not</ion-label>\n        <ion-input name="addressNote" [(ngModel)]="customer.address.note"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/forms/customer-form/customer-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], CustomerFormPage);

//# sourceMappingURL=customer-form.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_new_order_form_new_order_form__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_order_details_order_details__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_order_details_components_panels_products_list_card_products_list_card__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_order_details_components_panels_payments_list_card_payments_list_card__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_order_details_components_panels_order_details_card_order_details_card__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_details_components_panels_customer_details_card_customer_details_card__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_format_date_format_date__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_order_details_components_forms_product_form_product_form__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_order_details_components_forms_payment_form_payment_form__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_order_details_components_forms_customer_form_customer_form__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_order_details_components_forms_order_details_form_order_details_form__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_orders_list_orders_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_currency_bank_currency_bank__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_product_types_product_types__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_auth_service__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_onesignal_notification_onesignal_notification__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_login__ = __webpack_require__(279);
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
            __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_new_order_form_new_order_form__["a" /* NewOrderFormPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_orders_list_orders_list__["a" /* OrdersListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_order_details_order_details__["a" /* OrderDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_order_details_components_forms_customer_form_customer_form__["a" /* CustomerFormPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_order_details_components_forms_order_details_form_order_details_form__["a" /* OrderDetailsFormPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_order_details_components_forms_product_form_product_form__["a" /* ProductFormPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_order_details_components_forms_payment_form_payment_form__["a" /* PaymentFormPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_details_components_panels_customer_details_card_customer_details_card__["a" /* CustomerDetailsCardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_order_details_components_panels_order_details_card_order_details_card__["a" /* OrderDetailsCardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_order_details_components_panels_payments_list_card_payments_list_card__["a" /* PaymentsListCardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_order_details_components_panels_products_list_card_products_list_card__["a" /* ProductsListCardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_format_date_format_date__["a" /* FormatDatePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_new_order_form_new_order_form__["a" /* NewOrderFormPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_orders_list_orders_list__["a" /* OrdersListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_order_details_order_details__["a" /* OrderDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_order_details_components_forms_customer_form_customer_form__["a" /* CustomerFormPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_order_details_components_forms_order_details_form_order_details_form__["a" /* OrderDetailsFormPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_order_details_components_forms_product_form_product_form__["a" /* ProductFormPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_order_details_components_forms_payment_form_payment_form__["a" /* PaymentFormPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_currency_bank_currency_bank__["a" /* CurrencyBankProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_product_types_product_types__["a" /* ProductTypesProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_25__providers_onesignal_notification_onesignal_notification__["a" /* OnesignalNotificationProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_order_form_new_order_form__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_orders_list_orders_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(279);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="navBarColor">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_product_form_product_form__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
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
    function ProductsListCardComponent(modalCtrl, alertCtrl, loadingCtrl, mdbs, events) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mdbs = mdbs;
        this.events = events;
    }
    ProductsListCardComponent.prototype.deleteProduct = function (productId, index) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Ürün siliniyor..." });
        loading.present();
        this.mdbs.deleteProduct(productId).subscribe(function (response) {
            _this.products.splice(index, 1);
            loading.dismiss();
        });
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
    ProductsListCardComponent.prototype.presentModallyProductFormPage = function (mode, product, index) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__forms_product_form_product_form__["a" /* ProductFormPage */], {
            mode: mode,
            product: product,
            orderId: this.orderId,
            productIndex: index
        }).present();
    };
    return ProductsListCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ProductsListCardComponent.prototype, "products", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ProductsListCardComponent.prototype, "orderId", void 0);
ProductsListCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'products-list-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/products-list-card/products-list-card.html"*/'<ion-card>\n  <ion-item color="secondBarColor">\n    <h2 style="color: white">Ürünler</h2>\n    <button color="light" (click)="presentModallyProductFormPage(\'new\', undefined, undefined)" outline icon-left item-right ion-button>\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>Yeni\n    </button>\n  </ion-item>\n\n  <ion-card-content style="margin-top: 12px">\n    <ion-list>\n      <ion-item>\n        <ion-label>Desen/Renk</ion-label>\n        <ion-label>Cins</ion-label>\n        <ion-label>Miktar</ion-label>\n        <ion-label>Birim Fiyat</ion-label>\n        <ion-label>Tutar</ion-label>\n      </ion-item>\n\n      <ion-item-sliding *ngFor="let product of products; let i = index">\n        <ion-item>\n          <ion-label>{{ product.patternCode }}/{{ product.colorCode }}</ion-label>\n          <ion-label>{{ product.varietyCode }}</ion-label>\n          <ion-label>{{ product.quantity }}</ion-label>\n          <ion-label>{{ product.unitPrice }}</ion-label>\n          <ion-label>{{product.unitPrice * product.quantity }}</ion-label>\n        </ion-item>\n\n        <ion-item-options>\n          <button (click)="presentModallyProductFormPage(\'edit\', product, i)" ion-button>Düzenle</button>\n          <button (click)="presentDeletionWarning(product._id, i)" color="danger" ion-button>Sil</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/products-list-card/products-list-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], ProductsListCardComponent);

//# sourceMappingURL=products-list-card.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsListCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_payment_form_payment_form__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mongo_db_service_mongo_db_service__ = __webpack_require__(19);
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
    function PaymentsListCardComponent(modalCtrl, alertCtrl, loadingCtrl, mdbs) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mdbs = mdbs;
        console.log(this.orderId);
    }
    PaymentsListCardComponent.prototype.deletePayment = function (paymentId, index) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Ürün siliniyor..." });
        loading.present();
        this.mdbs.deletePayment(paymentId).subscribe(function (response) {
            _this.payments.splice(index, 1);
            loading.dismiss();
        });
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
    PaymentsListCardComponent.prototype.presentModallyProductFormPage = function (mode, payment, index) {
        console.log(this.orderId);
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__forms_payment_form_payment_form__["a" /* PaymentFormPage */], {
            mode: mode,
            payment: payment,
            orderId: this.orderId,
            paymentIndex: index
        }).present();
    };
    return PaymentsListCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], PaymentsListCardComponent.prototype, "orderId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], PaymentsListCardComponent.prototype, "payments", void 0);
PaymentsListCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'payments-list-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/payments-list-card/payments-list-card.html"*/'<ion-card>\n  <ion-item color="secondBarColor">\n    <h2 style="color: white">Ödemeler</h2>\n    <button color="light" (click)="presentModallyProductFormPage(\'new\', -1, undefined)" outline icon-left item-right ion-button>\n              <ion-icon ios="ios-add" md="md-add"></ion-icon>Yeni\n            </button>\n  </ion-item>\n\n  <ion-card-content style="margin-top: 12px">\n    <ion-list>\n      <ion-item-sliding *ngFor="let payment of payments; let i = index">\n        <ion-item>\n\n            <h1>{{ payment.amount }} {{ payment.currency }}</h1>\n            <h2 *ngIf="payment.type == \'Kredi Kartı\'">{{ payment.installments + " Taksit | " + payment.bank }}</h2>\n            <h3>{{ payment.personnel ? payment.personnel : "---" }} | {{ payment.date ? (payment.date | formatDate) : "---" }}</h3>\n            <p *ngIf="payment.note">{{ payment.note }}</p>\n\n        </ion-item>\n\n        <ion-item-options>\n          <button (click)="presentModallyProductFormPage(\'edit\', payment, i)" ion-button>DÜZENLE</button>\n          <button (click)="presentDeletionWarning(payment._id, i)" color="danger" ion-button>SİL</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/payments-list-card/payments-list-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */]])
], PaymentsListCardComponent);

//# sourceMappingURL=payments-list-card.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_order_details_form_order_details_form__ = __webpack_require__(203);
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
            orderDetails: this.orderDetails,
            orderId: this.orderId
        }).present();
    };
    return OrderDetailsCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], OrderDetailsCardComponent.prototype, "orderId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], OrderDetailsCardComponent.prototype, "orderDetails", void 0);
OrderDetailsCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'order-details-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/order-details-card/order-details-card.html"*/' <ion-card>\n          <ion-item color="secondBarColor">\n            <h2 style="color: white">Sipariş</h2>\n            <button color="light" (click)="presentModallyOrderDetailsFormPage()" outline icon-left item-right ion-button>\n                <ion-icon ios="ios-create" md="md-create"></ion-icon>Düzenle\n              </button>\n          </ion-item>\n\n          <ion-card-content style="margin-top: 12px">\n            <ion-list>\n              <ion-item *ngIf="orderDetails?.amount && orderDetails?.currency">\n                <ion-label>Sipariş Tutarı</ion-label>\n                <ion-label>{{ orderDetails?.amount }} {{ orderDetails?.currency }}</ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Kalan Tutar</ion-label>\n                <ion-label><!-- TODO -->{{ orderDetails?.currency }}</ion-label>\n              </ion-item>\n\n              <ion-item *ngIf="orderDetails?.orderDate">\n                <ion-label>Sipariş Tarihi</ion-label>\n                <ion-label>{{ orderDetails?.orderDate | formatDate }}</ion-label>\n              </ion-item>\n\n              <ion-item *ngIf="orderDetails?.deliveryDate">\n                <ion-label>İş Teslim Tarihi</ion-label>\n                <ion-label>{{ orderDetails?.deliveryDate | formatDate }}</ion-label>\n              </ion-item>\n\n              <ion-item *ngIf="orderDetails?.personnel">\n                <ion-label>Personel</ion-label>\n                <ion-label>{{ orderDetails?.personnel }}</ion-label>\n              </ion-item>\n\n              <ion-item *ngIf="orderDetails?.note">\n                <ion-label>Sipariş Not</ion-label>\n                <ion-label>{{ orderDetails?.note }}</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/order-details-card/order-details-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], OrderDetailsCardComponent);

//# sourceMappingURL=order-details-card.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_customer_form_customer_form__ = __webpack_require__(204);
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
        selector: 'customer-details-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/customer-details-card/customer-details-card.html"*/'<ion-card>\n  <ion-item color="secondBarColor">\n    <h2 style="color: white">Müşteri</h2>\n    <button (click)="presentModallyCustomerFormPage()" color="light" item-right outline icon-left ion-button>\n      <ion-icon ios="ios-create" md="md-create"></ion-icon>Düzenle\n    </button>\n  </ion-item>\n\n  <ion-card-content style="margin-top: 12px">\n    <ion-list>\n      <ion-item *ngIf="customer?.identificationNumber">\n        <ion-label>TC Kimlik No</ion-label>\n        <ion-label>{{ customer?.identificationNumber }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.name">\n        <ion-label>İsim Soyisim</ion-label>\n        <ion-label>{{ customer?.name }}</ion-label>\n      </ion-item>\n      \n      <ion-item *ngIf="customer?.telephones[0]">\n        <ion-label>Telefon 1</ion-label>\n        <ion-label>{{ customer?.telephones[0] }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.telephones[1]">\n        <ion-label>Telefon 2</ion-label>\n        <ion-label>{{ customer?.telephones[1] }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.email">\n        <ion-label>Email</ion-label>\n        <ion-label>{{ customer?.email }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.address?.line">\n        <ion-label>Adres Satırı</ion-label>\n        <ion-label>{{ customer?.address?.line }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.address?.district || customer?.address?.city">\n        <ion-label>İlçe / Şehir</ion-label>\n        <ion-label>{{ customer?.address?.district ? customer?.address?.district : \'---\' }} / {{ customer?.address?.city ? customer?.address?.city : \'---\' }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.address?.note">\n        <ion-label>Adres Not</ion-label>\n        <ion-label>{{ customer?.address?.note }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/order-details/components/panels/customer-details-card/customer-details-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], CustomerDetailsCardComponent);

//# sourceMappingURL=customer-details-card.js.map

/***/ }),

/***/ 277:
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
    FormatDatePipe.prototype.transform = function (val) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var dateString = '';
        if (val) {
            var value = void 0;
            if (typeof val.getMonth === 'function') {
                value = val;
            }
            else {
                value = new Date(val);
            }
            var day = value.getDay() > 9 ? value.getDay() : '0' + value.getDay();
            var month = value.getMonth() > 8 ? value.getMonth() + 1 : '0' + (value.getMonth() + 1);
            var year = value.getFullYear();
            var hours = value.getHours() > 9 ? value.getHours() : '0' + value.getHours();
            var minutes = value.getMinutes() > 9 ? value.getMinutes() : '0' + value.getMinutes();
            dateString = day + "/" + month + "/" + year + " " + hours + ":" + minutes;
        }
        return dateString;
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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, alertCtrl, navParams, menuController, authService, onesignal) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.menuController = menuController;
        this.authService = authService;
        this.onesignal = onesignal;
        this.mode = "login";
        this.menuController.enable(false);
    }
    LoginPage.prototype.registerModeOn = function () {
        this.mode = "register";
    };
    LoginPage.prototype.loginModeOn = function () {
        this.mode = "login";
    };
    LoginPage.prototype.registerUser = function (val) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Kayıt oluşturuluyor..."
        });
        loading.present();
        this.authService.register(val).subscribe(function (response) {
            console.log(response, _this.authService.ref);
            _this.loginModeOn();
            loading.dismiss();
        });
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Giriş yapılıyor..."
        });
        loading.present();
        this.authService.login(this.email, this.password).subscribe(function (response) {
            console.log(response);
            var data = response.json();
            if (data.result == "OK") {
                _this.authService.setUser(data.userData[0]);
                if (_this.authService.user.isManager) {
                    _this.onesignal.sendTag("isManager", "true");
                }
                else {
                    _this.onesignal.sendTag("isManager", "false");
                }
                _this.menuController.enable(true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                _this.alertCtrl.create({
                    title: "Giriş Yapılamadı",
                    message: "Lütfen girdiğiniz bilgileri kontrol edin",
                    buttons: [{ text: "OK" }]
                }).present();
            }
            loading.dismiss();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/ogrenci/Desktop/github/waterfall/src/pages/login/login.html"*/'<div style="background-image: url(\'../assets/lowpolyw1.jpg\'); display:flex;justify-content:center;align-items:center;width:100%;height:100%;">\n\n  <div style="width: 50%; min-width: 293.5px; height: 50%">\n    <h1 style="color: white; text-align: center;">\n      Hoş Geldiniz\n    </h1>\n    \n    <form #register="ngForm" *ngIf="mode == \'register\'" (ngSubmit)="registerUser(register.value)">\n      <ion-card>\n        <ion-card-content>\n          <ion-list>\n            <label ion-item>\n              <ion-label>İsim Soyisim</ion-label>\n              <ion-input name="name" type="text" ngModel required>\n              </ion-input>\n            </label>\n\n            <label ion-item>\n                  <ion-label fixed>Mağaza Adı</ion-label>\n                  <ion-input name="shop" type="text" ngModel required>\n                  </ion-input>\n                </label>\n\n            <label ion-item>\n                  <ion-label fixed>Email</ion-label>\n                  <ion-input name="email" type="email" ngModel required>\n                  </ion-input>\n                </label>\n\n            <label ion-item>\n              <ion-label>Mağaza Sahibi</ion-label>\n              <ion-checkbox name="isManager" [ngModel]="false"></ion-checkbox>\n            </label>\n\n            <label ion-item>\n                  <ion-label>Şifre</ion-label>\n                  <ion-input name="password" type="password" ngModel required>\n                  </ion-input>\n                </label>\n          </ion-list>\n\n          <button type="submit" [disabled]="!register.form.valid" ion-button block>Kayıt Ol</button>\n          <button (click)="loginModeOn()" ion-button outline block>Zaten bir hesabınız var mı? Giriş yapın</button>\n        </ion-card-content>\n      </ion-card>\n    </form>\n\n    <form #login="ngForm" *ngIf="mode == \'login\'">\n      <ion-card>\n        <ion-card-content>\n          <ion-list>\n            <label ion-item>\n                  <ion-label floating>Email</ion-label>\n                  <ion-input name="email" type="email" [(ngModel)]="email" required>\n                  </ion-input>\n                </label>\n\n            <label ion-item>\n                  <ion-label floating>Şifre</ion-label>\n                  <ion-input name="password" type="password" [(ngModel)]="password" required>\n                  </ion-input>\n                </label>\n          </ion-list>\n\n          <button (click)="loginUser()" [disabled]="!login.form.valid" ion-button block>Giriş Yap</button>\n          <button (click)="registerModeOn()" ion-button outline block>Hesabınız mı yok? Kayıt olun</button>\n        </ion-card-content>\n      </ion-card>\n    </form>\n  </div>\n</div>'/*ion-inline-end:"/Users/ogrenci/Desktop/github/waterfall/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]) === "function" && _g || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mongo_db_service_mongo_db_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, mdbs) {
        this.http = http;
        this.mdbs = mdbs;
        this.ref = "";
        this.ref = this.mdbs.ref;
    }
    AuthServiceProvider.prototype.getUser = function () {
        return this.user.name;
    };
    AuthServiceProvider.prototype.setUser = function (user) {
        this.user = user;
    };
    AuthServiceProvider.prototype.deleteUser = function () {
        delete this.user;
    };
    AuthServiceProvider.prototype.login = function (email, password) {
        return this.http.get(this.ref + "/personnels/login?email=" + email + "&password=" + password);
    };
    AuthServiceProvider.prototype.logout = function () {
        return this.http.get(this.ref + "/personnels/" + this.user._id + "/logout");
    };
    AuthServiceProvider.prototype.register = function (user) {
        return this.http.post(this.ref + "/personnels/new", user);
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mongo_db_service_mongo_db_service__["a" /* MongoDbServiceProvider */]) === "function" && _b || Object])
], AuthServiceProvider);

var _a, _b;
//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnesignalNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(101);
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



var OnesignalNotificationProvider = (function () {
    function OnesignalNotificationProvider(http) {
        this.http = http;
        this.appId = "87578805-f471-4bb6-b367-e114d224a0e0";
        this.restAPIKey = "NTViYTg5M2EtZTA1Ni00NDk1LThiNDQtYTVjYWQ4ZTg5Yjdj";
        this.androidProjectNumber = "AIzaSyASmpxOMiqAdq9QzO6MzSJMZcUi3jJXQI8";
        console.log('Hello OnesignalNotifiProvider Provider');
    }
    OnesignalNotificationProvider.prototype.notifyManagers = function (text) {
        if (!text)
            return;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json; charset=utf-8");
        headers.append("Authorization", "Basic " + this.restAPIKey);
        var options = {
            host: "onesignal.com",
            port: 443,
            path: "/api/v1/notifications",
            method: "POST",
            headers: headers
        };
        var message = {
            "app_id": this.appId,
            "contents": { "en": text },
            "filters": [
                { "field": "tag", "key": "isManager", "relation": "=", "value": "true" }
            ]
        };
        this.http.post("https://onesignal.com/api/v1/notifications", message, options)
            .subscribe(function (response) { return console.log(response.json()); });
    };
    return OnesignalNotificationProvider;
}());
OnesignalNotificationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OnesignalNotificationProvider);

var _a;
//# sourceMappingURL=onesignal-notification.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyBankProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(101);
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
  Generated class for the CurrencyBankProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CurrencyBankProvider = (function () {
    function CurrencyBankProvider(http) {
        this.http = http;
        this.banks = [
            "Garanti",
            "Ziraat",
            "Akbank",
            "Finansbank",
            "İş Bankası",
            "Yapı Kredi"
        ];
        this.currencies = [
            "TRY",
            "EUR",
            "USD"
        ];
        this.paymentTypes = [
            "Nakit",
            "Kredi Kartı"
        ];
        console.log('Hello CurrencyBankProvider Provider');
    }
    return CurrencyBankProvider;
}());
CurrencyBankProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CurrencyBankProvider);

//# sourceMappingURL=currency-bank.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map