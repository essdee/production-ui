import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from 'src/app/app.component';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { UserManagementApiService } from 'src/app/core/services/user-management-api/user-management-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mobileNumber: any;
  password: any;
  isLoginClicked = false;
  isVerified!: boolean;

  constructor(private router: Router, public toastService: ToastService, public userManagementApi: UserManagementApiService,
    private cookieService: CookieService,
    public appComponent: AppComponent) {}

  ngOnInit(): void {
  }
  async verifyUser() {
    if(this.mobileNumber.length != 10){
      this.appComponent.showDanger('Please Enter 10 digit mobile number');
      return;
    }
    this.isLoginClicked = true;
    const body = {
      "usr": this.mobileNumber,
      "pwd": this.password
      };

    try {
      const res = await this.userManagementApi.api_call('post', 'login',body)
      if (res['full_name']){
        this.cookieService.set( 'userName', res['full_name'] ); 
        this.showHomeScreen();
      }
    } catch(error) {
       if(error.status == 401){
        this.isLoginClicked = false;
        this.appComponent.showDanger('Invalid mobile number or password!');
       }
       else{
        this.isLoginClicked = false;
        this.mobileNumber = null;
        this.password = null;
        this.appComponent.showDanger('Something went wrong please try again!');
       }
    }
  }
  showHomeScreen(){
    this.isVerified = true;
    if(this.isVerified){
    this.router.navigateByUrl('/home');
    }
  }
  
  showPassword = false;
  
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
