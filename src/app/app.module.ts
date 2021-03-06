import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementApiService } from './core/services/user-management-api/user-management-api.service';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { ToastModule } from './shared/toast/toast.module';
import { ApiService } from './core/services/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [
    ApiService,
    UserManagementApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
