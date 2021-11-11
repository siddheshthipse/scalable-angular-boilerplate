import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserCredentials } from '../models/usercredentials.interface';
import { AuthService } from '../services/auth.service';
import { EnsureAuthenticated, GetCookie, Login, Logout, Register, UpdateSetting } from './auth.action';
import { CookieService } from 'ngx-cookie-service';

export interface AuthStateModel {
  token: string | null;
  email: string | null;
  setting: any | null;
  _id: string | null;
}

@State<AuthStateModel>({
  name: 'authstate',
  defaults: {
    token: null,
    email: null,
    setting: null,
    _id: null
  },
})
@Injectable()
export class AuthState {
  constructor(private authservice:AuthService,private cookieService:CookieService){}

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  @Selector()
  static getUserDetails(state:AuthStateModel):any{
    return state;
  }
  
  @Action(GetCookie)
  getCookie(ctx:StateContext<AuthStateModel>){
    if(!!this.cookieService.get('token')){
      const state=ctx.getState();
      ctx.setState({
        ...state,
        token:this.cookieService.get('token'),
        email:this.cookieService.get('email')
      })
    }
  }

  @Action(Login)
  login(ctx:StateContext<AuthStateModel>,{payload}:Login){
    return this.authservice.loginUser(payload).pipe(tap((returnData:UserCredentials)=>{

      console.log('Data coming from server');
      console.log(returnData);

      const state=ctx.getState();
      ctx.setState({
        ...state,
        token:returnData.tokens[0].token,
        email:returnData.email,
        setting:returnData.setting,
        _id:returnData._id
      })
    }))
  }

  @Action(Logout)
  logout(ctx:StateContext<AuthStateModel>){
    const state=ctx.getState();
    console.log(state);
    ctx.setState({
      ...state,
      token:null,
      email:null,
    })
  }

  @Action(Register)
  register(ctx:StateContext<AuthStateModel>,{payload}:Register){
    return this.authservice.submitregister(payload).subscribe((returnData)=>{
      console.log('User registered successfully');
      console.log(returnData);
    })
  }

  @Action(UpdateSetting)
  updateSetting(ctx:StateContext<AuthStateModel>,{payload,userid}:UpdateSetting){
    return this.authservice.changeSettings(payload,userid).subscribe((returnData)=>{
      console.log('Settings Updated');
      console.log(returnData);
    })
  }

  @Action(EnsureAuthenticated)
  ensureAuth(ctx:StateContext<AuthStateModel>){
    console.log('Called Ensure Auth')
    return this.authservice.ensureAuth().pipe(tap((res)=>{
      console.log('Inside EA');
      console.log(res);
    }));
  }
}
