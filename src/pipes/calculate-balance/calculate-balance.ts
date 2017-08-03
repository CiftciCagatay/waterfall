import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CalculateBalancePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'calculateBalance',
  pure: false
})
export class CalculateBalancePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(payments: Array<any>, ...args) {
    let balance = 0.0;

    if (payments) {
      for(var payment of payments) {
        balance += payment.amount;
      }
    }

    return balance;
  }
}
