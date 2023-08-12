import { Component, inject, Input } from '@angular/core';
import { AdressesSpecialPointsRequest } from 'src/app/modules/api/model/adresses-special-points-request';
import { SpecialPointsService } from 'src/app/modules/api/services/special-points.service';

@Component({
  selector: 'planet-special-points-table-list',
  templateUrl: './special-points-table-list.component.html',
  styleUrls: ['./special-points-table-list.component.scss']
})
export class SpecialPointsTableListComponent {
@Input() public addresses: AdressesSpecialPointsRequest[] = [];

private static readonly _DISPLAYCOLUMNS: string[] = ['addressType', 'addressPeronalName', 'address', 'more',];

private readonly specialPointsService: SpecialPointsService = inject(SpecialPointsService);


public get displayColumns(): string[] {
  return SpecialPointsTableListComponent._DISPLAYCOLUMNS;
}

}
