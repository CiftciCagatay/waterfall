webpackJsonp([3],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_order_db_service_order_db_service__ = __webpack_require__(34);
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
    function OrderDetailsPage(navCtrl, navParams, ods, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ods = ods;
        this.loadingCtrl = loadingCtrl;
        this.order = {
            _id: "",
            customer: null,
            orderDetails: null,
            payments: null,
            products: null
        };
        this.order._id = this.navParams.get('orderId');
        if (!this.order._id) {
            this.navCtrl.pop();
        }
        var loading = this.loadingCtrl.create({ content: "Sipariş Detayları yükleniyor..." });
        loading.present();
        this.ods.getOrderDetails(this.order._id).subscribe(function (response) {
            _this.order = response.json();
            loading.dismiss();
        });
    }
    return OrderDetailsPage;
}());
OrderDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-details',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/order-details.html"*/'<!--\n  Generated template for the OrderDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Sipariş Detayları</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <customer-details-card [customer]="order.customer"></customer-details-card>\n      </ion-col>\n\n      <ion-col>\n        <order-details-card [orderId]="order._id" [orderDetails]="order.orderDetails" [balance]="order.payments | calculateBalance"></order-details-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <products-list-card *ngIf="order.products" [orderId]="order._id" [products]="order.products"></products-list-card>\n      </ion-col>\n\n      <ion-col>\n        <payments-list-card [orderId]="order._id" [payments]="order.payments"></payments-list-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/order-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_order_db_service_order_db_service__["a" /* OrderDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], OrderDetailsPage);

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityDistrictProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
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
  Generated class for the IlIlceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CityDistrictProvider = (function () {
    function CityDistrictProvider(http) {
        this.http = http;
        this.ref = "http://services.atiksoftware.com/turkiye/";
        this.sehirler = [
            "Adana",
            "Ad\u0131yaman",
            "Afyonkarahisar",
            "A\u011fr\u0131",
            "Aksaray",
            "Amasya",
            "Ankara",
            "Antalya",
            "Ardahan",
            "Artvin",
            "Ayd\u0131n",
            "Bal\u0131kesir",
            "Bart\u0131n",
            "Batman",
            "Bayburt",
            "Bilecik",
            "Bing\u00f6l",
            "Bitlis",
            "Bolu",
            "Burdur",
            "Bursa",
            "\u00c7anakkale",
            "\u00c7ank\u0131r\u0131",
            "\u00c7orum",
            "Denizli",
            "Diyarbak\u0131r",
            "D\u00fczce",
            "Edirne",
            "Elaz\u0131\u011f",
            "Erzincan",
            "Erzurum",
            "Eski\u015fehir",
            "Gaziantep",
            "Giresun",
            "G\u00fcm\u00fc\u015fhane",
            "Hakkari",
            "Hatay",
            "I\u011fd\u0131r",
            "Isparta",
            "\u0130stanbul",
            "\u0130zmir",
            "Kahramanmara\u015f",
            "Karab\u00fck",
            "Karaman",
            "Kars",
            "Kastamonu",
            "Kayseri",
            "Kilis",
            "K\u0131r\u0131kkale",
            "K\u0131rklareli",
            "K\u0131r\u015fehir",
            "Kocaeli",
            "Konya",
            "K\u00fctahya",
            "Malatya",
            "Manisa",
            "Mardin",
            "Mersin",
            "Mu\u011fla",
            "Mu\u015f",
            "Nev\u015fehir",
            "Ni\u011fde",
            "Ordu",
            "Osmaniye",
            "Rize",
            "Sakarya",
            "Samsun",
            "\u015eanl\u0131urfa",
            "Siirt",
            "Sinop",
            "\u015e\u0131rnak",
            "Sivas",
            "Tekirda\u011f",
            "Tokat",
            "Trabzon",
            "Tunceli",
            "U\u015fak",
            "Van",
            "Yalova",
            "Yozgat",
            "Zonguldak"
        ];
        this.ilceler = [];
        this.counties = {
            "Adana": [
                "Aladağ",
                "Ceyhan",
                "Çukurova",
                "Feke",
                "İmamoğlu",
                "Karaisalı",
                "Karataş",
                "Kozan",
                "Pozantı",
                "Saimbeyli",
                "Sarıçam",
                "Seyhan",
                "Tufanbeyli",
                "Yumurtalık",
                "Yüreğir"
            ],
            "Ad\u0131yaman": [
                "Besni",
                "Çelikhan",
                "Gerger",
                "Gölbaşı",
                "Kahta",
                "Merkez",
                "Samsat",
                "Sincik",
                "Tut"
            ],
            "Afyonkarahisar": [
                "Başmakçı",
                "Bayat",
                "Bolvadin",
                "Çay",
                "Çobanlar",
                "Dazkırı",
                "Dinar",
                "Emirdağ",
                "Evciler",
                "Hocalar",
                "İhsaniye",
                "İscehisar",
                "Kızılören",
                "Sandıklı",
                "Sinanpaşa",
                "Sultandağı",
                "Şuhut"
            ],
            "A\u011fr\u0131": [
                "Diyadin",
                "Doğubeyazıt",
                "Eleşkirt",
                "Hamur",
                "Patnos",
                "Taşlıçay",
                "Tutak"
            ],
            "Aksaray": [
                "Ağaçören",
                "Aksaray",
                "Eskil",
                "Gülağaç",
                "Güzelyurt",
                "Ortaköy",
                "Sarıyahşi",
            ],
            "Amasya": [
                "Göynücek",
                "Gümüşhacıköy",
                "Hamamözü",
                "Merzifon",
                "Suluova",
                "Taşova",
            ],
            "Ankara": [
                "Akyurt",
                "Altındağ",
                "Ayaş",
                "Bala",
                "Beypazarı",
                "Çamlıdere",
                "Çankaya",
                "Çubuk",
                "Elmadağ",
                "Etimesgut",
                "Evren",
                "Gölbaşı",
                "Güdül",
                "Haymana",
                "Kalecik",
                "Kazan",
                "Keçiören",
                "Kızılcahamam",
                "Mamak",
                "Nallıhan",
                "Polatlı",
                "Pursaklar",
                "Sincan",
                "Şereflikoçhisar",
                "Yenimahalle"
            ],
            "Antalya": [
                "Akseki",
                "Aksu",
                "Alanya",
                "Döşemealtı",
                "Elmalı",
                "Finike",
                "Gazipaşa",
                "Gündoğmuş",
                "İbradi",
                "Kale",
                "Kaş",
                "Kemer",
                "Kepez",
                "Konyaaltı",
                "Korkuteli",
                "Kumluca",
                "Manavgat",
                "Muratpaşa",
                "Serik"
            ],
            "Ardahan": [
                "Çıldır",
                "Damal",
                "Göle",
                "Hanak",
                "Posof"
            ],
            "Artvin": [
                "Ardanuç",
                "Arhavi",
                "Artvin",
                "Borçka",
                "Hopa",
                "Murgul",
                "Şavşat",
                "Yusufeli"
            ],
            "Ayd\u0131n": [
                "Bozdoğan",
                "Buharkent",
                "Çine",
                "Didim",
                "Germencik",
                "İncirliova",
                "Karacasu",
                "Karpuzlu",
                "Koçarlı",
                "Köşk",
                "Kuşadası",
                "Kuyucak",
                "Nazilli",
                "Söke",
                "Sultanhisar",
                "Yenipazar"
            ],
            "Bal\u0131kesir": [
                "Ayvalık",
                "Balya",
                "Bandırma",
                "Bigadiç",
                "Burhaniye",
                "Dursunbey",
                "Edremit",
                "Erdek",
                "Gömeç",
                "Gönen",
                "Havran",
                "İvrindi",
                "Kepsut",
                "Manyas",
                "Marmara",
                "Savaştepe",
                "Sındırgı",
                "Susurluk"
            ],
            "Bart\u0131n": [
                "Kurucaşile",
                "Ulus"
            ],
            "Batman": [
                "Beşiri",
                "Gercüş",
                "Hasankeyf",
                "Kozluk",
                "Sason"
            ],
            "Bayburt": [
                "Aydıntepe",
                "Demirözü"
            ],
            "Bilecik": [
                "Bozüyük",
                "Gölpazarı",
                "İnhisar",
                "Osmaneli",
                "Pazaryeri",
                "Söğüt",
                "Yenipazar"
            ],
            "Bing\u00f6l": [
                "Adaklı",
                "Genç",
                "Karlıova",
                "Kiğı",
                "Solhan",
                "Yayladere",
                "Yedisu"
            ],
            "Bitlis": [
                "Adilcevaz",
                "Ahlat",
                "Güroymak",
                "Hizan",
                "Mutki",
                "Tatvan"
            ],
            "Bolu": [
                "Dörtdivan",
                "Gerede",
                "Göynük",
                "Kıbrıscık",
                "Mengen",
                "Mudurnu",
                "Seben",
                "Yeniçağa"
            ],
            "Burdur": [
                "Ağlasun",
                "Altınyayla",
                "Bucak",
                "Çavdır",
                "Çeltikçi",
                "Gölhisar",
                "Karamanlı",
                "Kemer",
                "Tefenni",
                "Yeşilova"
            ],
            "Bursa": [
                "Büyükorhan",
                "Gemlik",
                "Gürsu",
                "Harmancık",
                "İnegöl",
                "İznik",
                "Karacabey",
                "Keles",
                "Kestel",
                "Mudanya",
                "Mustafakemalpaşa",
                "Nilüfer",
                "Orhaneli",
                "Orhangazi",
                "Osmangazi",
                "Yenişehir",
                "Yıldırım"
            ],
            "\u00c7anakkale": [
                "Ayvacık",
                "Bayramiç",
                "Biga",
                "Bozcaada",
                "Çan",
                "Eceabat",
                "Ezine",
                "Gelibolu",
                "Gökçeada",
                "Lapseki",
                "Yenice"
            ],
            "\u00c7ank\u0131r\u0131": [
                "Atkaracalar",
                "Bayramören",
                "Çerkeş",
                "Eldivan",
                "Ilgaz",
                "Kızılırmak",
                "Korgun",
                "Kurşunlu",
                "Orta",
                "Şabanözü",
                "Yapraklı"
            ],
            "\u00c7orum": [
                "Alaca",
                "Bayat",
                "Boğazkale",
                "Dodurga",
                "İskilip",
                "Kargı",
                "Laçin",
                "Mecitözü",
                "Oğuzlar",
                "Ortaköy",
                "Osmancık",
                "Sungurlu",
                "Uğurludağ"
            ],
            "Denizli": [
                "Acıpayam",
                "Akköy",
                "Babadağ",
                "Baklan",
                "Bekilli",
                "Beyağaç",
                "Bozkurt",
                "Buldan",
                "Çal",
                "Çameli",
                "Çardak",
                "Çivril",
                "Güney",
                "Honaz",
                "Kale",
                "Sarayköy",
                "Serinhisar",
                "Tavas"
            ],
            "Diyarbak\u0131r": [
                "Bağlar",
                "Bismil",
                "Çermik",
                "Çınar",
                "Çüngüş",
                "Dicle",
                "Eğil",
                "Ergani",
                "Hani",
                "Hazro",
                "Kayapınar",
                "Kocaköy",
                "Kulp",
                "Lice",
                "Silvan",
                "Sur",
                "Yenişehir"
            ],
            "D\u00fczce": [
                "Akçakoca",
                "Cumayeri",
                "Çilimli",
                "Gölyaka",
                "Gümüşova",
                "Kaynaşlı",
                "Yığılca"
            ],
            "Edirne": [
                "Enez",
                "Havsa",
                "İpsala",
                "Keşan",
                "Lalapaşa",
                "Meriç",
                "Süloğlu",
                "Uzunköprü"
            ],
            "Elaz\u0131\u011f": [
                "Ağın",
                "Alacakaya",
                "Arıcak",
                "Baskil",
                "Karakoçan",
                "Keban",
                "Kovancılar",
                "Maden",
                "Palu",
                "Sivrice"
            ],
            "Erzincan": [
                "Çayırlı",
                "İliç",
                "Kemah",
                "Kemaliye",
                "Otlukbeli",
                "Refahiye",
                "Tercan",
                "Üzümlü"
            ],
            "Erzurum": [
                "Aşkale",
                "Aziziye",
                "Çat",
                "Hınıs",
                "Horasan",
                "İspir",
                "Karaçoban",
                "Karayazı",
                "Köprüköy",
                "Narman",
                "Oltu",
                "Olur",
                "Palandöken",
                "Pasinler",
                "Pazaryolu",
                "Şenkaya",
                "Tekman",
                "Tortum",
                "Uzundere",
                "Yakutiye"
            ],
            "Eski\u015fehir": [
                "Alpu",
                "Beylikova",
                "Çifteler",
                "Günyüzü",
                "Han",
                "İnönü",
                "Mahmudiye",
                "Mihalgazi",
                "Mihalıççık",
                "Odunpazarı",
                "Sarıcakaya",
                "Seyitgazi",
                "Sivrihisar",
                "Tepebaşı"
            ],
            "Gaziantep": [
                "Araban",
                "İslahiye",
                "Karkamış",
                "Nizip",
                "Nurdağı",
                "Oğuzeli",
                "Şahinbey",
                "Şehitkamil",
                "Yavuzeli"
            ],
            "Giresun": [
                "Alucra",
                "Bulancak",
                "Çamoluk",
                "Çanakçı",
                "Dereli",
                "Doğankent",
                "Espiye",
                "Eynesil",
                "Görele",
                "Güce",
                "Keşap",
                "Piraziz",
                "Şebinkarahisar",
                "Tirebolu",
                "Yağlıdere"
            ],
            "G\u00fcm\u00fc\u015fhane": [
                "Kelkit",
                "Köse",
                "Kürtün",
                "Şiran",
                "Torul"
            ],
            "Hakkari": [
                "Çukurca",
                "Şemdinli",
                "Yüksekova"
            ],
            "Hatay": [
                "Altınözü",
                "Antakya",
                "Belen",
                "Dörtyol",
                "Erzin",
                "Hassa",
                "İskenderun",
                "Kırıkhan",
                "Kumlu",
                "Reyhanlı",
                "Samandağ",
                "Yayladağı"
            ],
            "I\u011fd\u0131r": [
                "Aralık",
                "Karakoyunlu",
                "Tuzluca"
            ],
            "Isparta": [
                "Aksu",
                "Atabey",
                "Eğirdir",
                "Gelendost",
                "Gönen",
                "Keçiborlu",
                "Senirkent",
                "Sütçüler",
                "Şarkikaraağaç",
                "Uluborlu",
                "Yalvaç",
                "Yenişarbademli"
            ],
            "\u0130stanbul": [
                "Adalar",
                "Arnavutköy",
                "Ataşehir",
                "Avcılar",
                "Bağcılar",
                "Bahçelievler",
                "Bakırköy",
                "Başakşehir",
                "Bayrampaşa",
                "Beşiktaş",
                "Beykoz",
                "Beylikdüzü",
                "Beyoğlu",
                "Büyükçekmece",
                "Çatalca",
                "Çekmeköy",
                "Esenler",
                "Esenyurt",
                "Eyüp",
                "Fatih",
                "Gaziosmanpaşa",
                "Güngören",
                "Kadıköy",
                "Kağıthane",
                "Kartal",
                "Küçükçekmece",
                "Maltepe",
                "Pendik",
                "Sancaktepe",
                "Sarıyer",
                "Silivri",
                "Sultanbeyli",
                "Sultangazi",
                "Şile",
                "Şişli",
                "Tuzla",
                "Ümraniye",
                "Üsküdar",
                "Zeytinburnu"
            ],
            "\u0130zmir": [
                "Aliağa",
                "Balçova",
                "Bayındır",
                "Bayraklı",
                "Bergama",
                "Beydağ",
                "Bornova",
                "Buca",
                "Çeşme",
                "Çiğli",
                "Dikili",
                "Foça",
                "Gaziemir",
                "Güzelbahçe",
                "Karabağlar",
                "Karaburun",
                "Karşıyaka",
                "Kemalpaşa",
                "Kınık",
                "Kiraz",
                "Konak",
                "Menderes",
                "Menemen",
                "Narlıdere",
                "Ödemiş",
                "Seferihisar",
                "Selçuk",
                "Tire",
                "Torbalı",
                "Urla"
            ],
            "Kahramanmara\u015f": [
                "Afşin",
                "Andırın",
                "Çağlayancerit",
                "Ekinözü",
                "Elbistan",
                "Göksun",
                "Nurhak",
                "Pazarcık",
                "Türkoğlu"
            ],
            "Karab\u00fck": [
                "Eflani",
                "Eskipazar",
                "Ovacık",
                "Safranbolu",
                "Yenice"
            ],
            "Karaman": [
                "Ayrancı",
                "Başyayla",
                "Ermenek",
                "Kazımkarabekir",
                "Sarıveliler"
            ],
            "Kars": [
                "Akyaka",
                "Arpaçay",
                "Digor",
                "Kağızman",
                "Sarıkamış",
                "Selim",
                "Susuz"
            ],
            "Kastamonu": [
                "Abana",
                "Ağlı",
                "Araç",
                "Azdavay",
                "Bozkurt",
                "Cide",
                "Çatalzeytin",
                "Daday",
                "Devrekani",
                "Doğanyurt",
                "Hanönü",
                "İhsangazi",
                "İnebolu",
                "Küre",
                "Pınarbaşı",
                "Seydiler",
                "Şenpazar",
                "Taşköprü",
                "Tosya"
            ],
            "Kayseri": [
                "Akkışla",
                "Bünyan",
                "Develi",
                "Felahiye",
                "Hacılar",
                "İncesu",
                "Kocasinan",
                "Melikgazi",
                "Özvatan",
                "Pınarbaşı",
                "Sarıoğlan",
                "Sarız",
                "Talas",
                "Tomarza",
                "Yahyalı",
                "Yeşilhisar",
            ],
            "Kilis": [
                "Merkez",
                "Musabeyli",
                "Elbeyli",
                "Polateli"
            ],
            "K\u0131r\u0131kkale": [
                "Bahşılı",
                "Balışeyh",
                "Çelebi",
                "Delice",
                "Karakeçili",
                "Keskin",
                "Sulakyurt",
                "Yahşihan"
            ],
            "K\u0131rklareli": [
                "Babaeski",
                "Demirköy",
                "Kofçaz",
                "Lüleburgaz",
                "Pehlivanköy",
                "Pınarhisar",
                "Vize"
            ],
            "K\u0131r\u015fehir": [
                "Akçakent",
                "Akpınar",
                "Boztepe",
                "Çiçekdağı",
                "Kaman",
                "Mucur"
            ],
            "Kocaeli": [
                "Başiskele",
                "Çayırova",
                "Darıca",
                "Derince",
                "Dilovası",
                "Gebze",
                "Gölcük",
                "İzmit",
                "Kandıra",
                "Karamürsel",
                "Kartepe",
                "Körfez"
            ],
            "Konya": [
                "Ahırlı",
                "Akören",
                "Akşehir",
                "Altınekin",
                "Beyşehir",
                "Bozkır",
                "Cihanbeyli",
                "Çeltik",
                "Çumra",
                "Derbent",
                "Derebucak",
                "Doğanhisar",
                "Emirgazi",
                "Ereğli",
                "Güneysınır",
                "Hadım",
                "Halkapınar",
                "Hüyük",
                "Ilgın",
                "Kadınhanı",
                "Karapınar",
                "Karatay",
                "Kulu",
                "Meram",
                "Sarayönü",
                "Selçuklu",
                "Seydişehir",
                "Taşkent",
                "Tuzlukçu",
                "Yalıhüyük",
                "Yeniceoba",
                "Yunak"
            ],
            "K\u00fctahya": [
                "Altıntaş",
                "Aslanapa",
                "Çavdarhisar",
                "Domaniç",
                "Dumlupınar",
                "Emet",
                "Gediz",
                "Hisarcık",
                "Pazarlar",
                "Şaphane",
                "Simav",
                "Tavşanlı"
            ],
            "Malatya": [
                "Akçadağ",
                "Arapgir",
                "Arguvan",
                "Battalgazi",
                "Darende",
                "Doğanşehir",
                "Doğanyol",
                "Hekimhan",
                "Kale",
                "Kuluncak",
                "Pütürge",
                "Yazıhan",
                "Yeşilyurt",
                "Gürün"
            ],
            "Manisa": [
                "Ahmetli",
                "Akhisar",
                "Alaşehir",
                "Demirci",
                "Gölmarmara",
                "Gördes",
                "Kırkağaç",
                "Kula",
                "Salihli",
                "Sarıgöl",
                "Saruhanlı",
                "Selendi",
                "Soma",
                "Turgutlu"
            ],
            "Mardin": [
                "Dargeçit",
                "Derik",
                "Kızıltepe",
                "Mazıdağı",
                "Midyat",
                "Nusaybin",
                "Ömerli",
                "Savur",
                "Yeşilli"
            ],
            "Mersin": [
                "Akdeniz",
                "Anamur",
                "Aydıncık",
                "Bozyazı",
                "Çamlıyayla",
                "Erdemli",
                "Gülnar",
                "Mezitli",
                "Mut",
                "Silifke",
                "Tarsus",
                "Toroslar",
                "Yenişehir"
            ],
            "Mu\u011fla": [
                "Bodrum",
                "Dalaman",
                "Datça",
                "Fethiye",
                "Kavaklıdere",
                "Köyceğiz",
                "Marmaris",
                "Milas",
                "Ortaca",
                "Ula",
                "Yatağan"
            ],
            "Mu\u015f": [
                "Bulanık",
                "Hasköy",
                "Korkut",
                "Malazgirt",
                "Varto"
            ],
            "Nev\u015fehir": [
                "Acıgöl",
                "Avanos",
                "Derinkuyu",
                "Gülşehir",
                "Hacıbektaş",
                "Kozaklı",
                "Ürgüp"
            ],
            "Ni\u011fde": [
                "Altunhisar",
                "Bor",
                "Çamardı",
                "Çiftlik",
                "Ulukışla"
            ],
            "Ordu": [
                "Akkuş",
                "Aybastı",
                "Çamaş",
                "Çatalpınar",
                "Çaybaşı",
                "Fatsa",
                "Gölköy",
                "Gülyalı",
                "Gürgentepe",
                "İkizce",
                "Kabadüz",
                "Kabataş",
                "Korgan",
                "Kumru",
                "Mesudiye",
                "Perşembe",
                "Ulubey",
                "Ünye"
            ],
            "Osmaniye": [
                "Bahçe",
                "Düziçi",
                "Hasanbeyli",
                "Kadirli",
                "Sumbas",
                "Toprakkale"
            ],
            "Rize": [
                "Ardeşen",
                "Çamlıhemşin",
                "Çayeli",
                "Derepazarı",
                "Fındıklı",
                "Güneysu",
                "Hemşin",
                "İkizdere",
                "İyidere",
                "Kalkandere",
                "Pazar"
            ],
            "Sakarya": [
                "Adapazarı",
                "Akyazı",
                "Arifiye",
                "Erenler",
                "Ferizli",
                "Geyve",
                "Hendek",
                "Karapürçek",
                "Karasu",
                "Kaynarca",
                "Kocaali",
                "Pamukova",
                "Sapanca",
                "Serdivan",
                "Söğütlü",
                "Taraklı"
            ],
            "Samsun": [
                "Alaçam",
                "Asarcık",
                "Atakum",
                "Ayvacık",
                "Bafra",
                "Canik",
                "Çarşamba",
                "Havza",
                "İlkadım",
                "Kavak",
                "Ladik",
                "Ondokuzmayıs",
                "Salıpazarı",
                "Tekkeköy",
                "Terme",
                "Vezirköprü",
                "Yakakent"
            ],
            "\u015eanl\u0131urfa": [
                "Akçakale",
                "Birecik",
                "Bozova",
                "Ceylanpınar",
                "Halfeti",
                "Harran",
                "Hilvan",
                "Siverek",
                "Suruç",
                "Viranşehir"
            ],
            "Siirt": [
                "Aydınlar",
                "Baykan",
                "Eruh",
                "Kurtalan",
                "Pervari",
                "Şirvan"
            ],
            "Sinop": [
                "Ayancık",
                "Boyabat",
                "Dikmen",
                "Durağan",
                "Erfelek",
                "Gerze",
                "Saraydüzü",
                "Türkeli"
            ],
            "\u015e\u0131rnak": [
                "Beytüşşebap",
                "Cizre",
                "Güçlükonak",
                "İdil",
                "Silopi",
                "Uludere"
            ],
            "Sivas": [
                "Akıncılar",
                "Altınyayla",
                "Divriği",
                "Doğanşar",
                "Gemerek",
                "Gölova",
                "Hafik",
                "İmranlı",
                "Kangal",
                "Koyulhisar",
                "Suşehri",
                "Şarkışla",
                "Ulaş",
                "Yıldızeli",
                "Zara",
                "Gürün"
            ],
            "Tekirda\u011f": [
                "Çerkezköy",
                "Çorlu",
                "Hayrabolu",
                "Malkara",
                "Marmara Ereğlisi",
                "Muratlı",
                "Saray",
                "Şarköy"
            ],
            "Tokat": [
                "Almus",
                "Artova",
                "Başçiftlik",
                "Erbaa",
                "Niksar",
                "Pazar",
                "Reşadiye",
                "Sulusaray",
                "Turhal",
                "Yeşilyurt",
                "Zile"
            ],
            "Trabzon": [
                "Akçaabat",
                "Araklı",
                "Arsin",
                "Beşikdüzü",
                "Çarşıbaşı",
                "Çaykara",
                "Dernekpazarı",
                "Düzköy",
                "Hayrat",
                "Köprübaşı",
                "Maçka",
                "Of",
                "Sürmene",
                "Şalpazarı",
                "Tonya",
                "Vakfıkebir",
                "Yomra"
            ],
            "Tunceli": [
                "Çemişgezek",
                "Hozat",
                "Mazgirt",
                "Nazimiye",
                "Ovacık",
                "Pertek",
                "Pülümür"
            ],
            "U\u015fak": [
                "Banaz",
                "Eşme",
                "Karahallı",
                "Sivaslı",
                "Ulubey"
            ],
            "Van": [
                "Bahçesaray",
                "Başkale",
                "Çaldıran",
                "Çatak",
                "Edremit",
                "Erciş",
                "Gevaş",
                "Gürpınar",
                "Muradiye",
                "Özalp",
                "Saray"
            ],
            "Yalova": [
                "Altınova",
                "Armutlu",
                "Çınarcık",
                "Çiftlikköy",
                "Termal"
            ],
            "Yozgat": [
                "Akdağmadeni",
                "Aydıncık",
                "Boğazlıyan",
                "Çandır",
                "Çayıralan",
                "Çekerek",
                "Kadışehri",
                "Saraykent",
                "Sarıkaya",
                "Sorgun",
                "Şefaatli",
                "Yenifakılı",
                "Yerköy"
            ],
            "Zonguldak": [
                "Alaplı",
                "Çaycuma",
                "Devrek",
                "Gökçebey",
                "Kilimli",
                "Kozlu",
                "Karadeniz Ereğli"
            ]
        };
        console.log('Hello IlIlceProvider Provider');
    }
    CityDistrictProvider.prototype.getCities = function () {
        return this.sehirler;
    };
    CityDistrictProvider.prototype.getCounties = function (id) {
        this.ilceler = this.counties[id];
        console.log(id);
    };
    return CityDistrictProvider;
}());
CityDistrictProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CityDistrictProvider);

//# sourceMappingURL=city-district.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnesignalNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], OnesignalNotificationProvider);

//# sourceMappingURL=onesignal-notification.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDbServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(30);
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
  Generated class for the ProductDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ProductDbServiceProvider = (function () {
    function ProductDbServiceProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        this.types = [
            "Tül",
            "Kumaş",
            "Korniş",
            "Güneşlik",
            "Renso",
            "Store",
            "Zebra",
            "Astar",
            "Aksesuar",
            "Ruspik",
            "Lambiri",
            "Mekanizma",
            "Etek"
        ];
        console.log('Hello PaymentDbServiceProvider Provider');
    }
    ProductDbServiceProvider.prototype.insertProduct = function (orderId, product) {
        var url = this.globals.ref + "/orders/" + orderId + "/products/new";
        return this.http.post(url, product);
    };
    ProductDbServiceProvider.prototype.updateProduct = function (productId, newValue) {
        var url = this.globals.ref + "/products/" + productId;
        return this.http.put(url, newValue);
    };
    ProductDbServiceProvider.prototype.deleteProduct = function (productId) {
        var url = this.globals.ref + "/products/" + productId;
        return this.http.delete(url);
    };
    return ProductDbServiceProvider;
}());
ProductDbServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]) === "function" && _b || Object])
], ProductDbServiceProvider);

var _a, _b;
//# sourceMappingURL=product-db-service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(166);
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
            if (data.result == "OK" && data.userData[0]) {
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/login/login.html"*/'<div style="background-image: url(\'http://lordsimpex.com.pk/wp-content/uploads/2015/03/bg-daily-news1.jpg\'); display:flex;justify-content:center;align-items:center;width:100%;height:100%;">\n\n  <div style="width: 50%; min-width: 293.5px; height: 50%">\n    <ion-card style="padding: 8px; font-family: \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif; text-align: center;">\n      <h1>Hoş Geldiniz</h1>\n    </ion-card>\n\n    <form #register="ngForm" *ngIf="mode == \'register\'" (ngSubmit)="registerUser(register.value)">\n      <ion-card>\n        <ion-card-content>\n          <ion-list>\n            <label ion-item>\n              <ion-label>İsim Soyisim</ion-label>\n              <ion-input name="name" type="text" ngModel required>\n              </ion-input>\n            </label>\n\n            <label ion-item>\n                  <ion-label fixed>Mağaza Adı</ion-label>\n                  <ion-input name="shop" type="text" ngModel required>\n                  </ion-input>\n                </label>\n\n            <label ion-item>\n                  <ion-label fixed>Email</ion-label>\n                  <ion-input name="email" type="email" ngModel required>\n                  </ion-input>\n                </label>\n\n            <label ion-item>\n              <ion-label>Mağaza Sahibi</ion-label>\n              <ion-checkbox name="isManager" [ngModel]="false"></ion-checkbox>\n            </label>\n\n            <label ion-item>\n                  <ion-label>Şifre</ion-label>\n                  <ion-input name="password" type="password" ngModel required>\n                  </ion-input>\n                </label>\n          </ion-list>\n\n          <button type="submit" [disabled]="!register.form.valid" ion-button block>Kayıt Ol</button>\n          <button (click)="loginModeOn()" ion-button outline block>Zaten bir hesabınız var mı? Giriş yapın</button>\n        </ion-card-content>\n      </ion-card>\n    </form>\n\n    <form #login="ngForm" *ngIf="mode == \'login\'">\n      <ion-card>\n        <ion-card-content>\n          <ion-list>\n            <label ion-item>\n                  <ion-label floating>Email</ion-label>\n                  <ion-input name="email" type="email" [(ngModel)]="email" required>\n                  </ion-input>\n                </label>\n\n            <label ion-item>\n                  <ion-label floating>Şifre</ion-label>\n                  <ion-input name="password" type="password" [(ngModel)]="password" required>\n                  </ion-input>\n                </label>\n          </ion-list>\n\n          <button (click)="loginUser()" [disabled]="!login.form.valid" ion-button block>Giriş Yap</button>\n          <button (click)="registerModeOn()" ion-button outline block>Hesabınız mı yok? Kayıt olun</button>\n        </ion-card-content>\n      </ion-card>\n    </form>\n  </div>\n</div>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_customer_db_service_customer_db_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_order_db_service_order_db_service__ = __webpack_require__(34);
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
 * Generated class for the CustomerDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerDetailsPage = (function () {
    function CustomerDetailsPage(navCtrl, navParams, cds, ods, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cds = cds;
        this.ods = ods;
        this.loadingCtrl = loadingCtrl;
        this.orders = [];
        var customerId = this.navParams.get('customerId');
        if (!customerId)
            this.navCtrl.pop();
        var loading = this.loadingCtrl.create({ content: "Müşteri bilgileri yükleniyor..." });
        loading.present();
        this.cds.getCustomerById(customerId).subscribe(function (response) {
            _this.customer = response.json();
            loading.setContent("Müşteriye ait siparişler yükleniyor...");
            _this.ods.getOrdersByCustomerId(customerId).subscribe(function (ordersResponse) {
                _this.orders = ordersResponse.json();
                loading.dismiss();
            });
        });
    }
    CustomerDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerDetailsPage');
    };
    return CustomerDetailsPage;
}());
CustomerDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-details',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/customer-details/customer-details.html"*/'<!--\n  Generated template for the CustomerDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-title>Müşteri Detayları</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-md-6>\n        <customer-details-card [customer]="customer"></customer-details-card>\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n        <ion-card>\n          <ion-item color="secondBarColor">\n            <h2 style="color: white">Siparişler</h2>\n          </ion-item>\n\n          <ion-card-content style="margin-top: 12px">\n            <ion-list>\n              <ion-item-sliding *ngFor="let order of orders; let i = index">\n                <ion-item (click)="showOrdersDetails(order._id)">\n                  <ion-label>{{ order.orderDetails.orderDate | formatDate }}</ion-label>\n                  <ion-label>{{ order.orderDetails.amount }} {{ order.orderDetails.currency }}</ion-label>\n                  <ion-label>{{ order.orderDetails.amount - (order.payments | calculateBalance) }} {{ order.orderDetails.currency }}</ion-label>\n                </ion-item>\n\n                <ion-item-options>\n                  <button color="danger" (click)="presentDeletionWarning(order._id, i)" ion-button>Sil</button>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/customer-details/customer-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_customer_db_service_customer_db_service__["a" /* CustomerDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_order_db_service_order_db_service__["a" /* OrderDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], CustomerDetailsPage);

//# sourceMappingURL=customer-details.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_customer_db_service_customer_db_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_details_customer_details__ = __webpack_require__(113);
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
 * Generated class for the CustomerListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerListPage = (function () {
    function CustomerListPage(navCtrl, loadingCtrl, navParams, cds) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.cds = cds;
        this.customers = [];
        var loading = this.loadingCtrl.create({ content: "Müşteriler yükleniyor..." });
        //loading.present();
        this.cds.getCustomers().subscribe(function (response) {
            _this.customers = response.json();
            //loading.dismiss();
        });
    }
    CustomerListPage.prototype.goToCustomerDetailsPage = function (customerId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__customer_details_customer_details__["a" /* CustomerDetailsPage */], {
            customerId: customerId
        });
    };
    CustomerListPage.prototype.filterCustomers = function (text) {
        var _this = this;
        this.cds.getCustomers(text).subscribe(function (response) {
            _this.customers = response.json();
            console.log(response);
            //loading.dismiss();
        });
    };
    return CustomerListPage;
}());
CustomerListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-list',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/customer-list/customer-list.html"*/'<!--\n  Generated template for the CustomerListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n    </button>\n\n    <ion-title>Müşteriler</ion-title>\n  </ion-navbar>\n  \n  <ion-toolbar color="navBarColor">\n    <ion-searchbar color="navBarColor" (ionChange)="filterCustomers($event.value)"></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-toolbar color="navBarColor">\n    <ion-item color="navBarColor">\n      <ion-label>TC Kimlik No</ion-label>\n      <ion-label>İsim</ion-label>\n    </ion-item>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item (click)="goToCustomerDetailsPage(customer._id)" *ngFor="let customer of customers">\n      <ion-label>{{ customer.identificationNumber }}</ion-label>\n      <ion-label>{{ customer.name }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/customer-list/customer-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_customer_db_service_customer_db_service__["a" /* CustomerDbServiceProvider */]])
], CustomerListPage);

