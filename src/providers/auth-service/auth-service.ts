import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MongoDbServiceProvider } from "../mongo-db-service/mongo-db-service";

@Injectable()
export class AuthServiceProvider {

  ref = "";

  user: any;

  constructor(
    public http: Http,
    private mdbs: MongoDbServiceProvider
  ) {
    this.ref = this.mdbs.ref;
  }

  getUser() {
    return this.user.name;
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
