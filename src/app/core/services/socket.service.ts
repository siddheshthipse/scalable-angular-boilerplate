import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socketObj:any;
  constructor(private http:HttpClient) { }

  setupSocketConnection(){
    console.log('Triggered Socket');
    this.socketObj=io('http://localhost:3000');

    this.socketObj.on('server message', (data: string) => {
      console.log(data);
    });

    this.socketObj.on('user register', (data: string) => {
      console.log(data);
      alert(data)
    });

    this.socketObj.on('pushnotification', (data: string) => {
      console.log(data);
      alert(data);
    });
  }

  sendMessage(msg:any){
    if(this.socketObj){
      this.socketObj.emit('client message', msg);
    }
  }

  endSocketConnection(){
    if(this.socketObj){
      this.socketObj.disconnect();
    }
  }
}
