import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoginComponent } from './modules/auth-screens/login/login.component';
import { OtpComponent } from './modules/auth-screens/otp/otp.component';
import { SetPasswordComponent } from './modules/auth-screens/set-password/set-password.component';
import { ToastComponent } from './shared/toast/toast.component';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementApiService } from './services/user-management-api/user-management-api.service';
import { HomeScreenComponent } from './modules/home-screen/home-screen.component';

const appconfig = (config: UserManagementApiService) =>{
  return() => {
    return config.loadAppConfig();
  }
}
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LoginComponent,
    OtpComponent,
    SetPasswordComponent,
    ToastComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserManagementApiService,
  {
    provide:APP_INITIALIZER,
    useFactory:appconfig,
    multi: true,
    deps: [UserManagementApiService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
