import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlingService implements ErrorHandler{

  constructor() { }

  handleError(error:Error){
    if(error){
      alert(error.message);
    }
  }
}
