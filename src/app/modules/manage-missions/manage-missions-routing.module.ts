import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageMissionComponent } from './components/manage-mission/manage-mission.component';

export enum Misisons {
  MAIN = ''
}
const routes: Routes = [
  {
    path:Misisons.MAIN,
    component:ManageMissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageMissionsRoutingModule { }
