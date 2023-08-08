import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, pipe, throwError } from 'rxjs';

import { ApiUserUrl } from '../../../api/config/api-adress';
import { NavigationService } from '../../services/navigation/navigation.service';
import { StoreService } from '../../services/store/store.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  private readonly storeService: StoreService = inject(StoreService);
  private readonly navigationService: NavigationService = inject(NavigationService);

  private static readonly CONFIG_FILE_SUFFIX: string = '.json';

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token: string | null = this.storeService.getUserToken();
    const url: string = request.url;

    if (ApiUserUrl.LOGIN === url || request.url.endsWith(AuthorizationInterceptor.CONFIG_FILE_SUFFIX)) {
      return next.handle(request);
    } else if (token) {

      const clonedRequest: HttpRequest<unknown> = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
      return next.handle(clonedRequest).pipe(catchError((error: HttpErrorResponse) => {
        if(error.status === 403) {
          this.navigationService.navigateToLoginPage();
          this.storeService.logoutUser();
          return EMPTY;
        }

        return throwError(() => error);
      }));
    } else {

      this.navigationService.navigateToLoginPage();
      return EMPTY;
    }
  }
}