//# sourceMappingURL=customer-list.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/customer-details/customer-details.module": [
		290,
		2
	],
	"../pages/customer-list/customer-list.module": [
		291,
		1
	],
	"../pages/login/login.module": [
		289,
		0
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
webpackAsyncContext.id = 165;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewOrderFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details_order_details__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_city_district_city_district__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_onesignal_notification_onesignal_notification__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_Database_Service_Providers_order_db_service_order_db_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_Database_Service_Providers_event_db_service_event_db_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_Database_Service_Providers_payment_db_service_payment_db_service__ = __webpack_require__(44);
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
    function NewOrderFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, ods, eds, pds, auth, cityDistrictProvider, oneSignalNotificationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.ods = ods;
        this.eds = eds;
        this.pds = pds;
        this.auth = auth;
        this.cityDistrictProvider = cityDistrictProvider;
        this.oneSignalNotificationProvider = oneSignalNotificationProvider;
        this.order = {
            customer: {
                identificationNumber: "",
                name: "",
                telephones: ["", ""],
                email: "",
                address: {
                    line: "",
                    city: "İstanbul",
                    district: "",
                    note: ""
                }
            },
            orderDetails: {
                orderDate: new Date(),
                deliveryDate: (new Date()).toISOString(),
                personnel: this.auth.getUser(),
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
                    personnel: this.auth.getUser(),
                    installments: null,
                    bank: "",
                    date: new Date()
                }
            ]
        };
        this.citySelected(this.order.customer.address.city);
    }
    NewOrderFormPage.prototype.isIdentificationNumberValid = function (id) {
        if (id[0] == '0') {
            console.log("TC Kimlik numarasının ilk karakteri 0 olamaz");
            return false;
        }
        else if (id.length != 11) {
            console.log("TC Kimlik numarası 11 haneli olmalıdır");
            return false;
        }
        else if (Number(id) % 2 != 0) {
            console.log("TC Kimlik numarası tek sayı olamaz");
            return false;
        }
        else {
            var tekIndexToplam = Number(id[0]) + Number(id[2]) + Number(id[4]) + Number(id[6]) + Number(id[8]);
            var ciftIndexToplam = Number(id[1]) + Number(id[3]) + Number(id[5]) + Number(id[7]);
            var farkMod10 = ((tekIndexToplam * 7) - ciftIndexToplam) % 10;
            if (farkMod10 != Number(id[9])) {
                console.log("10. hanen doğru değil");
                return false;
            }
            var ilkOnHaneToplam = tekIndexToplam + ciftIndexToplam + Number(id[9]);
            if (ilkOnHaneToplam % 10 != Number(id[10])) {
                console.log("11. hanen doğru değil");
                return false;
            }
        }
    };
    NewOrderFormPage.prototype.citySelected = function (city) {
        this.order.customer.address.district = "";
        this.cityDistrictProvider.getCounties(city);
    };
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
    NewOrderFormPage.prototype.logOrderSavedEvent = function () {
        this.eds.logEvent("Yeni Sipariş", this.order.orderDetails.personnel + " taraf\u0131ndan " + this.order.orderDetails.amount + " " + this.order.orderDetails.currency + " tutar\u0131nda sipari\u015F al\u0131nd\u0131", this.order.orderDetails.personnel, this.order.orderDetails.orderDate);
        if (this.order.payments.length > 0) {
            this.eds.logEvent("Yeni Ödeme", this.order.orderDetails.personnel + " taraf\u0131ndan " + this.order.payments[0].amount + " " + this.order.payments[0].currency + " tutar\u0131nda \u00F6deme al\u0131nd\u0131", this.order.orderDetails.personnel, this.order.orderDetails.orderDate);
        }
        this.oneSignalNotificationProvider.notifyManagers(this.order.orderDetails.personnel + " taraf\u0131ndan " + this.order.orderDetails.amount + " " + this.order.orderDetails.currency + " tutar\u0131nda sipari\u015F al\u0131nd\u0131");
    };
    NewOrderFormPage.prototype.saveOrder = function () {
        var _this = this;
        if (!this.order.payments[0].amount) {
            this.order.payments.pop();
        }
        var loading = this.loadingCtrl.create({
            content: "Sipariş kaydediliyor..."
        });
        loading.present();
        this.ods.insertNewOrder(this.order).subscribe(function (response) {
            _this.orderId = response.json().orderId;
            _this.logOrderSavedEvent();
            _this.showOrderSavedAlert();
            loading.dismiss();
        });
    };
    NewOrderFormPage.prototype.showOrderSavedAlert = function () {
        var _this = this;
        this.resetOrder();
        this.alertCtrl.create({
            title: "Sipariş başarıyla kaydedildi",
            message: "Detaylara gitmek ister misiniz?",
            buttons: [
                {
                    text: "Hayır"
                },
                {
                    text: "Evet",
                    handler: function () {
                        _this.goToOrderDetailsPage();
                    }
                }
            ]
        }).present();
    };
    NewOrderFormPage.prototype.resetOrder = function () {
        this.order = {
            customer: {
                identificationNumber: "",
                name: "",
                telephones: ["", ""],
                email: "",
                address: {
                    line: "",
                    city: "İstanbul",
                    district: "",
                    note: ""
                }
            },
            orderDetails: {
                orderDate: new Date(),
                deliveryDate: (new Date()).toISOString(),
                personnel: this.auth.getUser(),
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
                    personnel: this.auth.getUser(),
                    installments: null,
                    bank: "",
                    date: new Date()
                }
            ]
        };
    };
    NewOrderFormPage.prototype.goToOrderDetailsPage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_details_order_details__["a" /* OrderDetailsPage */], {
            orderId: this.orderId
        }).then(function () { return _this.orderId = ""; });
    };
    return NewOrderFormPage;
}());
NewOrderFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-order-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/new-order-form/new-order-form.html"*/'<!--\n  Generated template for the NewOrderFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Yeni Sipariş Formu</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSavingAlert()" [disabled]="!siparisForm.form.valid" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #siparisForm="ngForm">\n    <ion-grid>\n      <ion-row>\n        <!-- Müşteri -->\n        <ion-col>\n          <ion-card>\n            <ion-card-header>Müşteri</ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <label ion-item>\n                  <ion-label fixed>*TC Kimlik</ion-label>\n                  <ion-input name="identificationNumber" maxLength="11" [(ngModel)]="order.customer.identificationNumber" type="tel"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>*İsim</ion-label>\n                  <ion-input name="name" [(ngModel)]="order.customer.name"></ion-input>\n                </label>\n\n                <ion-item-divider></ion-item-divider>\n\n                <label ion-item>\n                  <ion-label fixed>Telefon 1</ion-label>\n                  <ion-input name="telephone1" [(ngModel)]="order.customer.telephones[0]"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Telefon 2</ion-label>\n                  <ion-input name="telephone2" [(ngModel)]="order.customer.telephones[1]"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Email</ion-label>\n                  <ion-input name="email" [(ngModel)]="order.customer.email"></ion-input>\n                </label>\n\n                <ion-item-divider></ion-item-divider>\n\n                <label ion-item>\n                  <ion-label fixed>Adres Satırı</ion-label>\n                  <ion-textarea name="addressLine" [(ngModel)]="order.customer.address.line"></ion-textarea>\n                </label>\n\n                <label ion-item>\n                  <ion-label>Şehir</ion-label>\n                  <ion-select\n                    name="city"\n                    [(ngModel)]="order.customer.address.city"\n                    (ionChange)="citySelected($event)"\n                  >\n                    <ion-option *ngFor="let city of cityDistrictProvider.getCities()">{{ city }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>İlçe</ion-label>\n                  <ion-input\n                    name="addressDistrict"\n                    [(ngModel)]="order.customer.address.district"\n                  ></ion-input>\n                  <!-- <ion-select\n                    name="addressDistrict"\n                    [disabled]="!order.customer.address.city"\n                    [(ngModel)]="order.customer.address.district"\n                  >\n                    <ion-option *ngFor="let district of cityDistrictProvider.ilceler">{{ district }}</ion-option>\n                  </ion-select> -->\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Adres Not</ion-label>\n                  <ion-textarea name="addressNote" [(ngModel)]="order.customer.address.note"></ion-textarea>\n                </label>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <!-- Sipariş ve Kapora -->\n        <ion-col>\n          <!-- Sipariş -->\n          <ion-card>\n            <ion-card-header>Sipariş</ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <label ion-item>\n                  <ion-label>İş Teslim Tarihi</ion-label>\n                  <ion-datetime \n                    name="deliveryDate" \n                    [(ngModel)]="order.orderDetails.deliveryDate"\n                  ></ion-datetime>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Sipariş Tutarı</ion-label>\n                  <ion-input name="orderAmount" [(ngModel)]="order.orderDetails.amount" type="number"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label>Para Birimi</ion-label>\n                  <ion-select name="orderCurrency" [(ngModel)]="order.orderDetails.currency">\n                    <ion-option *ngFor="let currency of pds.currencies">{{ currency }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Sipariş Not</ion-label>\n                  <ion-textarea name="orderNote" [(ngModel)]="order.orderDetails.note"></ion-textarea>\n                </label>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n\n          <!-- Kapora -->\n          <ion-card *ngIf="order.payments.length > 0">\n            <ion-card-header>Kapora</ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <label ion-item>\n                  <ion-label>Ödeme Türü</ion-label>\n                  <ion-select name="paymentType" [(ngModel)]="order.payments[0].type">\n                    <ion-option *ngFor="let paymentType of pds.paymentTypes">{{ paymentType }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label ion-item>\n                  <ion-label fixed>Tutar</ion-label>\n                  <ion-input name="paymentAmount" [(ngModel)]="order.payments[0].amount" type="number"></ion-input>\n                </label>\n\n                <label ion-item>\n                  <ion-label>Para Birimi</ion-label>\n                  <ion-select name="paymentCurrency" [(ngModel)]="order.payments[0].currency">\n                    <ion-option *ngFor="let currency of pds.currencies">{{ currency }}</ion-option>\n                  </ion-select>\n                </label>\n\n                <label *ngIf="order.payments[0].type == \'Kredi Kartı\'" ion-item>\n                  <ion-label fixed>Taksit Sayısı</ion-label>\n                  <ion-input name="installments" [(ngModel)]="order.payments[0].installments" type="number"></ion-input>\n                </label>\n\n                <label *ngIf="order.payments[0].type == \'Kredi Kartı\'" ion-item>\n                  <ion-label>Banka</ion-label>\n                  <ion-select name="paymentBank" [(ngModel)]="order.payments[0].bank">\n                    <ion-option *ngFor="let bank of pds.banks">{{ bank }}</ion-option>\n                  </ion-select>\n                </label>\n                <!--\n                <label ion-item>\n                  <ion-label fixed>Ödeme Not</ion-label>\n                  <ion-textarea name="paymentNote" [(ngModel)]="order.payments[0].note"></ion-textarea>\n                </label>\n                -->\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/new-order-form/new-order-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_Database_Service_Providers_order_db_service_order_db_service__["a" /* OrderDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_Database_Service_Providers_event_db_service_event_db_service__["a" /* EventDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_Database_Service_Providers_payment_db_service_payment_db_service__["a" /* PaymentDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_city_district_city_district__["a" /* CityDistrictProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_onesignal_notification_onesignal_notification__["a" /* OnesignalNotificationProvider */]])
], NewOrderFormPage);

