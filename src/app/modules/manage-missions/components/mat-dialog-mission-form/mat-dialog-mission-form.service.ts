import { formatDate } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MatDialogMissionFormService {
  private static readonly CODENAME_PATTERN: string = '^[0-9]{5}|[a-z]{5}-[0-3]{3}|[a-z]{2}-[0-9]{2}';

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public createMissionForm(data?: any): FormGroup {
    const parametersStart = data.missionsDate.split('.');
    const dayStart = parametersStart[0];
    const monthStart = parametersStart[1];
    const yearStart = parametersStart[2];
    const aDate = new Date(+yearStart, +monthStart - 1, +dayStart);

    if (data) {
      return this.formBuilder.group({
        [MatDialogMissionFormControlsName.CODENAME]: this.formBuilder.control(data.codename, {
          validators: [Validators.required, Validators.pattern(MatDialogMissionFormService.CODENAME_PATTERN)]
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
    } else
      return this.formBuilder.group({
        [MatDialogMissionFormControlsName.CODENAME]: this.formBuilder.control('0', {
          validators: [Validators.required, Validators.pattern(MatDialogMissionFormService.CODENAME_PATTERN)]
        }),
        [MatDialogMissionFormControlsName.MISSION_DATE]: this.formBuilder.control('0', {
          validators: [Validators.required]
        }),
        [MatDialogMissionFormControlsName.BUDGET]: this.formBuilder.control('0', {
          validators: [Validators.required]
        }),
        [MatDialogMissionFormControlsName.STATUS]: this.formBuilder.control('', {
          validators: [Validators.required]
        })
      });
  }
}

export enum MatDialogMissionFormControlsName {
  CODENAME = 'codename',
  MISSION_DATE = 'mission_date',
  BUDGET = 'budget',
  STATUS = 'status'
}
