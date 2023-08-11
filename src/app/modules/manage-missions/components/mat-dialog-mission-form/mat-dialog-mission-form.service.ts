import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MatDialogMissionFormService {

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public createLoginForm(): FormGroup {
    return this.formBuilder.group({
      [MatDialogMissionFormControlsName.CODENAME]: this.formBuilder.control('', {validators: [Validators.required]}),
      [MatDialogMissionFormControlsName.MISSION_DATE]: this.formBuilder.control('', {validators: [Validators.required]}),
      [MatDialogMissionFormControlsName.BUDGET]: this.formBuilder.control('', {validators: [Validators.required]}),
      [MatDialogMissionFormControlsName.STATUS]: this.formBuilder.control('', {validators: [Validators.required]})
    });
  }
}

export enum MatDialogMissionFormControlsName {
  CODENAME = 'codename',
  MISSION_DATE = 'mission_date',
  BUDGET = 'budget',
  STATUS = 'status'
}
