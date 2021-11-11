import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngxs/store';
import { format } from 'date-fns';
import { AuthState } from 'src/app/core/state-management/auth.state';

@Pipe({
  name: 'datePreference'
})
export class DatePreferencePipe implements PipeTransform {
  constructor(private store:Store){}

  transform(value: Date): unknown {
    const userSettings:any=this.store.selectSnapshot(AuthState.getUserDetails);
    return format(value, userSettings.setting.dateformat);
  }

}
