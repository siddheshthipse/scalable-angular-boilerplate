import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'niceDateFormat'
})
export class NiceDateFormatPipe implements PipeTransform {

  transform(value:Date): unknown {
    // console.log(moment(value, "YYYYMMDD").fromNow());
    return moment(value, "YYYYMMDD").fromNow();
  }

}
