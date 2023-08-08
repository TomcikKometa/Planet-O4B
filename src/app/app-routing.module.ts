import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './modules/core/guards/login/login.guard';
export enum RoutePath {
  LOGIN = 'login',
  DASHBOARD = 'dashboard',
  MANAGE_MISSIONS = 'manage-missions'
}

const routes: Routes = [
  {
    path: RoutePath.DASHBOARD,
    loadChildren: () => import('./modules/main-dashboard/main-dashboard.module').then(m => m.MainDashboardModule),
    canActivate: [LoginGuard]
  },
  {
    path: RoutePath.LOGIN,
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path:RoutePath.MANAGE_MISSIONS,
    loadChildren: () => import('./modules/manage-missions/manage-missions.module').then((m) => m.ManageMissionsModule)
  },
  {
    path: '**',
    redirectTo: RoutePath.DASHBOARD
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

