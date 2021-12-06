import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/core/state-management/auth.state';
import * as moment from 'moment-timezone';

@Pipe({
  name: 'timezonePreference'
})
export class TimezonePreferencePipe implements PipeTransform {
  constructor(private store:Store){}

  transform(value: Date): string {
    const userSettings:any=this.store.selectSnapshot(AuthState.getUserDetails);
    
    var m = moment.utc(this.timezoneToUTC(value), "DD-MM-YYYY h:mm:ss A");
    console.log(userSettings.setting.timezone);
    return m.clone().tz(userSettings.setting.timezone).format("DD-MM-YYYY h:mm:ss A");
  }

  timezoneToUTC(inputDate:Date){
    const day=inputDate.getUTCDate().toString();
    const month=(inputDate.getUTCMonth()+1).toString();
    const year=inputDate.getUTCFullYear().toString();
    const hours=inputDate.getUTCHours().toString();
    const minutes=inputDate.getUTCMinutes().toString();
    const seconds=inputDate.getUTCSeconds().toString();
    
    const utcTimestamp=day+'/'+month+'/'+year+' '+hours+':'+minutes+':'+seconds;
    console.log(utcTimestamp);
    return utcTimestamp;
  }
}