//# sourceMappingURL=new-order-form.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details_order_details__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_order_db_service_order_db_service__ = __webpack_require__(34);
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
    function OrdersListPage(navCtrl, loadingCtrl, navParams, ods, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.ods = ods;
        this.alertCtrl = alertCtrl;
        this.orders = [];
        this.lastOrderId = "";
        this.infiniteScrollEnable = true;
        var loading = this.loadingCtrl.create({ content: "Siparişler yükleniyor..." });
        loading.present();
        this.getOrders().then(function () {
            loading.dismiss();
        });
    }
    OrdersListPage.prototype.deneme = function () {
    };
    OrdersListPage.prototype.deleteOrder = function (orderId, index) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Sipariş siliniyor..." });
        loading.present();
        this.ods.deleteOrder(orderId).subscribe(function (response) {
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
    OrdersListPage.prototype.getOrders = function (searchbarText) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ods.getOrdersList(searchbarText, _this.lastOrderId, 10).subscribe(function (response) {
                _this.orders = response.json();
                _this.lastOrderId = _this.orders[_this.orders.length - 1]._id;
                _this.infiniteScrollEnable = true;
                resolve();
            });
        });
    };
    OrdersListPage.prototype.refreshOrders = function (refresher) {
        delete this.lastOrderId;
        if (!refresher) {
            var loading_1 = this.loadingCtrl.create({ content: "Sipariş listesi yenileniyor..." });
            loading_1.present();
            this.getOrders().then(function () { return loading_1.dismiss(); });
        }
        else {
            this.getOrders().then(function () { return refresher.complete(); });
        }
        this.infiniteScrollEnable = true;
    };
    OrdersListPage.prototype.getMoreOrders = function (infiniteScroll) {
        var _this = this;
        this.ods.getOrdersList(undefined, this.lastOrderId, 10).subscribe(function (response) {
            console.log(response.json());
            (_a = _this.orders).push.apply(_a, response.json());
            if (_this.lastOrderId == _this.orders[_this.orders.length - 1]._id)
                _this.infiniteScrollEnable = false;
            _this.lastOrderId = _this.orders[_this.orders.length - 1]._id;
            console.log(_this.lastOrderId);
            infiniteScroll.complete();
            var _a;
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
        selector: 'page-orders-list',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/orders-list/orders-list.html"*/'<!--\n  Generated template for the OrdersListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Siparişler</ion-title>\n\n    <ion-buttons end>\n      <button (click)="refreshOrders()" ion-button>\n        <ion-icon md="md-refresh" ios="ios-refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar color="navBarColor">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-toolbar color="navBarColor">\n    <ion-item color="navBarColor">\n      <ion-label>Müşteri</ion-label>\n      <ion-label>Sipariş Tutarı</ion-label>\n      <ion-label>Kalan tutar</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="refreshOrders($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let order of orders; let i = index">\n      <ion-item (click)="showOrdersDetails(order._id)">\n        <ion-label>{{ order.customer.name }}</ion-label>\n        <!-- \n          <ion-label>{{ order.orderDetails.orderDate }}</ion-label>\n          <ion-label>{{ order.orderDetails.deliveryDate }}</ion-label>\n          <ion-label>{{ order.orderDetails.personnel }}</ion-label>\n        -->\n        <ion-label>{{ order.orderDetails.amount }} {{ order.orderDetails.currency }}</ion-label>\n        <ion-label>{{ order.orderDetails.amount - (order.payments | calculateBalance) }} {{ order.orderDetails.currency }}</ion-label>\n      </ion-item>\n\n      <ion-item-options>\n        <button color="danger" (click)="presentDeletionWarning(order._id, i)" ion-button>Sil</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-infinite-scroll disabled="!infiniteScrollEnable" (ionInfinite)="getMoreOrders($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/orders-list/orders-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_order_db_service_order_db_service__["a" /* OrderDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], OrdersListPage);

//# sourceMappingURL=orders-list.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_product_db_service_product_db_service__ = __webpack_require__(111);
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
    function ProductFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, pds, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.pds = pds;
        this.events = events;
        this.total = 0.0;
        this.mode = this.navParams.get('mode');
        this.productIndex = this.navParams.get('productIndex');
        this.orderId = this.navParams.get('orderId');
        if (this.mode == 'edit') {
            this.product = JSON.parse(JSON.stringify(this.navParams.get('product')));
            this.calculateTotal();
        }
        else if (this.orderId) {
            this.product = {
                type: "Kumaş",
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
    ProductFormPage.prototype.calculateTotal = function () {
        var laborCost = this.product.laborCost ? parseFloat(this.product.laborCost) : 0.0;
        var unitPrice = this.product.unitPrice ? parseFloat(this.product.unitPrice) : 0.0;
        var quantity = this.product.quantity ? parseFloat(this.product.quantity) : 0.0;
        this.total = quantity * (unitPrice + laborCost);
    };
    ProductFormPage.prototype.convertProductPropsStringToNumber = function () {
        this.product.unitPrice = this.product.unitPrice ? parseFloat(this.product.unitPrice) : 0.0;
        this.product.quantity = this.product.quantity ? parseFloat(this.product.quantity) : 0.0;
    };
    ProductFormPage.prototype.setProducts = function (property, e) {
        switch (property) {
            case 'unitPrice':
                this.product.unitPrice = (e.value ? Number(e.value) : 0.0);
                break;
            case 'quantity':
                this.product.quantity = (e.value ? Number(e.value) : 0.0);
                break;
            default:
                break;
        }
    };
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
                        _this.convertProductPropsStringToNumber();
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
        this.pds.updateProduct(this.product._id, this.product).subscribe(function (response) {
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
        this.pds.insertProduct(this.orderId, this.product).subscribe(function (response) {
            if (response.json().result) {
                _this.product._id = response.json().productId;
                _this.events.publish("product:added", _this.product);
            }
            loading.dismiss().then(function () { return _this.navCtrl.pop(); });
        });
    };
    return ProductFormPage;
}());
ProductFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/forms/product-form/product-form.html"*/'<ion-header>\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>{{ mode == \'new\' ? \'Yeni Ürün\' : \'Ürünü Düzenle\' }}</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label>Ürün Kategori</ion-label>\n        <ion-select name="productType" [(ngModel)]="product.type">\n          <ion-option *ngFor="let type of pds.types">{{ type }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Desen Kodu</ion-label>\n        <ion-input name="patternCode" [(ngModel)]="product.patternCode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Renk Kodu</ion-label>\n        <ion-input name="colorCode" [(ngModel)]="product.colorCode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Cins</ion-label>\n        <ion-input name="varietyCode" [(ngModel)]="product.varietyCode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Miktar</ion-label>\n        <ion-input type="number" name="quantity" (ionChange)="calculateTotal()" [(ngModel)]="product.quantity"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Birim Fiyat</ion-label>\n        <ion-input type="number" name="unitPrice" (ionChange)="calculateTotal()" [(ngModel)]="product.unitPrice"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Tutar</ion-label>\n        <ion-input [disabled]="true" [value]="total"></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/forms/product-form/product-form.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_product_db_service_product_db_service__["a" /* ProductDbServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_product_db_service_product_db_service__["a" /* ProductDbServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _f || Object])
], ProductFormPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=product-form.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_payment_db_service_payment_db_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_Database_Service_Providers_event_db_service_event_db_service__ = __webpack_require__(51);
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
    function PaymentFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, pds, eds, events, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.pds = pds;
        this.eds = eds;
        this.events = events;
        this.auth = auth;
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
                personnel: this.auth.getUser(),
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
        this.pds.insertPayment(this.orderId, this.payment).subscribe(function (response) {
            if (response.json().result) {
                _this.payment._id = response.json().paymentId;
                _this.events.publish("payment:added", _this.payment);
                if (_this.payment.amount) {
                    _this.eds.logEvent("Yeni Ödeme", _this.payment.personnel + " taraf\u0131ndan " + _this.payment.amount + " " + _this.payment.currency + " tutar\u0131nda \u00F6deme al\u0131nd\u0131", _this.payment.personnel, _this.payment.date);
                }
            }
            loading.dismiss();
            _this.navCtrl.pop();
        });
    };
    PaymentFormPage.prototype.saveChanges = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Değişiklikler kaydediliyor..." });
        loading.present();
        this.pds.updatePayment(this.paymentId, this.payment).subscribe(function (response) {
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
        selector: 'page-payment-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/forms/payment-form/payment-form.html"*/'<!--\n  Generated template for the PaymentFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>{{ mode == \'new\' ? \'Yeni Ödeme Formu\' : \'Ödeme Düzenleme Formu\' }}</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form *ngIf="payment">\n    <ion-list>\n      <ion-item>\n        <ion-label>Ödeme Türü</ion-label>\n        <ion-select name="type" [(ngModel)]="payment.type">\n          <ion-option *ngFor="let type of pds.paymentTypes">{{ type }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Tutar</ion-label>\n        <ion-input\n          type="number"\n          name="amount"\n          [(ngModel)]="payment.amount"\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Para Birimi</ion-label>\n        <ion-select name="currency" [(ngModel)]="payment.currency">\n          <ion-option *ngFor="let currency of pds.currencies">{{ currency }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="payment.type == \'Kredi Kartı\'">\n        <ion-label fixed>Taksit Sayısı</ion-label>\n        <ion-input\n          type="number"\n          name="installments"\n          [(ngModel)]="payment.installments"\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="payment.type == \'Kredi Kartı\'">\n        <ion-label>Banka</ion-label>\n        <ion-select name="bank" [(ngModel)]="payment.bank">\n          <ion-option *ngFor="let bank of pds.banks">{{ bank }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!--\n      <ion-item>\n        <ion-label fixed>Not</ion-label>\n        <ion-textarea\n          name="note"\n          [(ngModel)]="payment.note"\n        >\n        </ion-textarea>\n      </ion-item>\n      -->\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/forms/payment-form/payment-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_payment_db_service_payment_db_service__["a" /* PaymentDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_Database_Service_Providers_event_db_service_event_db_service__["a" /* EventDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], PaymentFormPage);

//# sourceMappingURL=payment-form.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_city_district_city_district__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_customer_db_service_customer_db_service__ = __webpack_require__(52);
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
    function CustomerFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, cds, events, cityDistrictProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.cds = cds;
        this.events = events;
        this.cityDistrictProvider = cityDistrictProvider;
        this.customer = JSON.parse(JSON.stringify(this.navParams.get('customer')));
        if (!this.customer) {
            this.navCtrl.pop();
        }
    }
    CustomerFormPage.prototype.citySelected = function (city) {
        this.customer.address.district = "";
        this.cityDistrictProvider.getCounties(city);
    };
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
        this.cds.updateCustomerInformation(this.customer._id, this.customer).subscribe(function (response) {
            loading.dismiss().then(function () { return _this.navCtrl.pop(); });
            _this.events.publish("customer:updated", _this.customer);
        });
    };
    return CustomerFormPage;
}());
CustomerFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/forms/customer-form/customer-form.html"*/'<!--\n  Generated template for the CustomerFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>Müşteri Bilgileri Düzenleme Formu</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>TC Kimlik</ion-label>\n        <ion-input type="tel" maxLength="11" name="identificationNumber" [(ngModel)]="customer.identificationNumber"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>İsim</ion-label>\n        <ion-input name="name" [(ngModel)]="customer.name"></ion-input>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item>\n        <ion-label fixed>Telefon 1</ion-label>\n        <ion-input name="telephone1" [(ngModel)]="customer.telephones[0]"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Telefon 2</ion-label>\n        <ion-input name="telephone2" [(ngModel)]="customer.telephones[1]"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input name="email" [(ngModel)]="customer.email"></ion-input>\n      </ion-item>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item>\n        <ion-label fixed>Adres Satırı</ion-label>\n        <ion-textarea name="addressLine" [(ngModel)]="customer.address.line"></ion-textarea>\n      </ion-item>\n\n      <label ion-item>\n        <ion-label>Şehir</ion-label>\n        <ion-select\n          name="city"\n          [(ngModel)]="customer.address.city"\n          (ionChange)="citySelected($event)"\n        >\n          <ion-option *ngFor="let city of cityDistrictProvider.getCities()">{{ city }}</ion-option>\n        </ion-select>\n      </label>\n\n      <label ion-item>\n        <ion-label>İlçe</ion-label>\n        <ion-input\n          fixed\n          name="addressDistrict"\n          [(ngModel)]="customer.address.district"\n        ></ion-input>\n        <!-- <ion-select\n          name="addressDistrict"\n          [disabled]="!customer.address.city"\n          [(ngModel)]="customer.address.district"\n        >\n          <ion-option *ngFor="let district of cityDistrictProvider.ilceler">{{ district }}</ion-option>\n        </ion-select> -->\n      </label>\n\n\n      <ion-item>\n        <ion-label fixed>Adres Not</ion-label>\n        <ion-input name="addressNote" [(ngModel)]="customer.address.note"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/forms/customer-form/customer-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_customer_db_service_customer_db_service__["a" /* CustomerDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_city_district_city_district__["a" /* CityDistrictProvider */]])
], CustomerFormPage);

