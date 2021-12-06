import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiURL= environment.JSON_SERVER_URL;
  constructor(private http:HttpClient) { }

  //Belongs to JSON-Server
  getData(){
    return this.http.get(`${this.apiURL}/users`);
  }

  postData(payload:any){
    return this.http.post(`${this.apiURL}/users`,payload);
  }

  deleteData(id:number){
    return this.http.delete(`${this.apiURL}/users/`+id);
  }

  //Temporary
  getDynamicTableColumns(){
    return this.http.get('http://localhost:8000/tableColumns');
  }

  getDynamicTableData(){
    return this.http.get('http://localhost:8000/tableData');
  }

  getFormSchema(){
    return this.http.get('http://localhost:8000/formSchema');
  }

  //Temporary function to trigger/simulate some action in backend to trigger a notification
  triggerNotification(){
    console.log('Into service');
    return this.http.get('http://localhost:3000/getnotification');
  }
  // //Error Simulation
  // error400(){
  //   return this.http.get('http://localhost:3000/badrequest');
  // }

  // error404(){
  //   return this.http.get('http://localhost:3000/resourceNotFound');
  // }

  // error500(){
  //   return this.http.get('http://localhost:3000/internalServerError');
  // }
}
