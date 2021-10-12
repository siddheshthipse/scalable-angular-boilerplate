import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  //Belongs to JSON-Server
  getData(){
    return this.http.get('http://localhost:8000/posts');
  }

  postData(somedata:any){
    return this.http.post('http://localhost:8000/posts',somedata);
  }

  deleteData(id:number){
    return this.http.delete('http://localhost:8000/posts/'+id);
  }

  //Error Simulation
  error400(){
    return this.http.get('http://localhost:3000/badrequest');
  }

  error404(){
    return this.http.get('http://localhost:3000/resourceNotFound');
  }

  error500(){
    return this.http.get('http://localhost:3000/internalServerError');
  }
}
