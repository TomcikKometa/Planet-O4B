import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { StoreService } from '../../core/services/store/store.service';
import { LoginRequest } from './models/login-request';
import { LoginResponse } from './models/login-response';

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
