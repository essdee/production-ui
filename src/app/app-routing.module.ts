import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth-screens/login/login.component';
import { OtpComponent } from './modules/auth-screens/otp/otp.component';
import { SetPasswordComponent } from './modules/auth-screens/set-password/set-password.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'otp', component: OtpComponent},
  { path: 'set-password', component: SetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
