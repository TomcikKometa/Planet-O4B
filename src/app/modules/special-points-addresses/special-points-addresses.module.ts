import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { ShareModule } from '../share/share.module';
import { SpecialPointsAdressesMatDialogComponent } from './components/special-points-adresses-mat-dialog/special-points-adresses-mat-dialog.component';
import { SpecialPointsTableListComponent } from './components/special-points-table-list/special-points-table-list.component';
import { SpecialPointsAddressesComponent } from './containers/special-points-addresses/special-points-addresses.component';
import { SpecialPointsAddressesRoutingModule } from './special-points-addresses-routing.module';

const components: Type<unknown>[] = [
  SpecialPointsTableListComponent,
  SpecialPointsAdressesMatDialogComponent
];
const containers: Type<unknown>[] = [SpecialPointsAddressesComponent];

@NgModule({
  declarations: [...components, ...containers],
  imports: [
    CommonModule,
    SpecialPointsAddressesRoutingModule,
    ShareModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ]
})
export class SpecialPointsAddressesModule {}
