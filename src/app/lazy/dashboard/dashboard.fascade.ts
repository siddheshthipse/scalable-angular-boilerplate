import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { AddData, DeleteData, GetData } from 'src/app/core/state-management/app.action';
import { AppState } from 'src/app/core/state-management/app.state';
import { Logout, UpdateSetting } from 'src/app/core/state-management/auth.action';
import { AuthState } from 'src/app/core/state-management/auth.state';


@Injectable()
export class DashboardFascade {
  @Select (AppState) userData$: Observable<any[]> | undefined;
  constructor(private store: Store,private cookieService:CookieService,private httpservice:HttpService) {}

  insert() {
    return this.store.dispatch(new GetData());
  }

  update(userData:any){
    return this.store.dispatch(new AddData(userData));
  }

  delete(id:number) {
    return this.store.dispatch(new DeleteData(id));
  }

  //-------Related to AuthState--------------------------
  getLoggedInUserDetails(){
    return this.store.selectSnapshot(AuthState.getUserDetails);
  }

  changeSetting(formData:{setting:{dateformat:string, language:string}},userid:string){
    return this.store.dispatch(new UpdateSetting(formData,userid));
  }

  logout(){
    this.cookieService.delete('token', '/');
    this.cookieService.delete('email', '/');
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
