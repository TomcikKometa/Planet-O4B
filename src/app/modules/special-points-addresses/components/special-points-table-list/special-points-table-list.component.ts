import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'planet-special-points-table-list',
  templateUrl: './special-points-table-list.component.html',
  styleUrls: ['./special-points-table-list.component.scss']
})
export class SpecialPointsTableListComponent {
@Input() public addresses:any[] = [];

private static readonly _DISPLAYCOLUMNS: string[] = ['addressType', 'addressPeronalName', 'address', 'details',];

public get displayColumns(): string[] {
  return SpecialPointsTableListComponent._DISPLAYCOLUMNS;
}

}
