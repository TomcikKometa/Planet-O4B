import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { MissionsListComponent } from './components/missions-list/missions-list.component';
import { SideNavButtonComponent } from './components/side-nav-button/side-nav-button.component';
import { ManageMissionContainerComponent } from './containers/manage-mission/manage-mission-container.component';
import { ManageMissionsRoutingModule } from './manage-missions-routing.module';

const components: Type<unknown>[] = [MissionsListComponent, SideNavButtonComponent];
const containers: Type<unknown>[] = [ManageMissionContainerComponent];

@NgModule({
  declarations: [...components, ...containers ],
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
