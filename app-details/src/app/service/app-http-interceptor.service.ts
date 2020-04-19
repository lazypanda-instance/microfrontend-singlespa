import { Injectable, InjectionToken, Inject, PLATFORM_ID } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { TransferState, StateKey, makeStateKey } from '@angular/platform-browser';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {

  constructor(private transferState: TransferState,
              @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
              @Inject(PLATFORM_ID) private platformId: object) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timeoutValue = request.headers.get('timeout') || this.defaultTimeout;
    const timeoutValueNumeric = Number(timeoutValue);

    const key: StateKey<string> = makeStateKey<string>(request.url);
    if (isPlatformServer(this.platformId)) {
      // serverSide
      return next.handle(request).pipe(
        timeout(timeoutValueNumeric),
        tap((event) => {
          this.transferState.set(key, (event as HttpResponse<any>).body);
        }),
        catchError((error: HttpErrorResponse) => {
          return this.networkErrorScenario(error, request, next);
        })
      );
    } else {
      // browserSide
      const storedResponse = this.transferState.get<any>(key, null);
      if (storedResponse) {
        const response = new HttpResponse({body: storedResponse, status: 200});
        return of(response);
      } else {
        return next.handle(request).pipe(
          timeout(timeoutValueNumeric),
          tap((response: HttpResponse<any>) => {
            return response;
          }),
          catchError((error: HttpErrorResponse) => {
            return this.networkErrorScenario(error, request, next);
          })
        );
      }
    }
  }

  private networkErrorScenario(error: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return throwError(error);
  }
}
