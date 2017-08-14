import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { NewOrderFormPage } from "../new-order-form/new-order-form";
import { HomePage } from "../home/home";
import { OneSignal } from '@ionic-native/onesignal';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mode = "login";

  email: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private menuController: MenuController,
    private authService: AuthServiceProvider,
    private onesignal: OneSignal
  ) {
    this.menuController.enable(false);

  }

  registerModeOn() {
    this.mode = "register"
  }

  loginModeOn() {
    this.mode = "login"
  }

  registerUser(val) {
    let loading = this.loadingCtrl.create({
      content: "Kayıt oluşturuluyor..."
    });

    loading.present();

    this.authService.register(val).subscribe(response => {
      console.log(response, this.authService.ref);

      this.loginModeOn();

      loading.dismiss();
    })
  }

  loginUser() {
    let loading = this.loadingCtrl.create({
      content: "Giriş yapılıyor..."
    });

    loading.present();

    this.authService.login(this.email, this.password)
      .then(authResponse => {
        console.log(authResponse);

        this.authService.getUserDetailsFromDatabaseByEmail(this.email)
          .subscribe(
          (response) => {
            if (response.status == 200) {
              console.log(response.json());
              this.authService.setUser(response.json());

              if (this.authService.user.isManager) {
                this.onesignal.sendTag("isManager", "true");
              } else {
                this.onesignal.sendTag("isManager", "false");
              }

              this.menuController.enable(true);

              loading.dismiss();

              this.navCtrl.setRoot(HomePage);
            }
          },
          (error) => {
            if (error.status == 404) {
              let alert = this.alertCtrl.create({
                title: "Giriş Yapılamadı",
                message: "Girdiğiniz veriler kullanıcı yöneticisinde mevcut ancak veritabanında bu email adresine sahip bir kullanıcı bulunamadı. Lütfen yöneticinizle irtibata geçin",
                buttons: [{ text: "Tamam" }]
              })


              loading.dismiss().then(() => alert.present());
            } else {
              let alert = this.alertCtrl.create({
                title: "Giriş Yapılamadı",
                message: "Sunucuda bir hata meydana geldi. Lütfen tekrar deneyin",
                buttons: [{ text: "Tamam" }]
              })


              loading.dismiss().then(() => alert.present());
            }
          })
      })
      .catch((error) => {
        let alert = this.alertCtrl.create({
          title: "Giriş Yapılamadı",
          message: "Lütfen girdiğiniz bilgileri kontrol edin",
          buttons: [{ text: "Tamam" }]
        })


        loading.dismiss().then(() => alert.present());
      })
  }

}
