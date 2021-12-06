import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  theMessage: string | undefined;
  constructor(private logger: NGXLogger, private modal: NzModalService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.logger.log('This is interceptor');
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 201:
            this.theMessage =
              '201: The server successfully returned the requested data.';
            break;
          case 204:
            this.theMessage = '204: The data was deleted successfully.';
            break;
          case 400:
            this.theMessage =
              '400: There was an error in the request and the server did not perform any new or modified data operations.';
            break;
          case 401:
            this.theMessage =
              '401: Email ID does not exist, try Signing Up';
            break;
          case 403:
            this.theMessage =
              '403: Email ID already exists, try Signing In';
            break;
          case 404:
            this.theMessage =
              '404: The request was made for a record that did not exist and the server did not operate.';
            break;
          case 500:
            this.theMessage =
              '500: There was an error with the server, please check the server.';
            break;
          case 503:
            this.theMessage =
              '503: The service is unavailable and the server is temporarily overloaded or maintained.';
            break;
          default:
            this.theMessage='Not an Error';
            break;
        }
        if(this.theMessage!='Not an Error'){
          this.modal.error({
          nzTitle: this.theMessage,
          nzOkText: null,
        });
        }
        return throwError(this.theMessage);
      })
    );
  }
}
