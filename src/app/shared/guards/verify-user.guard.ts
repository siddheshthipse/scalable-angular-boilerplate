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

  canActivate():boolean{
    let verified:boolean=false;

    this.store.dispatch(new EnsureAuthenticated()).subscribe((returnData)=>{
      console.log('Coming Late')
      console.log(returnData);
      verified=returnData;
    })

    console.log(verified);
    if(verified){
      console.log('if block verified')
      return verified;
    }else{
      return false;
    }
  }
}
