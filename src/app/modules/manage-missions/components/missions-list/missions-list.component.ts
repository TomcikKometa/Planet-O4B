import { Component, Input, OnInit } from '@angular/core';
import { MissionTableData } from 'src/app/modules/api/model/mission-table-data';

@Component({
  selector: 'planet-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.scss']
})
export class MissionsListComponent  {
  @Input() missions: MissionTableData[] = [];

  private static readonly _DISPLAYCOLUMNS: string[] = ['Kryptonim misji', 'Termin misji', 'Status', 'Budżet misji', 'Więcej'];

  public get displayColumns(): string[] {
    return MissionsListComponent._DISPLAYCOLUMNS;
  }

}
