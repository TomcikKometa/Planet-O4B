import { Component, inject, Input } from '@angular/core';
import { AdressesSpecialPointsRequest } from 'src/app/modules/api/model/adresses-special-points-request';
import { SpecialPointsTableDataResponse } from 'src/app/modules/api/model/special-point/special-points-table-data-response';

@Component({
  selector: 'planet-special-points-table-list',
  templateUrl: './special-points-table-list.component.html',
  styleUrls: ['./special-points-table-list.component.scss']
})
export class SpecialPointsTableListComponent {
@Input() public specialPointsResponse!: SpecialPointsTableDataResponse;

private static readonly _DISPLAYCOLUMNS: string[] = ['addressType', 'addressPeronalName', 'address', 'more',];

public get displayColumns(): string[] {
  return SpecialPointsTableListComponent._DISPLAYCOLUMNS;
}

}
