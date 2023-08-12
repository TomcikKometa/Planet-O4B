import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpecialPointsService } from 'src/app/modules/api/services/special-points.service';
import { SideNavButtonComponent } from 'src/app/modules/share/side-nav-button/side-nav-button.component';

import { SpecialAddressesMatDialogComponent } from '../../components/special-addresses-mat-dialog/special-addresses-mat-dialog.component';

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
  private readonly dialog: MatDialog = inject(MatDialog);

  public ngOnInit(): any {
    this.specialPointsService.getAddressesData().subscribe((addresses: any) => {
      this.addresses = addresses;
    });
  }

  public setActiveIndex(index: number): void {
    this.activeIndex = index;
  }

  public addMissionAddress(): void {
    this.dialog.open(SpecialAddressesMatDialogComponent, {
      width: '50vw',
      position: { top: '2vw', left: '25vw' }
    });
  }
}
