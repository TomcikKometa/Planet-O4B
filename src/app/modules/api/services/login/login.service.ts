import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StoreService } from 'src/app/modules/core/services/store/store.service';

import { LoginRequest } from '../../model/login/login-request';
import { LoginResponse } from '../../model/login/login-response';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly storeService: StoreService = inject(StoreService);

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('user/login', loginRequest).pipe(tap((response: LoginResponse) => {
      this.storeService.saveUserToken(response.token);
      this.storeService.setLoggedIn(true);
    }));
  }
}