//# sourceMappingURL=customer-form.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_order_db_service_order_db_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_payment_db_service_payment_db_service__ = __webpack_require__(44);
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
    function OrderDetailsFormPage(navCtrl, navParams, alertCtrl, loadingCtrl, ods, pds, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.ods = ods;
        this.pds = pds;
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
        this.ods.updateOrderInformation(this.orderId, this.orderDetails).subscribe(function (response) {
            loading.dismiss().then(function () { return _this.navCtrl.pop(); });
            _this.events.publish("orderDetails:updated", _this.orderDetails);
        });
    };
    return OrderDetailsFormPage;
}());
OrderDetailsFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-details-form',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/forms/order-details-form/order-details-form.html"*/'<!--\n  Generated template for the OrderInformationFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-buttons start>\n      <button navPop ion-button>Vazgeç</button>\n    </ion-buttons>\n\n    <ion-title>Sipariş Detayları Düzenleme Formu</ion-title>\n\n    <ion-buttons end>\n      <button (click)="showSubmitAlert()" ion-button>Kaydet</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label>Sipariş Tarihi</ion-label>\n        <ion-datetime name="orderDate" [(ngModel)]="orderDetails.orderDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>İş Teslim Tarihi</ion-label>\n        <ion-datetime name="deliveryDate" [(ngModel)]="orderDetails.deliveryDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Tutar</ion-label>\n        <ion-input type="number" name="amount" [(ngModel)]="orderDetails.amount">\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Para Birimi</ion-label>\n        <ion-select name="currency" [(ngModel)]="orderDetails.currency">\n          <ion-option *ngFor="let currency of pds.currencies">{{ currency }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Personel</ion-label>\n        <ion-select name="personnel" [(ngModel)]="orderDetails.personnel">\n          <ion-option *ngFor="let personnel of personnels">{{ personnel }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Not</ion-label>\n        <ion-textarea name="note" [(ngModel)]="orderDetails.note"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/forms/order-details-form/order-details-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_Database_Service_Providers_order_db_service_order_db_service__["a" /* OrderDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_payment_db_service_payment_db_service__["a" /* PaymentDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], OrderDetailsFormPage);

//# sourceMappingURL=order-details-form.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_new_order_form_new_order_form__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_orders_list_orders_list__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_order_details_order_details__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_details_components_forms_product_form_product_form__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_order_details_components_forms_payment_form_payment_form__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_order_details_components_forms_customer_form_customer_form__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_order_details_components_forms_order_details_form_order_details_form__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_order_details_components_panels_products_list_card_products_list_card__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_order_details_components_panels_payments_list_card_payments_list_card__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_order_details_components_panels_order_details_card_order_details_card__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_order_details_components_panels_customer_details_card_customer_details_card__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_onesignal_notification_onesignal_notification__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_city_district_city_district__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_calculate_balance_calculate_balance__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_format_date_format_date__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_Database_Service_Providers_order_db_service_order_db_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_Database_Service_Providers_customer_db_service_customer_db_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_Database_Service_Providers_product_db_service_product_db_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_Database_Service_Providers_payment_db_service_payment_db_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_Database_Service_Providers_event_db_service_event_db_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_globals_globals__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_customer_list_customer_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_customer_details_customer_details__ = __webpack_require__(113);
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
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_new_order_form_new_order_form__["a" /* NewOrderFormPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_orders_list_orders_list__["a" /* OrdersListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_order_details_order_details__["a" /* OrderDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_customer_list_customer_list__["a" /* CustomerListPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_customer_details_customer_details__["a" /* CustomerDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_order_details_components_forms_customer_form_customer_form__["a" /* CustomerFormPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_order_details_components_forms_order_details_form_order_details_form__["a" /* OrderDetailsFormPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_details_components_forms_product_form_product_form__["a" /* ProductFormPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_order_details_components_forms_payment_form_payment_form__["a" /* PaymentFormPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_order_details_components_panels_customer_details_card_customer_details_card__["a" /* CustomerDetailsCardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_order_details_components_panels_order_details_card_order_details_card__["a" /* OrderDetailsCardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_order_details_components_panels_payments_list_card_payments_list_card__["a" /* PaymentsListCardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_order_details_components_panels_products_list_card_products_list_card__["a" /* ProductsListCardComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pipes_format_date_format_date__["a" /* FormatDatePipe */],
            __WEBPACK_IMPORTED_MODULE_24__pipes_calculate_balance_calculate_balance__["a" /* CalculateBalancePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
                monthShortNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
                dayNames: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
                dayShortNames: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
            }, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer-details/customer-details.module#CustomerDetailsPageModule', name: 'CustomerDetailsPage', segment: 'customer-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer-list/customer-list.module#CustomerListPageModule', name: 'CustomerListPage', segment: 'customer-list', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_new_order_form_new_order_form__["a" /* NewOrderFormPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_orders_list_orders_list__["a" /* OrdersListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_order_details_order_details__["a" /* OrderDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_customer_list_customer_list__["a" /* CustomerListPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_customer_details_customer_details__["a" /* CustomerDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_order_details_components_forms_customer_form_customer_form__["a" /* CustomerFormPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_order_details_components_forms_order_details_form_order_details_form__["a" /* OrderDetailsFormPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_details_components_forms_product_form_product_form__["a" /* ProductFormPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_order_details_components_forms_payment_form_payment_form__["a" /* PaymentFormPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_22__providers_onesignal_notification_onesignal_notification__["a" /* OnesignalNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_city_district_city_district__["a" /* CityDistrictProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_Database_Service_Providers_order_db_service_order_db_service__["a" /* OrderDbServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_Database_Service_Providers_customer_db_service_customer_db_service__["a" /* CustomerDbServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_Database_Service_Providers_product_db_service_product_db_service__["a" /* ProductDbServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_Database_Service_Providers_payment_db_service_payment_db_service__["a" /* PaymentDbServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_Database_Service_Providers_event_db_service_event_db_service__["a" /* EventDbServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_31__providers_globals_globals__["a" /* GlobalsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_order_form_new_order_form__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_orders_list_orders_list__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_onesignal_notification_onesignal_notification__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_customer_list_customer_list__ = __webpack_require__(114);
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
    function MyApp(platform, statusBar, splashScreen, onesignal) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.onesignal = onesignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Anasayfa', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Yeni Sipariş Formu', component: __WEBPACK_IMPORTED_MODULE_5__pages_new_order_form_new_order_form__["a" /* NewOrderFormPage */] },
            { title: 'Siparişler', component: __WEBPACK_IMPORTED_MODULE_6__pages_orders_list_orders_list__["a" /* OrdersListPage */] },
            { title: 'Müşteriler', component: __WEBPACK_IMPORTED_MODULE_9__pages_customer_list_customer_list__["a" /* CustomerListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (window["plugins"]) {
                var notificationOpenedCallback = function (jsonData) {
                    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                };
                window["plugins"].OneSignal
                    .startInit(_this.onesignal.appId, _this.onesignal.androidProjectNumber)
                    .handleNotificationOpened(notificationOpenedCallback)
                    .endInit();
            }
            else {
                console.log("Notifications are GG my friend");
            }
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="navBarColor">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_8__providers_onesignal_notification_onesignal_notification__["a" /* OnesignalNotificationProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_product_form_product_form__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_product_db_service_product_db_service__ = __webpack_require__(111);
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
    function ProductsListCardComponent(modalCtrl, alertCtrl, loadingCtrl, events, pds) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.pds = pds;
        this.totalQuantity = 0.0;
        this.totalAmount = 0.0;
        this.laborCost = 0.0;
        this.events.subscribe("product:added", function (data) {
            _this.products.push(data);
            _this.totalAmount += data.quantity * data.unitPrice;
            _this.totalQuantity += data.quantity;
        });
        this.events.subscribe("product:updated", function (data) {
            _this.products[data.index].type = data.product.type;
            _this.products[data.index].patternCode = data.product.patternCode;
            _this.products[data.index].colorCode = data.product.colorCode;
            _this.products[data.index].varietyCode = data.product.varietyCode;
            _this.products[data.index].unitPrice = data.product.unitPrice;
            _this.products[data.index].laborCost = data.product.laborCost;
            _this.products[data.index].quantity = data.product.quantity;
            _this.calculateTotalAmountAndQuantity();
        });
    }
    ProductsListCardComponent.prototype.ngOnInit = function () {
        this.calculateTotalAmountAndQuantity();
    };
    ProductsListCardComponent.prototype.calculateTotalAmountAndQuantity = function () {
        this.totalAmount = 0.0;
        this.totalQuantity = 0.0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            this.totalAmount += product.quantity * product.unitPrice;
            this.totalQuantity += product.quantity;
        }
        this.totalAmount += this.totalQuantity * this.laborCost;
    };
    ProductsListCardComponent.prototype.showLaborCostAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "İşçilik",
            subTitle: "İşçilik birim fiyatını giriniz",
            inputs: [
                {
                    placeholder: "İşçilik Birim Fiyat",
                    min: 0.0,
                    value: '' + this.laborCost,
                    id: "laborCostField",
                    name: "laborCost"
                }
            ],
            buttons: [
                {
                    text: "Kaydet",
                    handler: function (data) {
                        _this.laborCost = Number(data.laborCost);
                        _this.calculateTotalAmountAndQuantity();
                    }
                },
                {
                    text: "Vazgeç"
                }
            ]
        });
        alert.present();
    };
    ProductsListCardComponent.prototype.showProductMenuAlert = function (product, index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Ürün Menüsü",
            subTitle: "Ne yapmak istiyorsunuz?",
            buttons: [
                {
                    text: "Düzenle",
                    handler: function () {
                        _this.presentModallyProductFormPage('edit', product, index);
                    }
                },
                {
                    text: "Sil",
                    handler: function () {
                        _this.presentDeletionWarning(product._id, index);
                    }
                },
                {
                    text: "Geri Dön"
                }
            ]
        });
        alert.present();
    };
    ProductsListCardComponent.prototype.deleteProduct = function (productId, index) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Ürün siliniyor..." });
        loading.present();
        this.pds.deleteProduct(productId).subscribe(function (response) {
            _this.totalAmount -= _this.products[index].quantity * _this.products[index].unitPrice;
            _this.totalQuantity -= _this.products[index].quantity;
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
    __metadata("design:type", Object)
], ProductsListCardComponent.prototype, "products", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ProductsListCardComponent.prototype, "orderId", void 0);
ProductsListCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'products-list-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/panels/products-list-card/products-list-card.html"*/'<ion-card>\n  <ion-item color="secondBarColor">\n    <h2 style="color: white">Ürünler</h2>\n    <button color="light" (click)="presentModallyProductFormPage(\'new\', undefined, undefined)" outline icon-left item-right ion-button>\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>Yeni\n    </button>\n  </ion-item>\n\n  <ion-item color="secondBarColor">\n        <ion-label>Desen/Renk</ion-label>\n        <ion-label>Cins</ion-label>\n        <ion-label>Miktar</ion-label>\n        <ion-label>Birim Fiyat</ion-label>\n        <ion-label>Tutar</ion-label>\n        <button item end ion-button clear disable></button>\n      </ion-item>\n\n  <ion-card-content style="margin-top: 12px">\n    <ion-list>\n      \n\n      <ion-item-sliding *ngFor="let product of products; let i = index">\n        <button (click)="showProductMenuAlert(product, i)" ion-item>\n          <ion-label>{{ product.patternCode }}/{{ product.colorCode }}</ion-label>\n          <ion-label>{{ product.varietyCode }}</ion-label>\n          <ion-label>{{ product.quantity }}</ion-label>\n          <ion-label>{{ product.unitPrice }} TRY</ion-label>\n          <ion-label>{{ product.quantity * product.unitPrice }}</ion-label>\n\n          <!-- <button item-end (click)="showProductMenuAlert(product, i)" ion-button clear>\n            <ion-icon md="md-more" ios="ios-more"></ion-icon>\n          </button> -->\n        </button>\n\n        <ion-item-options>\n          <button (click)="presentModallyProductFormPage(\'edit\', product, i)" ion-button>Düzenle</button>\n          <button (click)="presentDeletionWarning(product._id, i)" color="danger" ion-button>Sil</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n  </ion-card-content>\n\n  <ion-item color="secondary" (click)="showLaborCostAlert()">\n        <ion-label>İşçilik</ion-label>\n        <ion-label></ion-label>\n        <ion-label>{{ totalQuantity }}</ion-label>\n        <ion-label>{{ laborCost }}</ion-label>\n        <ion-label>{{ totalQuantity * laborCost }} TRY</ion-label>\n      </ion-item>\n\n  <ion-item color="navBarColor">\n        <ion-label>Toplam Tutar</ion-label>\n        <ion-label></ion-label>\n        <ion-label></ion-label>\n        <ion-label></ion-label>\n        <ion-label>{{ totalAmount }} TRY</ion-label>\n      </ion-item>\n</ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/panels/products-list-card/products-list-card.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_product_db_service_product_db_service__["a" /* ProductDbServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_product_db_service_product_db_service__["a" /* ProductDbServiceProvider */]) === "function" && _e || Object])
], ProductsListCardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=products-list-card.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsListCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_payment_form_payment_form__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_payment_db_service_payment_db_service__ = __webpack_require__(44);
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
    function PaymentsListCardComponent(modalCtrl, alertCtrl, loadingCtrl, pds, events) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.pds = pds;
        this.events = events;
        console.log(this.orderId);
        this.events.subscribe("payment:added", function (data) { return _this.payments.push(data); });
        this.events.subscribe("payment:updated", function (data) {
            _this.payments[data.index].type = data.payment.type;
            _this.payments[data.index].amount = data.payment.amount;
            _this.payments[data.index].currency = data.payment.currency;
            _this.payments[data.index].installments = data.payment.installments;
            _this.payments[data.index].bank = data.payment.bank;
        });
    }
    PaymentsListCardComponent.prototype.showPaymentMenuAlert = function (payment, index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Ödeme Menüsü",
            subTitle: "Ne yapmak istiyorsunuz?",
            buttons: [
                {
                    text: "Düzenle",
                    handler: function () {
                        _this.presentModallyPaymentFormPage('edit', payment, index);
                    }
                },
                {
                    text: "Sil",
                    handler: function () {
                        _this.presentDeletionWarning(payment._id, index);
                    }
                },
                {
                    text: "Geri Dön"
                }
            ]
        });
        alert.present();
    };
    PaymentsListCardComponent.prototype.deletePayment = function (paymentId, index) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Ödeme siliniyor..." });
        loading.present();
        this.pds.deletePayment(paymentId).subscribe(function (response) {
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
    PaymentsListCardComponent.prototype.presentModallyPaymentFormPage = function (mode, payment, index) {
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
        selector: 'payments-list-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/panels/payments-list-card/payments-list-card.html"*/'<ion-card>\n  <ion-item color="secondBarColor">\n    <h2 style="color: white">Ödemeler</h2>\n    <button color="light" (click)="presentModallyPaymentFormPage(\'new\', -1, undefined)" outline icon-left item-right ion-button>\n              <ion-icon ios="ios-add" md="md-add"></ion-icon>Yeni\n            </button>\n  </ion-item>\n\n  <ion-card-content style="margin-top: 12px">\n    <ion-list>\n      <ion-item-sliding *ngFor="let payment of payments; let i = index">\n        <ion-item>\n\n            <h1>{{ payment.amount }} {{ payment.currency }}</h1>\n            <h2 *ngIf="payment.type == \'Kredi Kartı\'">{{ payment.installments + " Taksit | " + payment.bank }}</h2>\n            <h3>{{ payment.personnel ? payment.personnel : "---" }} | {{ payment.date ? (payment.date | formatDate) : "---" }}</h3>\n            <!--<p *ngIf="payment.note">{{ payment.note }}</p>-->\n            <button item-end (click)="showPaymentMenuAlert(payment, i)" ion-button clear>\n              <ion-icon md="md-more" ios="ios-more"></ion-icon>\n            </button>\n        </ion-item>\n\n        <ion-item-options *ngIf="false">\n          <button (click)="presentModallyPaymentFormPage(\'edit\', payment, i)" ion-button>DÜZENLE</button>\n          <button (click)="presentDeletionWarning(payment._id, i)" color="danger" ion-button>SİL</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/panels/payments-list-card/payments-list-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_payment_db_service_payment_db_service__["a" /* PaymentDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], PaymentsListCardComponent);

//# sourceMappingURL=payments-list-card.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_order_details_form_order_details_form__ = __webpack_require__(214);
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
    function OrderDetailsCardComponent(modalCtrl, events) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.events.subscribe("orderDetails:updated", function (data) {
            _this.orderDetails = {
                orderDate: data.orderDate,
                deliveryDate: data.deliveryDate,
                personnel: data.personnel,
                amount: data.amount,
                currency: data.currency,
                note: data.note
            };
        });
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], OrderDetailsCardComponent.prototype, "balance", void 0);
OrderDetailsCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'order-details-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/panels/order-details-card/order-details-card.html"*/'<ion-card>\n  <ion-item color="secondBarColor">\n    <h2 style="color: white">Sipariş</h2>\n    <button color="light" (click)="presentModallyOrderDetailsFormPage()" outline icon-left item-right ion-button>\n                <ion-icon ios="ios-create" md="md-create"></ion-icon>Düzenle\n              </button>\n  </ion-item>\n\n  <ion-card-content style="margin-top: 12px">\n    <ion-list>\n      <ion-item *ngIf="orderDetails?.amount && orderDetails?.currency">\n        <ion-label>Sipariş Tutarı</ion-label>\n        <ion-label>{{ orderDetails?.amount }} {{ orderDetails?.currency }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Kalan Tutar</ion-label>\n        <ion-label>{{ orderDetails?.amount - balance }} {{ orderDetails?.currency }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="orderDetails?.orderDate">\n        <ion-label>Sipariş Tarihi</ion-label>\n        <ion-label>{{ orderDetails?.orderDate | formatDate }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="orderDetails?.deliveryDate">\n        <ion-label>İş Teslim Tarihi</ion-label>\n        <ion-label>{{ orderDetails?.deliveryDate | formatDate }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="orderDetails?.personnel">\n        <ion-label>Personel</ion-label>\n        <ion-label>{{ orderDetails?.personnel }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="orderDetails?.note">\n        <ion-label>Sipariş Not</ion-label>\n        <ion-label>{{ orderDetails?.note }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/panels/order-details-card/order-details-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], OrderDetailsCardComponent);

//# sourceMappingURL=order-details-card.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_customer_form_customer_form__ = __webpack_require__(213);
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
    function CustomerDetailsCardComponent(modalCtrl, events) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.events.subscribe("customer:updated", function (data) { return _this.customer = data; });
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
        selector: 'customer-details-card',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/panels/customer-details-card/customer-details-card.html"*/'<ion-card>\n  <ion-item color="secondBarColor">\n    <h2 style="color: white">Müşteri</h2>\n    <button (click)="presentModallyCustomerFormPage()" color="light" item-right outline icon-left ion-button>\n      <ion-icon ios="ios-create" md="md-create"></ion-icon>Düzenle\n    </button>\n  </ion-item>\n\n  <ion-card-content style="margin-top: 12px">\n    <ion-list>\n      <ion-item *ngIf="customer?.identificationNumber">\n        <ion-label>TC Kimlik No</ion-label>\n        <ion-label>{{ customer?.identificationNumber }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.name">\n        <ion-label>İsim Soyisim</ion-label>\n        <ion-label>{{ customer?.name }}</ion-label>\n      </ion-item>\n      \n      <ion-item *ngIf="customer?.telephones[0]">\n        <ion-label>Telefon 1</ion-label>\n        <ion-label>{{ customer?.telephones[0] }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.telephones[1]">\n        <ion-label>Telefon 2</ion-label>\n        <ion-label>{{ customer?.telephones[1] }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.email">\n        <ion-label>Email</ion-label>\n        <ion-label>{{ customer?.email }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.address?.line">\n        <ion-label>Adres Satırı</ion-label>\n        <ion-label>{{ customer?.address?.line }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.address?.district || customer?.address?.city">\n        <ion-label>İlçe / Şehir</ion-label>\n        <ion-label>{{ customer?.address?.district ? customer?.address?.district : \'---\' }} / {{ customer?.address?.city ? customer?.address?.city : \'---\' }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf="customer?.address?.note">\n        <ion-label>Adres Not</ion-label>\n        <ion-label>{{ customer?.address?.note }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/order-details/components/panels/customer-details-card/customer-details-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], CustomerDetailsCardComponent);

//# sourceMappingURL=customer-details-card.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculateBalancePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CalculateBalancePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var CalculateBalancePipe = (function () {
    function CalculateBalancePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    CalculateBalancePipe.prototype.transform = function (payments) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var balance = 0.0;
        if (payments) {
            for (var _a = 0, payments_1 = payments; _a < payments_1.length; _a++) {
                var payment = payments_1[_a];
                if (typeof (payment.amount) == 'string') {
                    balance += parseFloat(payment.amount);
                }
                else {
                    balance += parseFloat(payment.amount);
                }
            }
        }
        return balance;
    };
    return CalculateBalancePipe;
}());
CalculateBalancePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'calculateBalance',
        pure: false
    })
], CalculateBalancePipe);

//# sourceMappingURL=calculate-balance.js.map

/***/ }),

