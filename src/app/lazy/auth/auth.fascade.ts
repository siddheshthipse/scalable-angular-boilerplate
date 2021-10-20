import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login, Register } from 'src/app/core/state-management/auth.action';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthFascade {
  userCredentials:any;
  
  constructor(private store: Store,private router:Router,private cookieService:CookieService) {}

  createNewUser(payload:any){
    this.store.dispatch(new Register(payload));
  }

  loginUser(payload:any){
    this.store.dispatch(new Login(payload)).subscribe((returnData)=>{
      this.userCredentials=returnData.authstate;

      if(returnData.authstate.email){
        this.cookieService.set('token',this.userCredentials.token,{expires:0.001,path:'/'});
        this.cookieService.set('email',this.userCredentials.email,{expires:0.001,path:'/'});
        this.router.navigate(['']);
      }
    },(error)=>{
      console.log('Some error in logging in the user');
      console.log(error);
    });
  }
}
