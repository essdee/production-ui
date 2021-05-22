import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserManagementApiService } from 'src/app/core/services/user-management-api/user-management-api.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent implements OnInit {
  password1!: string;
  password2!: string;
  isButtonClicked = false;

  setpassForm: FormGroup;
  showPassword1 = false;
  showPassword2 = false;

  constructor(
    public userManagementApi: UserManagementApiService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.setpassForm = this.fb.group(
      {
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatch }
    );
  }

  passwordMatch(frm: AbstractControl) {
    return frm.get('password')!.value ===
      frm.get('confirmPassword')!.value
      ? null
      : { mismatch: true };
  }

  ngOnInit(): void {
    console.log(history.state);
    if (history.state['reset_password_key']) {
    } else {
      this.router.navigateByUrl('/auth/otp');
    }
  }

  setPassword() {
    this.isButtonClicked = true;
    if (!this.setpassForm.valid) {
      this.isButtonClicked = false;
      return;
    }
    
    this.userManagementApi
      .updatePassword({
        new_password: this.setpassForm.get('password')?.value,
        logout_all_sessions: 1,
        key: history.state['reset_password_key'],
      })
      .then((res) => {
        if (res) {
          this.router.navigateByUrl('/auth/login');
        } else this.isButtonClicked = false;
      });
  }

  toggleShowPassword1() {
    this.showPassword1 = !this.showPassword1;
  }

  toggleShowPassword2() {
    this.showPassword2 = !this.showPassword2;
  }
}
