import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from "../globals/globals";

@Injectable()
export class AuthServiceProvider {

  ref = "";

  user = {
    _id : '598f985fedca5a0ead1bd94b',
    name: 'Mert Yıldız',
    isManager: false
  };

  constructor(
    public http: Http,
    private globals: GlobalsProvider
  ) {
    this.ref = this.globals.ref;
  }

  getUser() {
    return this.user._id;
  }

  setUser(user: any) {
    this.user = user;
  }

  deleteUser() {
    delete this.user;
  }

  login(email: string, password: string) {
    return this.http.get(this.ref + "/personnels/login?email=" + email + "&password=" + password);
  }

  logout() {
    return this.http.get(this.ref + "/personnels/" + this.user._id + "/logout");
  }

  register(user: any) {
    console.log(this.ref);
    return this.http.post(this.ref + "/personnels/new", user);
  }

}
