import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserCredentials } from '../models/usercredentials.interface';
import { AuthService } from '../services/auth.service';
import { EnsureAuthenticated, GetCookie, Login, Logout, OutlookLogin, OutlookRegister, Register, UpdateSetting } from './auth.action';
import { CookieService } from 'ngx-cookie-service';
import { OutlookService } from '../services/outlook.service';

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
  constructor(private authservice:AuthService,private cookieService:CookieService,private outlookservice:OutlookService){}

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
      console.log('Get Cookie got triggered');
      ctx.setState({
        ...state,
        token:this.cookieService.get('token'),
        email:this.cookieService.get('email'),
        _id:this.cookieService.get('_id'),
        setting:JSON.parse(this.cookieService.get('setting'))
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

  @Action(OutlookLogin)
  outlookLogin(ctx:StateContext<AuthStateModel>,{payload}:OutlookLogin){
    return this.outlookservice.login(payload).pipe(tap((returnData:UserCredentials)=>{
      console.log('Outlook login data coming from server');
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
      setting:null,
      _id:null
    })
  }

  @Action(Register)
  register(ctx:StateContext<AuthStateModel>,{payload}:Register){
    return this.authservice.submitregister(payload).subscribe((returnData)=>{
      console.log('User registered successfully');
      console.log(returnData);
    })
  }

  @Action(OutlookRegister)
  outlookRegister(ctx:StateContext<AuthStateModel>,{payload}:OutlookRegister){
    return this.outlookservice.register(payload).subscribe((returnData)=>{
      console.log('Outlook user registered successfully');
      console.log(returnData);
    })
  }

  @Action(UpdateSetting)
  updateSetting(ctx:StateContext<AuthStateModel>,{payload,userid}:UpdateSetting){
    return this.authservice.changeSettings(payload,userid).pipe(tap((returnData:UserCredentials)=>{
      console.log('Expected updated data');
      console.log(returnData);

      const state=ctx.getState();

      ctx.setState({
        ...state,
        _id:returnData._id,
        token:returnData.tokens[0].token,
        email:returnData.email,
        setting:returnData.setting
      })
    }))
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
