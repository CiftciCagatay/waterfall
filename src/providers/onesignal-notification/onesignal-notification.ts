import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OnesignalNotificationProvider {

  appId = "87578805-f471-4bb6-b367-e114d224a0e0";
  restAPIKey = "NTViYTg5M2EtZTA1Ni00NDk1LThiNDQtYTVjYWQ4ZTg5Yjdj";
  androidProjectNumber = "AIzaSyASmpxOMiqAdq9QzO6MzSJMZcUi3jJXQI8";

  constructor(public http: Http) {
    console.log('Hello OnesignalNotifiProvider Provider');
  }
  
  notifyManagers(text: String) {
    if (!text)
      return;

    var headers = new Headers();

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
      .subscribe(response => console.log(response.json()))
  }
}
