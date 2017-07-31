import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MongoDbServiceProvider } from "../../providers/mongo-db-service/mongo-db-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events = [];

  constructor(
    public navCtrl: NavController,
    private mdbs: MongoDbServiceProvider
  ) {
    this.mdbs.getEvents().subscribe(data => this.events = data.json());
  }

}
