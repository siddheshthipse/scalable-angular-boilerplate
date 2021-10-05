import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:3000/posts');
  }

  postData(somedata:any){
    return this.http.post('http://localhost:3000/posts',somedata);
  }

  give404Error(){
    return this.http.get('http://localhost:3000/doesntexist');
  }

  deleteData(id:number){
    return this.http.delete('http://localhost:3000/posts/'+id);
  }
}
