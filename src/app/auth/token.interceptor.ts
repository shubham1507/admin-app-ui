import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService, private toastr: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request)
    .pipe(
      tap((event: HttpEvent<any>) => {
        if(request.method != 'GET' && event instanceof HttpResponse && event.status == 200){
          this.toastr.success(event.body.response_desc);
        }
      }),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if(error.status == 403){
          this.auth.logout()
        }
        this.toastr.error(error.error.response_desc, error.status.toString())
        return throwError(error.message);
      })
    )
  }
}