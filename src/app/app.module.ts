import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ToastComponent } from './shared/toast/toast.component';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementApiService } from './core/services/user-management-api/user-management-api.service';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TableComponent } from './shared/table/table.component';
import { CookieService } from 'ngx-cookie-service';

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
    HomeComponent,
    NavbarComponent,
    TableComponent
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
