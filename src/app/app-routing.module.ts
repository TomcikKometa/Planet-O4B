import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './modules/core/guards/login/login.guard';
export enum RoutePath {
  LOGIN = 'login',
  DASHBOARD = 'dashboard'
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
    path: '**',
    redirectTo: RoutePath.DASHBOARD
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

