import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { ShareModule } from '../share/share.module';
import { AddMissisionDialogComponent } from './components/add-missision-dialog/add-missision-dialog.component';
import { MissionsListComponent } from './components/missions-list/missions-list.component';
import { ManageMissionContainerComponent } from './containers/manage-mission/manage-mission-container.component';
import { ManageMissionsRoutingModule } from './manage-missions-routing.module';

const components: Type<unknown>[] = [MissionsListComponent, AddMissisionDialogComponent];
const containers: Type<unknown>[] = [ManageMissionContainerComponent];

@NgModule({
  declarations: [...components, ...containers],
  imports: [
    CommonModule,
    ManageMissionsRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    CurrencyMaskModule,
    MatSelectModule,
    ShareModule
  ]
})
export class ManageMissionsModule {}
