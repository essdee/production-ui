import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ToastComponent } from './shared/toast/toast.component';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementApiService } from './core/services/user-management-api/user-management-api.service';
import { CookieService } from 'ngx-cookie-service';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';

const appconfig = (config: UserManagementApiService) =>{
  return() => {
    return config.loadAppConfig();
  }
}
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ToastComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserManagementApiService,
    CookieService,
  {
    provide:APP_INITIALIZER,
    useFactory:appconfig,
    multi: true,
    deps: [UserManagementApiService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
