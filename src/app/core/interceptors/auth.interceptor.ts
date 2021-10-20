import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from '../state-management/auth.state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store:Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('This is Auth Interceptor');
    
    const isLoggedIn=this.store.selectSnapshot(AuthState.getUserDetails);

    let tokenizedReq=request.clone({
      setHeaders:{
        Authorization:`Bearer ${isLoggedIn.token}`,
      }
    })
    return next.handle(tokenizedReq);
  }
}
