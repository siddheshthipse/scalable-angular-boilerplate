import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../models/usercredentials.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OutlookService {

  apiURL:string= environment.NODE_SERVER_URL;
  constructor(private http:HttpClient) { }

  login(emailObj:{outlookemail:string}){
    return this.http.post<UserCredentials>(`${this.apiURL}/outlooklogin`, emailObj,{observe:'body'});
  }

  register(emailObj:{outlookemail:string}){
    return this.http.post<UserCredentials>(`${this.apiURL}/outlookregister`, emailObj,{observe:'body'});
  }
}
