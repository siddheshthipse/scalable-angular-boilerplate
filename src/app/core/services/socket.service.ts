import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socketObj:any;
  apiURL= environment.NODE_SERVER_URL;
  constructor(private http:HttpClient, private modal: NzModalService) { }

  setupSocketConnection(){
    console.log('Triggered Socket');
    this.socketObj=io(this.apiURL);

    // this.socketObj.on('server message', (data: string) => {
    //   console.log(data);
    // });

    // this.socketObj.on('user register', (data: string) => {
    //   console.log(data);
    //   this.modal.error({
    //     nzTitle: 'SocketIO: '+data,
    //     nzOkText: null,
    //   });
    // });

    this.socketObj.on('pushnotification', (data: string) => {
      // console.log(data);
      // alert(data);
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
