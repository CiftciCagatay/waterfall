import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormatDatePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(val: any, ...args) {
    let dateString = '';


    if (val) {
      let value;

      if (typeof val === 'string') {

        value = new Date(val)

      } else {
        value = val;
      }

      let day = value.getDate() > 9 ? value.getDate() : '0' + value.getDate()
      let month = value.getMonth() > 8 ? value.getMonth() + 1 : '0' + (value.getMonth() + 1)
      let year = value.getFullYear()
      let hours = value.getHours() > 9 ? value.getHours() : '0' + value.getHours()
      let minutes = value.getMinutes() > 9 ? value.getMinutes() : '0' + value.getMinutes()

      dateString = `${day}/${month}/${year} ${hours}:${minutes}`
    }


    return dateString;
  }
}
