import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the IlIlceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CityDistrictProvider {

  ref = "http://services.atiksoftware.com/turkiye/";


  sehirler = [
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
  ]

  ilceler = [];

  counties = {
    "Adana" : [
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
    "Ad\u0131yaman" : [
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
    "Afyonkarahisar" : [
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
    "A\u011fr\u0131" : [
      "Diyadin",
      "Doğubeyazıt",
      "Eleşkirt",
      "Hamur",
      "Patnos",
      "Taşlıçay",
      "Tutak"
    ],
    "Aksaray" : [
      "Ağaçören",
      "Aksaray",
      "Eskil",
      "Gülağaç",
      "Güzelyurt",
      "Ortaköy",
      "Sarıyahşi",
    ],
    "Amasya" : [
      "Göynücek",
      "Gümüşhacıköy",
      "Hamamözü",
      "Merzifon",
      "Suluova",
      "Taşova",
    ],
    "Ankara" : [
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
    "Antalya" : [
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
    "Ardahan" : [
      "Çıldır",
      "Damal",
      "Göle",
      "Hanak",
      "Posof"
    ],
    "Artvin" : [
      "Ardanuç",
      "Arhavi",
      "Artvin",
      "Borçka",
      "Hopa",
      "Murgul",
      "Şavşat",
      "Yusufeli"
    ],
    "Ayd\u0131n" : [
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
    "Bal\u0131kesir" : [
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
    "Bart\u0131n" : [
      "Kurucaşile",
      "Ulus"
    ],
    "Batman" : [
      "Beşiri",
      "Gercüş",
      "Hasankeyf",
      "Kozluk",
      "Sason"
    ],
    "Bayburt" : [
      "Aydıntepe",
      "Demirözü"
    ],
    "Bilecik" : [
      "Bozüyük",
      "Gölpazarı",
      "İnhisar",
      "Osmaneli",
      "Pazaryeri",
      "Söğüt",
      "Yenipazar"
    ],
    "Bing\u00f6l" : [
      "Adaklı",
      "Genç",
      "Karlıova",
      "Kiğı",
      "Solhan",
      "Yayladere",
      "Yedisu"
    ],
    "Bitlis" : [
      "Adilcevaz",
      "Ahlat",
      "Güroymak",
      "Hizan",
      "Mutki",
      "Tatvan"
    ],
    "Bolu" : [
      "Dörtdivan",
      "Gerede",
      "Göynük",
      "Kıbrıscık",
      "Mengen",
      "Mudurnu",
      "Seben",
      "Yeniçağa"
    ],
    "Burdur" : [
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
    "Bursa" : [
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
    "\u00c7anakkale" : [
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
    "\u00c7ank\u0131r\u0131" : [
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
    "\u00c7orum" : [
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
    "Denizli" : [
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
    "Diyarbak\u0131r" : [
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
    "D\u00fczce" : [
      "Akçakoca",
      "Cumayeri",
      "Çilimli",
      "Gölyaka",
      "Gümüşova",
      "Kaynaşlı",
      "Yığılca"
    ],
    "Edirne" : [
      "Enez",
      "Havsa",
      "İpsala",
      "Keşan",
      "Lalapaşa",
      "Meriç",
      "Süloğlu",
      "Uzunköprü"
    ],
    "Elaz\u0131\u011f" : [
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
    "Erzincan" : [
      "Çayırlı",
      "İliç",
      "Kemah",
      "Kemaliye",
      "Otlukbeli",
      "Refahiye",
      "Tercan",
      "Üzümlü"
    ],
    "Erzurum" : [
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
    "Eski\u015fehir" : [
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
    "Gaziantep" : [
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
    "Giresun" : [
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
    "G\u00fcm\u00fc\u015fhane" : [
      "Kelkit",
      "Köse",
      "Kürtün",
      "Şiran",
      "Torul"
    ], 
    "Hakkari" : [
      "Çukurca",
      "Şemdinli",
      "Yüksekova"
    ], 
    "Hatay" : [
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
    "I\u011fd\u0131r" : [
      "Aralık",
      "Karakoyunlu",
      "Tuzluca"
    ], 
    "Isparta" : [
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
    "\u0130stanbul" : [
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
    "\u0130zmir" : [
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
    "Kahramanmara\u015f" : [
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
    "Karab\u00fck" : [
      "Eflani",
      "Eskipazar",
      "Ovacık",
      "Safranbolu",
      "Yenice"
    ], 
    "Karaman" : [
      "Ayrancı",
      "Başyayla",
      "Ermenek",
      "Kazımkarabekir",
      "Sarıveliler"
    ], 
    "Kars" : [
      "Akyaka",
      "Arpaçay",
      "Digor",
      "Kağızman",
      "Sarıkamış",
      "Selim",
      "Susuz"
    ], 
    "Kastamonu" : [
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
    "Kayseri" : [
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
    "Kilis" : [
      "Merkez",
      "Musabeyli",
      "Elbeyli",
      "Polateli"
    ], 
    "K\u0131r\u0131kkale" : [
      "Bahşılı",
      "Balışeyh",
      "Çelebi",
      "Delice",
      "Karakeçili",
      "Keskin",
      "Sulakyurt",
      "Yahşihan"
    ],
    "K\u0131rklareli" : [
      "Babaeski",
      "Demirköy",
      "Kofçaz",
      "Lüleburgaz",
      "Pehlivanköy",
      "Pınarhisar",
      "Vize"
    ], 
    "K\u0131r\u015fehir" : [
      "Akçakent",
      "Akpınar",
      "Boztepe",
      "Çiçekdağı",
      "Kaman",
      "Mucur"
    ], 
    "Kocaeli" : [
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
    "Konya" : [
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
    "K\u00fctahya" : [
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
    "Malatya" : [
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
    "Manisa" : [
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
    "Mardin" : [
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
    "Mersin" : [
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
    "Mu\u011fla" : [
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
    "Mu\u015f" : [
      "Bulanık",
      "Hasköy",
      "Korkut",
      "Malazgirt",
      "Varto"
    ], 
    "Nev\u015fehir" : [
      "Acıgöl",
      "Avanos",
      "Derinkuyu",
      "Gülşehir",
      "Hacıbektaş",
      "Kozaklı",
      "Ürgüp"
    ], 
    "Ni\u011fde" : [
      "Altunhisar",
      "Bor",
      "Çamardı",
      "Çiftlik",
      "Ulukışla"
    ], 
    "Ordu" : [
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
    "Osmaniye" : [
      "Bahçe",
      "Düziçi",
      "Hasanbeyli",
      "Kadirli",
      "Sumbas",
      "Toprakkale"
    ], 
    "Rize" : [
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
    "Sakarya" : [
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
    "Samsun" : [
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
    "\u015eanl\u0131urfa" : [
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
    "Siirt" : [
      "Aydınlar",
      "Baykan",
      "Eruh",
      "Kurtalan",
      "Pervari",
      "Şirvan"
    ], 
    "Sinop" : [
      "Ayancık",
      "Boyabat",
      "Dikmen",
      "Durağan",
      "Erfelek",
      "Gerze",
      "Saraydüzü",
      "Türkeli"
    ], 
    "\u015e\u0131rnak" : [
      "Beytüşşebap",
      "Cizre",
      "Güçlükonak",
      "İdil",
      "Silopi",
      "Uludere"
    ], 
    "Sivas" : [
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
    "Tekirda\u011f" : [
      "Çerkezköy",
      "Çorlu",
      "Hayrabolu",
      "Malkara",
      "Marmara Ereğlisi",
      "Muratlı",
      "Saray",
      "Şarköy"
    ], 
    "Tokat" : [
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
    "Trabzon" : [
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
    "Tunceli" : [
      "Çemişgezek",
      "Hozat",
      "Mazgirt",
      "Nazimiye",
      "Ovacık",
      "Pertek",
      "Pülümür"
    ], 
    "U\u015fak" : [
      "Banaz",
      "Eşme",
      "Karahallı",
      "Sivaslı",
      "Ulubey"
    ], 
    "Van" : [
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
    "Yalova" : [
      "Altınova",
      "Armutlu",
      "Çınarcık",
      "Çiftlikköy",
      "Termal"
    ], 
    "Yozgat" : [
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
  }

  constructor(public http: Http) {
    console.log('Hello IlIlceProvider Provider');
  }

  getCities() {
    return this.sehirler;
  }

  getCounties(id: string) {
    this.ilceler =  this.counties[id];
    console.log(id);
  }

}
