import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './modules/core/guards/login/login.guard';
export enum RoutePath {
  LOGIN = '',
  DASHBOARD = 'dashboard',
  MANAGE_MISSIONS = 'manage-missions',
  SPECIAL_POINTS_ADRESSES = 'special-points-addresses',
  TELEPORTATION = 'teleportation',
  EXPORT_IMPORT = 'export-import'
}

const routes: Routes = [
  {
    path: RoutePath.DASHBOARD,
    loadChildren: () => import('./modules/main-dashboard/main-dashboard.module').then(m => m.MainDashboardModule),
    canActivate: [LoginGuard]
  },
  {
    path: RoutePath.LOGIN,
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: RoutePath.MANAGE_MISSIONS,
    loadChildren: () => import('./modules/manage-missions/manage-missions.module').then(m => m.ManageMissionsModule)
  },
  {
    path: RoutePath.SPECIAL_POINTS_ADRESSES,
    loadChildren: () => import('./modules/special-points-addresses/special-points-addresses.module').then(m => m.SpecialPointsAddressesModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutePath.DASHBOARD
  },
  {
    path: '**',
    loadComponent: () =>
      import('./modules/ui/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
      title:'404 Error - Page Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