/***/ 288:
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
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
  Generated class for the GlobalsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GlobalsProvider = (function () {
    function GlobalsProvider() {
        this.ref = "https://quiet-chamber-99549.herokuapp.com";
        console.log('Hello GlobalsProvider Provider');
    }
    return GlobalsProvider;
}());
GlobalsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalsProvider);

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDbServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(30);
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
  Generated class for the OrderDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var OrderDbServiceProvider = (function () {
    function OrderDbServiceProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        console.log('Hello PaymentDbServiceProvider Provider');
    }
    OrderDbServiceProvider.prototype.insertNewOrder = function (order) {
        return this.http.post(this.globals.ref + "/orders/new", order);
    };
    OrderDbServiceProvider.prototype.updateOrderInformation = function (orderId, newValue) {
        var url = this.globals.ref + "/orders/" + orderId;
        return this.http.put(url, newValue);
    };
    OrderDbServiceProvider.prototype.deleteOrder = function (id) {
        var url = this.globals.ref + "/orders/" + id;
        return this.http.delete(url);
    };
    OrderDbServiceProvider.prototype.getOrdersList = function (customerName, lastOrderId, limit) {
        if (limit === void 0) { limit = 10; }
        var url = this.globals.ref + "/orders?limit=" + limit;
        if (customerName) {
            url = url + "&customerName=" + customerName;
        }
        if (lastOrderId) {
            url = url + "&lastOrderId=" + lastOrderId;
        }
        console.log("GET ORDER URL : " + url);
        return this.http.get(url);
    };
    OrderDbServiceProvider.prototype.getOrdersByCustomerId = function (customerId) {
        var url = this.globals.ref + "/customers/" + customerId + "/orders";
        return this.http.get(url);
    };
    OrderDbServiceProvider.prototype.getOrderDetails = function (orderId) {
        var url = this.globals.ref + "/orders/" + orderId;
        return this.http.get(url);
    };
    return OrderDbServiceProvider;
}());
OrderDbServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
], OrderDbServiceProvider);

