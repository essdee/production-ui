import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, OtpComponent, SetPasswordComponent],
  imports: [AuthRoutingModule, CommonModule, FormsModule],
})
export class AuthModule {}

