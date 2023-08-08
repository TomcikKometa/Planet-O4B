import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

export enum Dashboard  {
  MAIN = '',
}

const routes: Routes = [
  {
    path: Dashboard.MAIN,
    component: MainDashboardComponent,
    title:'Strona główna',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDashboardRoutingModule { }
