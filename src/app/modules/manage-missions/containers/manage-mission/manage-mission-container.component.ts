import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { MissionTableData } from 'src/app/modules/api/model/mission-table-data';
import { ManageMissionsService } from 'src/app/modules/api/services/manage-missions/manage-missions.service';

import { AddMissisionDialogComponent } from '../../components/add-missision-dialog/add-missision-dialog.component';

@Component({
  selector: 'planet-manage-mission',
  templateUrl: './manage-mission-container.component.html',
  styleUrls: ['./manage-mission-container.component.scss']
})
export class ManageMissionContainerComponent implements OnInit {
  public blankMissinData: boolean = true;
  public showMissions: boolean = false;
  public isSpinner: boolean = false;
  public missions: MissionTableData[] = [];
  public activeIndex: number = 0;

  private static readonly _DISPLAYCOLUMNS: string[] = ['codename', 'missionsDate', 'status', 'budget', 'Więcej'];

  private readonly dialog: MatDialog = inject(MatDialog);
  private readonly manageMissionsService: ManageMissionsService = inject(ManageMissionsService);

  public ngOnInit(): any {
    this.manageMissionsService.getMisisionsData().subscribe((missions: any) => {
      this.missions = missions;
    });
  }

  public get displayColumns(): string[] {
    return ManageMissionContainerComponent._DISPLAYCOLUMNS;
  }

  public showMisisonData(): void {
    this.blankMissinData = false;
    this.isSpinner = true;
    this.manageMissionsService.getMisisionsData().subscribe((missions: any) => {
      this.missions = missions;
    });
    setTimeout(() => {
      this.isSpinner = false;
      this.showMissions = true;
    }, 3000);
  }

  public setActiveIndex(index: number): void {
    this.activeIndex = index;
  }

  public sortData(sort: Sort): void {
    const data = this.missions;
    if (!sort.active || sort.direction === '') {
      this.missions = data;
      return;
    }
  }

  public addMission(): void {
    this.dialog.open(AddMissisionDialogComponent, {
      width: '50vw',
      position: { top: '5vw', left: '25vw' },
      autoFocus: false
    });
  }
}
