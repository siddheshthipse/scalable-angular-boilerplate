import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Login, Logout } from './auth.action';

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
  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  @Selector()
  static getUserDetails(state:AuthStateModel):any{
    return state;
  }
  
  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, {payload}: Login) {
    const state=ctx.getState();
    ctx.setState({
      ...state,
      token:payload.token,
      email:payload.email,
    })
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
}
