import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  //Belongs to NodeJS
  submitregister(body:any){
    return this.http.post('http://localhost:3000/users',body,{observe:'body'})
  }

  loginUser(body:{email:string,password:string}){
    return this.http.post('http://localhost:3000/login',body,{observe:'body'});
  }

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
