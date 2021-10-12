import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from 'src/app/core/services/http.service';
import { DeleteData, GetData } from 'src/app/core/state-management/app.action';
import { Logout } from 'src/app/core/state-management/auth.action';
import { AuthState } from 'src/app/core/state-management/auth.state';


@Injectable()
export class DashboardFascade {
  constructor(private store: Store,private cookieService:CookieService,private httpservice:HttpService) {}

  insert() {
    this.store.dispatch(new GetData());
  }

  delete(id:number) {
    this.store.dispatch(new DeleteData(id));
  }

  //-------Related to AuthState--------------------------
  getLoggedInUserDetails(){
    return this.store.selectSnapshot(AuthState.getUserDetails);
  }

  logout(){
    this.cookieService.delete('token', '/');
    this.store.dispatch(new Logout());
  }

  //------Error Simulation--------------------------------
  badRequestError(){
    this.httpservice.error400().subscribe((returnData)=>{
      console.log(returnData);
    })
  }

  resourceNotFoundError(){
    this.httpservice.error404().subscribe((returnData)=>{
      console.log(returnData);
    })
  }

  internalServerError(){
    this.httpservice.error500().subscribe((returnData)=>{
      console.log(returnData);
    })
  }
}
