import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { ManageMissionsService } from 'src/app/modules/api/services/manage-missions/manage-missions.service';

import { AddMissisionDialogComponent } from '../../components/add-missision-dialog/add-missision-dialog.component';

@Component({
  selector: 'planet-manage-mission',
  templateUrl: './manage-mission-container.component.html',
  styleUrls: ['./manage-mission-container.component.scss']
})
export class ManageMissionContainerComponent implements OnInit, AfterViewInit {
  public blankMissinData = true;
  public showMissions = false;
  public isSpinner = false;
  public hide = false;
  public missions: any = [];
  public activeIndex: number = 0;

  private static readonly _DISPLAYCOLUMNS: string[] = ['codename', 'missionsDate', 'status', 'budget', 'Więcej'];

  private readonly manageMissionsService: ManageMissionsService = inject(ManageMissionsService);
  public readonly dialog: MatDialog = inject(MatDialog);

  public ngOnInit(): any {
    this.manageMissionsService.getMisisionsData().subscribe((missions: any) => {
      this.missions = missions;
    });
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
      this.hide = true;
    }, 3000);
  }

  public setActiveIndex(index: number): void {
    this.activeIndex = index;
  }

  public get displayColumns(): string[] {
    return ManageMissionContainerComponent._DISPLAYCOLUMNS;
  }

  public sortData(sort: Sort): void {
    const data = this.missions;
    if (!sort.active || sort.direction === '') {
      this.missions = data;
      return;
    }

    this.missions.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'codename':
          return this.compare(a.codename, b.codename, isAsc);
        case 'missionsDate':
          return this.compare(a.missionsDate, b.missionsDate, isAsc);
        case 'status':
          return this.compare(a.status, b.status, isAsc);
        case 'budget':
          return this.compare(a.budget, b.budget, isAsc);
        default:
          return 0;
      }
    });
    
  }
  private compare(a: number | string, b: number | string, isAsc: boolean): any {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  ngAfterViewInit(): void {
    this.missions;
  };

  public addMission(): void{
    this.dialog.open(AddMissisionDialogComponent, {
      width: '50vw',
      position: {top:'2vw', left:'25vw'}
    });
  }
}

