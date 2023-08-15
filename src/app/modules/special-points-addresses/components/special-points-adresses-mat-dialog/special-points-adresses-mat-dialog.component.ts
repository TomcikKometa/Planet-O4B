import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { first, Subject, takeUntil } from 'rxjs';
import { SpecialPointsRequest } from 'src/app/modules/api/model/special-point-request';
import { SpecialPointsService } from 'src/app/modules/api/services/special-points-addresses/special-points.service';

import {
  SpecialPointsAddressesFormControlsName as SpecialPointsControlsName,
  SpecialPointsFormMatDialogService
} from '../../services/special-points-form-service/special-points-form-mat-dialog.service';

interface SpecialaddressesMatSelect {
  type: string;
  value: string;
}

@Component({
  selector: 'planet-special-points-adresses-mat-dialog',
  templateUrl: './special-points-adresses-mat-dialog.component.html',
  styleUrls: ['./special-points-adresses-mat-dialog.component.scss'],
  providers: [SpecialPointsFormMatDialogService]
})
export class SpecialPointsAdressesMatDialogComponent implements OnInit, OnDestroy {
  public specialAddressName: string = '';
  public changedViewDialog: boolean = false;
  public specialAddressesFormGroup!: FormGroup;
  public specialPointsControlsName: typeof SpecialPointsControlsName = SpecialPointsControlsName;
  public progress: number = 0;
  public fraction: string = 'fraction';

  public addresses: SpecialaddressesMatSelect[] = [
    { type: 'Adres główny', value: '0' },
    { type: 'Adres punktu teleportacji', value: '1' },
    { type: 'Inny adres ', value: '2' }
  ];

  private readonly dialogRef: MatDialogRef<SpecialPointsAdressesMatDialogComponent> = inject(MatDialogRef);
  private readonly specialPointsFormMatDialogService: SpecialPointsFormMatDialogService = inject(
    SpecialPointsFormMatDialogService
  );
  private readonly specialPointsService: SpecialPointsService = inject(SpecialPointsService);
  private readonly _destroy: Subject<void> = new Subject<void>();

  public ngOnInit(): void {
    this.specialAddressesFormGroup = this.specialPointsFormMatDialogService.createSpecialAddressesForm();

    this.specialAddressesFormGroup.valueChanges.pipe(takeUntil(this._destroy)).subscribe(() => {
      const controlCount = Object.keys(this.specialAddressesFormGroup.controls).length;
      let validCount = 0;

      for (const [key, value] of Object.entries(this.specialAddressesFormGroup.controls)) {
        if (value.valid) validCount++;
      }

      this.progress = Math.round((validCount / controlCount) * 100);
    });
  }

  public ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.unsubscribe();
  }

  public close(): void {
    this.dialogRef.close();
  }

  public saveForm(): void {
    switch (this.specialAddressesFormGroup.get(this.specialPointsControlsName.TYPE_ADDRESS)?.value) {
      case '0':
        this.specialAddressName = this.addresses[0].type.toLocaleLowerCase();
        break;
      case '1':
        this.specialAddressName = this.addresses[1].type.toLocaleLowerCase();
        break;
      case '2':
        this.specialAddressName = this.addresses[2].type.toLocaleLowerCase();
        break;
    }
    if (this.specialAddressesFormGroup.valid) {
      this.specialPointsService
        .postSpecialPointAddress(this.createSpecialPointRequest())
        .pipe(first())
        .subscribe({
          next: () => (this.changedViewDialog = true)
        });
    }
  }

  private createSpecialPointRequest(): SpecialPointsRequest {
    return {
      type_Address: this.specialAddressesFormGroup.get(this.specialPointsControlsName.TYPE_ADDRESS)?.value,
      planet: this.specialAddressesFormGroup.get(this.specialPointsControlsName.PLANET)?.value,
      city: this.specialAddressesFormGroup.get(this.specialPointsControlsName.CITY)?.value,
      postal_code: this.specialAddressesFormGroup.get(this.specialPointsControlsName.POSTAL_CODE)?.value,
      building_number: this.specialAddressesFormGroup.get(this.specialPointsControlsName.BUILDING_NUMBER)?.value,
      street: this.specialAddressesFormGroup.get(this.specialPointsControlsName.STREET)?.value,
      room: this.specialAddressesFormGroup.get(this.specialPointsControlsName.ROOM)?.value
    };
  }
}
