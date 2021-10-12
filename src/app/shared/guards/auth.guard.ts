import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { CookieService } from 'ngx-cookie-service';
import { AuthState } from 'src/app/core/state-management/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store:Store, private router:Router,private cookieService:CookieService){}

  canActivate():boolean{
    // const isLoggedIn=this.store.selectSnapshot(AuthState.isAuthenticated);
    // if(isLoggedIn){
    //   return isLoggedIn;
    // }else{
    //   this.router.navigate(['auth/login']);
    //   return isLoggedIn;
    // }

    if(!!this.cookieService.get('token')){
      return true;
    }else{
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}

