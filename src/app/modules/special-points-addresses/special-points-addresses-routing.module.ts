import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpecialPointsAddressesComponent } from './containers/special-points-addresses/special-points-addresses.component';

export enum SpecialPointsAdresses {
  MAIN = ''
}
const routes: Routes = [
  {
    path:SpecialPointsAdresses.MAIN,
    component:SpecialPointsAddressesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialPointsAddressesRoutingModule { }
