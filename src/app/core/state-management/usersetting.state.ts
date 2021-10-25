import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { DeleteData, GetData } from './app.action';

export class UserSettingStateModel {
  data: any;
}

@State<UserSettingStateModel>({
  name: 'usersetting',
  defaults: {
    data: [],
  },
})
@Injectable()
export class UserSettingState {
    
}