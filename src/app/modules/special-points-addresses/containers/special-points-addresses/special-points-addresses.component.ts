import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageRequestOptions } from 'src/app/modules/api/model/page/page-request-options';
import { SpecialPointsTableDataResponse } from 'src/app/modules/api/model/special-point/special-points-table-data-response';
import { SpecialPointsService } from 'src/app/modules/api/services/special-points-addresses/special-points.service';
import { SideNavButtonComponent } from 'src/app/modules/share/side-nav-button/side-nav-button.component';
import { PaginationOptions } from 'src/app/modules/ui/components/paginator/paginator.component';

import { SpecialPointsAdressesMatDialogComponent } from '../../components/special-points-adresses-mat-dialog/special-points-adresses-mat-dialog.component';

@Component({
  selector: 'planet-special-points-addresses',
  templateUrl: './special-points-addresses.component.html',
  styleUrls: ['./special-points-addresses.component.scss'],
  providers: [SideNavButtonComponent]
})
export class SpecialPointsAddressesComponent implements OnInit {
  public activeIndex: number = 0;
  public specialPointsResponse!: SpecialPointsTableDataResponse;

  private readonly specialPointsService: SpecialPointsService = inject(SpecialPointsService);
  public readonly dialog: MatDialog = inject(MatDialog);

  public ngOnInit(): any {
    this.callGetSpecialPoitsData({currentPage: 1, numberOfItems: 10});
  }

  public setActiveIndex(index: number): void {
    this.activeIndex = index;
  }

  public addMissionAddress(): void {
    this.dialog.open(SpecialPointsAdressesMatDialogComponent, {
      width: '46vw',
      position: { top: '5vw', left: '25vw' },
      autoFocus: false
    });
  }

  public handlePaginationChange(options: PaginationOptions): void {
    this.callGetSpecialPoitsData(options);
  }

  private callGetSpecialPoitsData(options: PaginationOptions): void {
    const requestOptions: PageRequestOptions = {
      currentPage: options.currentPage,
      numberOfItems: options.numberOfItems
    };
    this.specialPointsService
      .getAddressesData(requestOptions)
      .subscribe((specialPointsResponse: SpecialPointsTableDataResponse) => {
        this.specialPointsResponse = specialPointsResponse;
      });
  }
}
