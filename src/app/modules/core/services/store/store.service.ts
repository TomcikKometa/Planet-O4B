import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private static readonly TOKEN_KEY = 'appToken';

  private constructor() {
    if(this.getUserToken()) {
      this._isLoggedIn.next(true);
    }
  }

  public saveUserToken(token: string): void {
    window.localStorage.setItem(StoreService.TOKEN_KEY, token);
  }

  public getUserToken(): string | null {
    return window.localStorage.getItem(StoreService.TOKEN_KEY);
  }

  public deleteUserToken(): void {
    window.localStorage.removeItem(StoreService.TOKEN_KEY);
  }

  public setLoggedIn(value: boolean): void {
    this._isLoggedIn.next(value);
  }

  public get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  public logoutUser(): void {
    this._isLoggedIn.next(false);
    this.deleteUserToken();
  }
}
