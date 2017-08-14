import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDbServiceProvider } from "../../providers/Database_Service_Providers/event-db-service/event-db-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events = [];

  constructor(
    public navCtrl: NavController,
    private eds: EventDbServiceProvider
  ) {
    this.eds.getEvents().subscribe(
      (data) => this.events = data.json(), 
      (error) => console.log(error)
    );
  }

}
