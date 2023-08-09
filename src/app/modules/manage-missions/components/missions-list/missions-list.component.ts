import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  inject
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { MissionTableData } from 'src/app/modules/api/model/mission-table-data';

@Component({
  selector: 'planet-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.scss']
})
export class MissionsListComponent implements AfterViewInit {
  @Input() public missions: MissionTableData[] = [];

  private static readonly _DISPLAYCOLUMNS: string[] = ['codename', 'missionsDate', 'status', 'budget', 'Więcej'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MissionTableData>;

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe((sort: Sort) => {
      this.sortData(sort);
    });
  }

  public sortData(sort: Sort): any {

    this.missions.sort((a, b) => {
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
    this.table.renderRows();
  }
  
  private compare(a: number | string, b: number | string, isAsc: boolean): any {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  public get displayColumns(): string[] {
    return MissionsListComponent._DISPLAYCOLUMNS;
  }
}
