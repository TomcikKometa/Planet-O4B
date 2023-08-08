import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoginFormService {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public createLoginForm(): FormGroup {
    return this.formBuilder.group({
      [LoginFormControlsName.LOGIN]: this.formBuilder.control('', {validators: [Validators.required]}),
      [LoginFormControlsName.PASSWORD]: this.formBuilder.control('', {validators: [Validators.required]})
    });
  }
}

export enum LoginFormControlsName {
  LOGIN = 'login',
  PASSWORD = 'password'
}