//# sourceMappingURL=order-db-service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(30);
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
    function AuthServiceProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        this.ref = "";
        this.ref = this.globals.ref;
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
        console.log(this.ref);
        return this.http.post(this.ref + "/personnels/new", user);
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDbServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(30);
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
  Generated class for the PaymentDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PaymentDbServiceProvider = (function () {
    function PaymentDbServiceProvider(http, globals) {
        this.http = http;
        this.globals = globals;
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
        console.log('Hello PaymentDbServiceProvider Provider');
    }
    PaymentDbServiceProvider.prototype.insertPayment = function (orderId, paymentInformation) {
        var url = this.globals.ref + "/orders/" + orderId + "/payments/new";
        return this.http.post(url, paymentInformation);
    };
    PaymentDbServiceProvider.prototype.updatePayment = function (paymentId, newValue) {
        var url = this.globals.ref + "/payments/" + paymentId;
        return this.http.put(url, newValue);
    };
    PaymentDbServiceProvider.prototype.deletePayment = function (paymentId) {
        var url = this.globals.ref + "/payments/" + paymentId;
        return this.http.delete(url);
    };
    return PaymentDbServiceProvider;
}());
PaymentDbServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
], PaymentDbServiceProvider);

//# sourceMappingURL=payment-db-service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDbServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(30);
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
  Generated class for the EventDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var EventDbServiceProvider = (function () {
    function EventDbServiceProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        console.log('Hello EventDbServiceProvider Provider');
    }
    EventDbServiceProvider.prototype.getEvents = function () {
        var url = this.globals.ref + "/logs";
        return this.http.get(url);
    };
    EventDbServiceProvider.prototype.logEvent = function (title, detail, personnel, date) {
        var url = this.globals.ref + "/logs";
        this.http.post(url, {
            title: title,
            detail: detail,
            personnel: personnel,
            date: date
        }).subscribe(function (result) {
            console.log(result);
        });
    };
    return EventDbServiceProvider;
}());
EventDbServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
], EventDbServiceProvider);

