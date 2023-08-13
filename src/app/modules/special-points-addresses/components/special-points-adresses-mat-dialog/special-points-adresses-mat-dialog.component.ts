import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

import {
  SpecialPointsAddressesFormControlsName as SpecialPointsControlsName,
  SpecialPointsFormMatDialogService
} from '../../special-points-form-service/special-points-form-mat-dialog.service';

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
  public specialAddressName: string = 'Geronimo';
  public changedViewDialog: boolean = false;
  public specialAddressesFormGroup!: FormGroup;
  public specialPointsControlsName: typeof SpecialPointsControlsName = SpecialPointsControlsName;
  public progress = 0;
  public fraction: string = 'fraction';

  public addresses: SpecialaddressesMatSelect[] = [
    { type: 'Adres punktu teleportacji', value: '0' },
    { type: 'Inny adres ', value: '1' }
  ];

  private readonly dialogRef: MatDialogRef<SpecialPointsAdressesMatDialogComponent> = inject(MatDialogRef);
  private readonly specialPointsFormMatDialogService: SpecialPointsFormMatDialogService = inject(
    SpecialPointsFormMatDialogService
  );
  
  private readonly _destroy: Subject<void> = new Subject<void>;

  public ngOnInit(): void {
    this.specialAddressesFormGroup = this.specialPointsFormMatDialogService.createSpecialAddressesForm();
    
    this.specialAddressesFormGroup.valueChanges.pipe(takeUntil(this._destroy)).subscribe(() => {
      const numberOfFields: AbstractControl[] = Object.values(this.specialAddressesFormGroup.controls);
      const controlCount = Object.keys(this.specialAddressesFormGroup.controls).length;
      let validCount = 0;

      for( const [key, value] of Object.entries(this.specialAddressesFormGroup.controls)) {
        if (value.valid) validCount++;
      }

    this.progress = Math.round(validCount / controlCount * 100);
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
    this.specialAddressName;
  }

  public manageProgress(): void {
    if (this.progress === 100) {
      this.progress = 0;
    } else {
      this.progress = this.progress + 1;
    }
  }

  // private createMissionRequest(): MissisonRequest {
  //   return {
  //     codename: this.missionFormGroup.get(this.missionFormControlsName.CODENAME)?.value,
  //     mission_date: this.missionFormGroup.get(this.missionFormControlsName.MISSION_DATE)?.value,
  //     budget: this.missionFormGroup.get(this.missionFormControlsName.BUDGET)?.value,
  //     status: this.missionFormGroup.get(this.missionFormControlsName.STATUS)?.value
  //   };
  // }

 
}
