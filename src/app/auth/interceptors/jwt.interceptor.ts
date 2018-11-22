import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).
      pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            // do stuff with response if you want
            if (err.status === 401) {
              // redirect to the login route
              // or show a modal
              this.router.navigateByUrl('/login');
            }
          }
        })
      );
  }
}
