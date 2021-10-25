import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { CookieService } from 'ngx-cookie-service';
import { GetCookie } from 'src/app/core/state-management/auth.action';
import { AuthState } from 'src/app/core/state-management/auth.state';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store:Store, private router:Router,private cookieservice:CookieService){}

  canActivate():boolean{
    
    const helper = new JwtHelperService();
    if(helper.isTokenExpired(this.cookieservice.get('token'))){
      // alert('Your token has expired');
      this.router.navigate(['auth/login'])
      return false;
    }else{
      this.store.dispatch(new GetCookie()).subscribe((response)=>{
        console.log('response from guard');
        console.log(response.authstate.token);
      });
  
      const isLoggedIn=this.store.selectSnapshot(AuthState.isAuthenticated);
      if(isLoggedIn){
        console.log('if part')
        return isLoggedIn;
      }else{
        this.router.navigate(['auth/login']);
        return isLoggedIn;
      }
    }

    

    // console.log(this.cookieservice.getAll());
    // return true;
  }
}

