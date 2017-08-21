import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from "../../globals/globals";

/*
  Generated class for the EventDbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EventDbServiceProvider {

  constructor(
    public http: Http,
    private globals: GlobalsProvider
  ) {
    console.log('Hello EventDbServiceProvider Provider');
  }

  getEvents() {
    let url = this.globals.ref + "/logs";

    return this.http.get(url);
  }

  logEvent(title: string, detail: string, personnel: any, date: any) {
    let url = this.globals.ref + "/logs";

    this.http.post(url, {
      title: title,
      detail: detail,
      personnel: personnel,
      date: date
    }).subscribe(result => {
      console.log(result)
    })
  }

}
