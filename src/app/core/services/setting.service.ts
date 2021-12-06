import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  apiURL= environment.NODE_SERVER_URL;
  constructor(private http:HttpClient) { }

  changeLanguage(setlang:any){
    this.http.patch(`${this.apiURL}/changelang/615ff77b6216be1a4c6a03a1`,{"language":"German"})
  }
}
