import { formatDate } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MatDialogMissionFormService {

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public createMissionForm(data?: any): FormGroup {
    if (data) {
      const parametersStart = data.missionsDate.split('.');
      const dayStart = parametersStart[0];
      const monthStart = parametersStart[1];
      const yearStart = parametersStart[2];
      const aDate = new Date(+yearStart, +monthStart - 1, +dayStart);
      return this.formBuilder.group({
        [MatDialogMissionFormControlsName.CODENAME]: this.formBuilder.control(data.codename, {
          validators: [Validators.required]
        }),
        [MatDialogMissionFormControlsName.MISSION_DATE]: this.formBuilder.control(
          formatDate(aDate, 'yyyy-MM-dd', 'en'),
          {
            validators: [Validators.required]
          }
        ),
        [MatDialogMissionFormControlsName.BUDGET]: this.formBuilder.control(data.budget, {
          validators: [Validators.required]
        }),
        [MatDialogMissionFormControlsName.STATUS]: this.formBuilder.control(data.status, {
          validators: [Validators.required]
        })
      });
    } else {
      return this.formBuilder.group({
        [MatDialogMissionFormControlsName.CODENAME]: this.formBuilder.control('', {
          validators: [Validators.required]
        }),
        [MatDialogMissionFormControlsName.MISSION_DATE]: this.formBuilder.control('', {
          validators: [Validators.required]
        }),
        [MatDialogMissionFormControlsName.BUDGET]: this.formBuilder.control('', {
          validators: [Validators.required]
        }),
        [MatDialogMissionFormControlsName.STATUS]: this.formBuilder.control('', {
          validators: [Validators.required]
        })
      });
    }
  }
}

export enum MatDialogMissionFormControlsName {
  CODENAME = 'codename',
  MISSION_DATE = 'mission_date',
  BUDGET = 'budget',
  STATUS = 'status'
}
