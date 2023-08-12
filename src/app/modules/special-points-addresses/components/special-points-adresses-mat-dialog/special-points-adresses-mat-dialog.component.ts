import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { SpecialPointsAddressesFormControlsName } from '../special-points-form-mat-dialog.service';

@Component({
  selector: 'planet-special-points-adresses-mat-dialog',
  templateUrl: './special-points-adresses-mat-dialog.component.html',
  styleUrls: ['./special-points-adresses-mat-dialog.component.scss']
})
export class SpecialPointsAdressesMatDialogComponent {
  public specialAddressName: string = 'Geronimo';
  public changedViewDialog: boolean = false;
  public specialAddressesFormGroup!: FormGroup;
  public specialPointsFormControlsName: typeof SpecialPointsAddressesFormControlsName =
    SpecialPointsAddressesFormControlsName;

  public addresses: any[] = [
    { type: 'Adres punktu teleportacji', value: '0' },
    { type: 'Inny adres ', value: '1' }
  ];

  constructor(public readonly dialogRef: MatDialogRef<SpecialPointsAdressesMatDialogComponent>) {}

  // public readonly dialogRef: MatDialogRef<SpecialPointsAdressesMatDialogComponent> = inject(
  //   SpecialPointsAdressesMatDialogComponent
  // );

  public close(): void {
    this.dialogRef.close();
  }

  public saveForm(): void {
    this.specialAddressName;
  }
}
