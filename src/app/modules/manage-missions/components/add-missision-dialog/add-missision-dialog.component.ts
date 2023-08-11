import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CurrencyMaskConfig } from 'ng2-currency-mask';
import { first } from 'rxjs';
import { CURRENCY_CONFIG } from 'src/app/modules/api/config/app-config';
import { MissisonRequest } from 'src/app/modules/api/model/misison-request';
import { ManageMissionsService } from 'src/app/modules/api/services/manage-missions/manage-missions.service';

import {
  MatDialogMissionFormControlsName,
  MatDialogMissionFormService
} from '../mat-dialog-mission-form/mat-dialog-mission-form.service';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
  selector: 'planet-add-missision-dialog',
  templateUrl: './add-missision-dialog.component.html',
  styleUrls: ['./add-missision-dialog.component.scss'],
  providers: [MatDialogMissionFormService]
})
export class AddMissisionDialogComponent implements OnInit, AfterViewChecked {
  public missionFormGroup!: FormGroup;
  public missionFormControlsName: typeof MatDialogMissionFormControlsName = MatDialogMissionFormControlsName;
  value: any;
  date: Date = new Date();
  public changedViewDialog: boolean = false;
  public missionName: string = '';

  public statuses: any[] = [
    { type: 'Przyszła', value: '1' },
    { type: 'W trakcie ', value: '0' },
    { type: 'Zrealizowana', value: '-1' }
  ];

  constructor(
    private readonly dateAdapter: DateAdapter<Date>,
    private readonly dialogRef: MatDialogRef<AddMissisionDialogComponent>,
    private readonly prepareMissionForm: MatDialogMissionFormService,
    private readonly manageMissionsService: ManageMissionsService,
    private readonly navigationService: NavigationService,
  ) {
    this.dateAdapter.setLocale('pl');
    this.dateAdapter.format(this.date, 'DD-MM-YYYY');
    this.value = this.date.toString();
  }

  ngOnInit(): void {
    this.missionFormGroup = this.prepareMissionForm.createLoginForm();
    console.log(this.date);
  }

  public close(): void {
    this.dialogRef.close();
  }

  public saveForm(): void {
    this.missionName = this.missionFormGroup.get(this.missionFormControlsName.CODENAME)?.value;
    if (this.missionFormGroup.valid) {
      this.manageMissionsService
        .postMission(this.createMissionRequest())
        .pipe(first())
        .subscribe({
          next: () => this.changedViewDialog = true,
          error: (e) => this.changedViewDialog = true,
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
  ngAfterViewChecked(): void {
    if (this.changedViewDialog) {
      this.changeViewMatDialog();
    }
  }

  protected get currencyConfig(): CurrencyMaskConfig {
    return CURRENCY_CONFIG;
  }

  private changeViewMatDialog(): void {
    this.dialogRef.updateSize('50vw');
  }

  public navigateToDashboard(): void {
    this.navigationService.navigateToMainDashboard();
    this.dialogRef.close();
  }
}
