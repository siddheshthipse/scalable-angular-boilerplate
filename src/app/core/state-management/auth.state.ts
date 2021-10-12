import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserCredentials } from '../models/usercredentials.interface';
import { AuthService } from '../services/auth.service';
import { Login, Logout, Register } from './auth.action';

export interface AuthStateModel {
  token: string | null;
  email:string | null;
}

@State<AuthStateModel>({
  name: 'authstate',
  defaults: {
    token: null,
    email:null
  },
})
@Injectable()
export class AuthState {
  constructor(private authservice:AuthService){}

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  @Selector()
  static getUserDetails(state:AuthStateModel):any{
    return state;
  }
  
  @Action(Login)
  login(ctx:StateContext<AuthStateModel>,{payload}:Login){
    return this.authservice.loginUser(payload).pipe(tap((returnData:UserCredentials)=>{
      const state=ctx.getState();
      ctx.setState({
        ...state,
        token:returnData.tokens[0].token,
        email:returnData.email
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
      console.log('User registered succesfully');
      console.log(returnData);
    })
  }
}
