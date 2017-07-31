import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../providers/mongo-db-service/mongo-db-service";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events = [];

  constructor(
    public navCtrl: NavController,
    private mdbs: MongoDbServiceProvider,
    private auth: AuthServiceProvider
  ) {
    this.mdbs.getEvents().subscribe(data => this.events = data.json());
    
    console.log(this.auth.getUser());
  }

}
