import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { ManageMissionComponent } from './components/manage-mission/manage-mission.component';
import { MissionsListComponent } from './components/missions-list/missions-list.component';
import { ManageMissionsRoutingModule } from './manage-missions-routing.module';

const components: any = [ManageMissionComponent, MissionsListComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ManageMissionsRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ManageMissionsModule {}
