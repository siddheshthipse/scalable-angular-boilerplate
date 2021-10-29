import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { EnsureAuthenticated } from 'src/app/core/state-management/auth.action';

@Injectable({
  providedIn: 'root'
})
export class VerifyUserGuard implements CanActivate {
  constructor(private store:Store, private router:Router,private authservice:AuthService){}

  async canActivate():Promise<boolean>{
    const data=await this.store.dispatch(new EnsureAuthenticated()).toPromise();
    console.log('This is data');
    console.log(data)

    if(data){
      return true;
    }else{
      return false;
    }
  }
}
