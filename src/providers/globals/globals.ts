import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GlobalsProvider {

  ref = "https://quiet-chamber-99549.herokuapp.com";

  constructor() {
    console.log('Hello GlobalsProvider Provider');
  }

}
