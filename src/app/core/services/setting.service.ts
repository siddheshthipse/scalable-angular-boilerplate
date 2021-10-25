import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http:HttpClient) { }

  changeLanguage(setlang:any){
    this.http.patch('http://localhost:3000/changelang/615ff77b6216be1a4c6a03a1',{"language":"German"})
  }
}
