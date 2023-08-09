import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageMissionContainerComponent } from './containers/manage-mission/manage-mission-container.component';

export enum Misisons {
  MAIN = ''
}
const routes: Routes = [
  {
    path:Misisons.MAIN,
    component:ManageMissionContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageMissionsRoutingModule { }
