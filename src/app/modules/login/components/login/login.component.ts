import { Component, DoCheck, inject, OnInit, SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { LoginRequest } from 'src/app/modules/api/model/login-request';
import { LoginService } from 'src/app/modules/api/services/login/login.service';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';
import { StoreService } from 'src/app/modules/core/services/store/store.service';

import { LoginFormControlsName, LoginFormService } from '../../form-service/login-form.service';

@Component({
  selector: 'planet-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginFormService, ToastrService]
})
export class LoginComponent implements OnInit {
  public loginFormGroup!: FormGroup;
  public loginFormControlsName: typeof LoginFormControlsName = LoginFormControlsName;

  private readonly loginFormSercice: LoginFormService = inject(LoginFormService);
  private readonly loginService: LoginService = inject(LoginService);
  private readonly navigationService: NavigationService = inject(NavigationService);

  public ngOnInit(): void {
    this.loginFormGroup = this.loginFormSercice.createLoginForm();
  }

  public login(): void {
    this.loginFormGroup.markAsTouched();
    if (this.loginFormGroup.valid) {
      this.loginService
        .login(this.createLoginRequest())
        .pipe(first())
        .subscribe({
          next: () => this.navigationService.navigateToMainDashboard(),
          // error: (e) => this.toastrService.error('Nieprawidłowy login lub hasło')
        });
    }
  }

  private createLoginRequest(): LoginRequest {
    return {
      login: this.loginFormGroup.get(this.loginFormControlsName.LOGIN)?.value,
      password: this.loginFormGroup.get(this.loginFormControlsName.PASSWORD)?.value
    };
  }
}
