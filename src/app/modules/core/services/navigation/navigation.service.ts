import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/app-routing.module';
import { LoginPath } from 'src/app/modules/login/login-routing.module';

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

  public navigateToMissions(): void {
    this.router.navigate([RoutePath.MANAGE_MISSIONS]);
  }

  public navigateToSpecialPointsAdresses(): void {
    this.router.navigate([RoutePath.SPECIAL_POINTS_ADRESSES]);
  }

  public navigateToTeleportaion(): void {
    this.router.navigate([RoutePath.EXPORT_IMPORT]);
  }

  public navigateToExportImport(): void {
    this.router.navigate([RoutePath.TELEPORTATION]);
  }
}
