import { Component, inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CurrencyMaskConfig } from 'ng2-currency-mask';
import { first } from 'rxjs';
import { CURRENCY_CONFIG } from 'src/app/modules/api/config/app-config';
import { ManageMissionSelect } from 'src/app/modules/api/model/manage-mission/manage-mission-select';
import { MissisonRequest } from 'src/app/modules/api/model/manage-mission/misison-request';
import { MissionTableDataEdit } from 'src/app/modules/api/model/manage-mission/mission-table-data';
import { ManageMissionsService } from 'src/app/modules/api/services/manage-missions/manage-missions.service';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

import {
  MatDialogMissionFormControlsName,
  MatDialogMissionFormService
} from '../mat-dialog-mission-form/mat-dialog-mission-form.service';

@Component({
  selector: 'planet-add-missision-dialog',
  templateUrl: './add-missision-dialog.component.html',
  styleUrls: ['./add-missision-dialog.component.scss'],
  providers: [MatDialogMissionFormService]
})
export class AddMissisionDialogComponent implements OnInit {
  public missionFormGroup!: FormGroup;
  public missionFormControlsName: typeof MatDialogMissionFormControlsName = MatDialogMissionFormControlsName;
  public missionName: string = '';
  public changedViewDialog: boolean = false;
  public isEdit: boolean = false;

  public statuses: ManageMissionSelect[] = [
    { type: 'Przyszła', value: '1' },
    { type: 'W trakcie ', value: '0' },
    { type: 'Zrealizowana', value: '-1' }
  ];

  private readonly dialogRef: MatDialogRef<AddMissisionDialogComponent> = inject(MatDialogRef);
  private readonly prepareMissionForm: MatDialogMissionFormService = inject(MatDialogMissionFormService);
  private readonly navigationService: NavigationService = inject(NavigationService);
  private readonly manageMissionsService: ManageMissionsService = inject(ManageMissionsService);
  private readonly data: MissionTableDataEdit = inject(MAT_DIALOG_DATA);

  public ngOnInit(): void {
    if (this.data) {
      this.isEdit = this.data.isEdit;
      this.missionFormGroup = this.prepareMissionForm.createMissionForm(this.data.mission);
    } else {
      this.missionFormGroup = this.prepareMissionForm.createMissionForm();
    }
  }

  public get currencyConfig(): CurrencyMaskConfig {
    return CURRENCY_CONFIG;
  }

  public close(): void {
    this.dialogRef.close();
  }

  public navigateToDashboard(): void {
    this.navigationService.navigateToMainDashboard();
    this.dialogRef.close();
  }

  public saveForm(): void {
    this.missionName = this.missionFormGroup.get(this.missionFormControlsName.CODENAME)?.value;

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
}
