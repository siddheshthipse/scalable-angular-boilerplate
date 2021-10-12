import { ErrorHandler, Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlingService implements ErrorHandler{

  constructor(private logger:NGXLogger) { }

  handleError(error:Error){
    if(error){
      this.logger.error('Client side error has occured');
      alert(error.message);
    }
  }
}
