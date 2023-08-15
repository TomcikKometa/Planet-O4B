import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AddressInterceptor implements HttpInterceptor {
  private static readonly CONFIG_FILE_SUFFIX: string = '.json';

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (request.url.endsWith(AddressInterceptor.CONFIG_FILE_SUFFIX)) {
      return next.handle(request);
    } else {
      const cloned: HttpRequest<unknown> = request.clone({ url: `${environment.backendUrl}/${request.url}` });
      return next.handle(cloned);
    }
  }
}
