import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'niceDeadlineFormat'
})
export class NiceDeadlineFormatPipe implements PipeTransform {
  transform(value:Date): unknown {
    console.log('Deadline Pipe');
    console.log(moment(value, "YYYYMMDD").fromNow());
    return moment(value, "YYYYMMDD").fromNow();
  }
}
