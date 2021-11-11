import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCredentials } from '../models/usercredentials.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL:string='http://localhost:3000';
  constructor(private http:HttpClient) { }

  //Belongs to NodeJS
  submitregister(body:any){
    return this.http.post(`${this.apiURL}/users`,body,{observe:'body'})
  }

  changeSettings(body:any, userid:string){
    return this.http.put(`${this.apiURL}/changelang/${userid}`,body,{observe:'body'});
  }

  loginUser(body:{email:string,password:string}){
    return this.http.post<UserCredentials>(`${this.apiURL}/login`,body,{observe:'body'});
  }

  ensureAuth(){
    return this.http.get(`${this.apiURL}/verifyuser`);
  }

  outlook(){
    return this.http.get(`${this.apiURL}/auth/outlook`);
  }

  // backendCookie(){
  //   return this.http.get('http://localhost:3000/signin');
  // }

  // ensureAuthenticated(){
  //   return this.http.get('http://localhost:3000/verifyid',{
  //     observe:'body',
  //     params:new HttpParams().append('token',JSON.stringify(localStorage.getItem('token')))
  //   })
  // }

  // isloggedIn(){
  //   return !!localStorage.getItem('token');
  // }
}
