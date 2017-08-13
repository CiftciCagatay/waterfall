import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from "../globals/globals";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthServiceProvider {

  ref = "";

  user: any;

  constructor(
    public http: Http,
    private globals: GlobalsProvider,
    private afa: AngularFireAuth
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

  getUserDetailsFromDatabaseByEmail (email: String) {
    return this.http.get(this.ref + "/users/findByEmail/" + email);
  }

  login(email: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(email, password);
    //return this.http.get(this.ref + "/personnels/login?email=" + email + "&password=" + password);
  }

  logout() {
    return this.http.get(this.ref + "/personnels/" + this.user._id + "/logout");
  }

  register(user: any) {
    console.log(this.ref);
    return this.http.post(this.ref + "/personnels/new", user);
  }

}
