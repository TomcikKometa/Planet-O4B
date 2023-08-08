import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutePath } from 'src/app/app-routing.module';

import { StoreService } from '../../services/store/store.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  private readonly storeService: StoreService = inject(StoreService);
  private readonly router: Router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storeService.getUserToken()) {
      return true;
    } else {
      return this.router.createUrlTree([RoutePath.LOGIN]);
    }
  }
}
