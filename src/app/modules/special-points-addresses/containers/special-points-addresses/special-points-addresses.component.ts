import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpecialPointsService } from 'src/app/modules/api/services/special-points.service';
import { SideNavButtonComponent } from 'src/app/modules/share/side-nav-button/side-nav-button.component';

import { SpecialPointsAdressesMatDialogComponent } from '../../components/special-points-adresses-mat-dialog/special-points-adresses-mat-dialog.component';

@Component({
  selector: 'planet-special-points-addresses',
  templateUrl: './special-points-addresses.component.html',
  styleUrls: ['./special-points-addresses.component.scss'],
  providers: [SideNavButtonComponent]
})
export class SpecialPointsAddressesComponent implements OnInit{
  public activeIndex: number = 0;
  public addresses:any[] = [];

  private readonly specialPointsService: SpecialPointsService = inject(SpecialPointsService);
  public readonly dialog: MatDialog = inject(MatDialog);

  public ngOnInit(): any {
    this.specialPointsService.getAddressesData().subscribe((addresses: any) => {
      this.addresses = addresses;
    });
  }

  public setActiveIndex(index: number): void {
    this.activeIndex = index;
  }

  public addMissionAddress(): void {
    this.dialog.open(SpecialPointsAdressesMatDialogComponent, {
      width: '42vw',
      position: { top: '5vw', left: '25vw' },
      autoFocus: false
    });
  }
}
