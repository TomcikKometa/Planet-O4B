import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private readonly router: Router = inject(Router);

  public navigateToLoginPage(): void {
    this.router.navigate([RoutePath.LOGIN]);
  }

  public navigateToMainDashboard(): void {
    this.router.navigate([RoutePath.DASHBOARD]);
  }

 
}
