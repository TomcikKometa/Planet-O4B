import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CurrencyMaskConfig } from 'ng2-currency-mask';
import { first } from 'rxjs';
import { CURRENCY_CONFIG } from 'src/app/modules/api/config/app-config';
import { MissisonRequest } from 'src/app/modules/api/model/misison-request';
import { ManageMissionsService } from 'src/app/modules/api/services/manage-missions/manage-missions.service';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

import {
  MatDialogMissionFormControlsName,
  MatDialogMissionFormService
} from '../mat-dialog-mission-form/mat-dialog-mission-form.service';
import { DatePipe } from '@angular/common';
import { LoginFormControlsName } from 'src/app/modules/login/form-service/login-form.service';

@Component({
  selector: 'planet-add-missision-dialog',
  templateUrl: './add-missision-dialog.component.html',
  styleUrls: ['./add-missision-dialog.component.scss'],
  providers: [MatDialogMissionFormService,DatePipe]
})
export class AddMissisionDialogComponent implements OnInit {
  public missionFormGroup!: FormGroup;
  public missionFormControlsName: typeof MatDialogMissionFormControlsName = MatDialogMissionFormControlsName;
  public missionName: string = '';
  public changedViewDialog: boolean = false;

  public statuses: any[] = [
    { type: 'Przyszła', value: '1' },
    { type: 'W trakcie ', value: '0' },
    { type: 'Zrealizowana', value: '-1' }
  ];

  private readonly dialogRef: MatDialogRef<AddMissisionDialogComponent> = inject(MatDialogRef);
  private readonly prepareMissionForm: MatDialogMissionFormService = inject(MatDialogMissionFormService);
  private readonly navigationService: NavigationService = inject(NavigationService);
  private readonly manageMissionsService: ManageMissionsService = inject(ManageMissionsService);
  private readonly datePipe = inject(DatePipe);
  private readonly data = inject(MAT_DIALOG_DATA);

  OnChanges(): void {}

  public ngOnInit(): void {
    if(this.data){
      this.missionFormGroup = this.prepareMissionForm.createMissionForm(this.data);
    }
   
  }

  public close(): void {
    this.dialogRef.close();
  }

  public saveForm(): void {
    this.missionName = this.missionFormGroup.get(this.missionFormControlsName.CODENAME)?.value;
    console.log(this.missionFormGroup.controls);
    
    if (this.missionFormGroup.valid) {
      this.manageMissionsService
        .postMission(this.createMissionRequest())
        .pipe(first())
        .subscribe({
          next: () => (this.changedViewDialog = true)
        });
    }
  }

  private createMissionRequest(): MissisonRequest {
    return {
      codename: this.missionFormGroup.get(this.missionFormControlsName.CODENAME)?.value,
      mission_date: this.missionFormGroup.get(this.missionFormControlsName.MISSION_DATE)?.value,
      budget: this.missionFormGroup.get(this.missionFormControlsName.BUDGET)?.value,
      status: this.missionFormGroup.get(this.missionFormControlsName.STATUS)?.value
    };
  }

  protected get currencyConfig(): CurrencyMaskConfig {
    return CURRENCY_CONFIG;
  }

  public navigateToDashboard(): void {
    this.navigationService.navigateToMainDashboard();
    this.dialogRef.close();
  }
}
