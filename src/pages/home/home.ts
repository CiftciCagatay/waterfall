import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { EventDbServiceProvider } from "../../providers/Database_Service_Providers/event-db-service/event-db-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events = [];

  constructor(
    public navCtrl: NavController,
    private eds: EventDbServiceProvider,
    private auth: AuthServiceProvider
  ) {
    this.eds.getEvents().subscribe(data => this.events = data.json());
    
    console.log(this.auth.getUser());
  }

}
