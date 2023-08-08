import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
export enum LoginPath {
  MAIN = ''
}

const routes: Routes = [
  {
    path: LoginPath.MAIN,
    component: LoginComponent,
    title: 'Login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
