import { AfterViewInit, Component, inject, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MissionTableData } from 'src/app/modules/api/model/mission-table-data';

import { AddMissisionDialogComponent } from '../add-missision-dialog/add-missision-dialog.component';

@Component({
  selector: 'planet-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.scss']
})
export class MissionsListComponent implements AfterViewInit {
  @Input() public missions: MissionTableData[] = [];

  private static readonly _DISPLAYCOLUMNS: string[] = [
    'codename',
    'missionsDate',
    'status',
    'budget',
    'details',
    'Więcej'
  ];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MissionTableData>;

  private readonly dialog: MatDialog = inject(MatDialog);

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe((sort: Sort) => {
      this.sortData(sort);
    });
  }

  public addMission(mission: any): void {
    this.dialog.open(AddMissisionDialogComponent, {
      data: mission,
      width: '50vw',
      position: { top: '5vw', left: '25vw' },
      autoFocus: false
    });
  }

  public sortData(sort: Sort): any {
    this.missions.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'codename':
          return this.compareString(a.codename, b.codename, isAsc);
        case 'missionsDate':
          return this.compareDate(a.missionsDate, b.missionsDate, isAsc);
        case 'status':
          return this.compareString(a.status, b.status, isAsc);
        case 'budget':
          return this.compareNumber(Number(a.budget), Number(b.budget), isAsc);
        default:
          return 0;
      }
    });
    this.table.renderRows();
  }

  public get displayColumns(): string[] {
    return MissionsListComponent._DISPLAYCOLUMNS;
  }

  private compareNumber(a: number, b: number, isAsc: boolean): number {
    if (isAsc) {
      return a > b ? 1 : -1;
    } else {
      return a > b ? -1 : 1;
    }
  }

  private compareString(a: string, b: string, isAsc: boolean): number {
    return a.localeCompare(b, 'pl-PL') * (isAsc ? 1 : -1);
  }

  private compareDate(a: string, b: string, isAsc: boolean): number {
    const parametersStart = a.split('.');
    const dayStart = parametersStart[0];
    const monthStart = parametersStart[1];
    const yearStart = parametersStart[2];
    const aDate = new Date(+yearStart, +monthStart - 1, +dayStart);

    const parametersEnd = b.split('.');
    const dayEnd = parametersEnd[0];
    const monthEnd = parametersEnd[1];
    const yearEnd = parametersEnd[2];
    const bDate = new Date(+yearEnd, +monthEnd - 1, +dayEnd);

    if (isAsc) {
      return aDate > bDate ? 1 : -1;
    } else {
      return aDate > bDate ? -1 : 1;
    }
  }
}
