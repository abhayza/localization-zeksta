import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { request } from 'http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = window.localStorage.getItem('bearerToken'); 
      req = req.clone({
        setHeaders: {
          Authorization: 'JWT ' + token
        }
      });
    return next.handle(req);
  }
}