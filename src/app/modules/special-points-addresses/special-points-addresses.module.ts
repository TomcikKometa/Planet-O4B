import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

import { ShareModule } from '../share/share.module';
import { SpecialPointsTableListComponent } from './components/special-points-table-list/special-points-table-list.component';
import { SpecialPointsAddressesComponent } from './containers/special-points-addresses/special-points-addresses.component';
import { SpecialPointsAddressesRoutingModule } from './special-points-addresses-routing.module';

const components : Type<unknown>[] = [SpecialPointsTableListComponent]; 
const containers: Type<unknown>[] = [SpecialPointsAddressesComponent];


@NgModule({
  declarations: [...components, ...containers ],
  imports: [
    CommonModule,
    SpecialPointsAddressesRoutingModule,
    ShareModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule
  ]
})
export class SpecialPointsAddressesModule { }
