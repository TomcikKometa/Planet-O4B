import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planet-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.scss']
})
export class MissionsListComponent  {

  private static readonly _DISPLAYCOLUMNS: string[] = ['Kryptonim misji', 'Termin misji', 'Status', 'Budżet misji', 'Więcej'];

  public get displayColumns(): string[] {
    return MissionsListComponent._DISPLAYCOLUMNS;
  }

}