//# sourceMappingURL=event-db-service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDbServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(30);
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
  Generated class for the CustomerDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CustomerDbServiceProvider = (function () {
    function CustomerDbServiceProvider(http, globals) {
        this.http = http;
        this.globals = globals;
        console.log('Hello PaymentDbServiceProvider Provider');
    }
    CustomerDbServiceProvider.prototype.getCustomerById = function (id) {
        var url = this.globals.ref + "/customers/" + id;
        return this.http.get(url);
    };
    CustomerDbServiceProvider.prototype.getCustomers = function (searchtext, limit) {
        if (limit === void 0) { limit = 20; }
        var url = this.globals.ref + "/customers?limit=" + limit;
        if (searchtext) {
            url += "&searchText=" + searchtext;
        }
        return this.http.get(url);
    };
    CustomerDbServiceProvider.prototype.updateCustomerInformation = function (customerId, newValue) {
        var url = this.globals.ref + "/customers/" + customerId;
        return this.http.put(url, newValue);
    };
    return CustomerDbServiceProvider;
}());
CustomerDbServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* GlobalsProvider */]])
], CustomerDbServiceProvider);

//# sourceMappingURL=customer-db-service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_event_db_service_event_db_service__ = __webpack_require__(51);
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
    function HomePage(navCtrl, eds, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.eds = eds;
        this.auth = auth;
        this.events = [];
        this.eds.getEvents().subscribe(function (data) { return _this.events = data.json(); });
        console.log(this.auth.getUser());
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="navBarColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let event of events">\n      <ion-icon name="leaf" item-start></ion-icon>\n\n      <h1>{{ event.title }}</h1>\n      <h2>{{ event.date | formatDate }} | {{ event.personnel }}</h2>\n      <p>{{ event.detail }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ogrenci/Desktop/waterfall/waterfall/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_Database_Service_Providers_event_db_service_event_db_service__["a" /* EventDbServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map