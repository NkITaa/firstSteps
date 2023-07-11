import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  // clones the original request and passes in header, we do this because like this we only have to write the code for the header once and not pass it on all requests
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request);
    let newRequest = request.clone({
      headers: new HttpHeaders({ token: 'blalalala' }),
    });

    // through that I can specificly handle all my requests and alter calls
    if (request.method === 'POST') {
      newRequest = request.clone({
        headers: new HttpHeaders({ token: 'otherToken' }),
      });
    }
    return next.handle(newRequest);
  }
}
