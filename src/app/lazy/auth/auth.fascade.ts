import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login, OutlookLogin, OutlookRegister, Register } from 'src/app/core/state-management/auth.action';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthFascade {
  userCredentials:any;
  
  constructor(private store: Store,private router:Router,private cookieService:CookieService) {}

  createNewUser(payload:any){
    return this.store.dispatch(new Register(payload));
  }

  createNewOutlookUser(payload:any){
    return this.store.dispatch(new OutlookRegister(payload));
  }

  loginUser(payload:any){
    this.store.dispatch(new Login(payload)).subscribe((returnData)=>{
      this.userCredentials=returnData.authstate;

      if(returnData.authstate.email){
        this.cookieService.set('token',this.userCredentials.token,{expires:0.1,path:'/'});
        this.cookieService.set('email',this.userCredentials.email,{expires:0.1,path:'/'});
        this.cookieService.set('_id',this.userCredentials._id,{expires:0.1,path:'/'});
        this.cookieService.set('setting',JSON.stringify(this.userCredentials.setting),{expires:0.1,path:'/'});
        
        // this.cookieService.set('user', JSON.stringify(this.userCredentials),{expires:0.1,path:'/'});
        this.router.navigate(['dashboard/workspace']);
      }
    },(error)=>{
      console.log('Some error in logging in the user');
      console.log(error);
    });
  }

  loginOutlookUser(payload:any){
    this.store.dispatch(new OutlookLogin(payload)).subscribe((returnData)=>{
      this.userCredentials=returnData.authstate;

      console.log('I need this');
      console.log(this.userCredentials);
      if(returnData.authstate.email){
        this.cookieService.set('token',this.userCredentials.token,{expires:0.1,path:'/'});
        this.cookieService.set('email',this.userCredentials.email,{expires:0.1,path:'/'});
        this.cookieService.set('_id',this.userCredentials._id,{expires:0.1,path:'/'});
        this.cookieService.set('setting',JSON.stringify(this.userCredentials.setting),{expires:0.1,path:'/'});

        // this.cookieService.set('user', JSON.stringify(this.userCredentials),{expires:0.1,path:'/'});
        this.router.navigate(['dashboard/workspace']);
      }
    },(error)=>{
      console.log('Some error in logging in the user');
      console.log(error);
    })
  }
}
