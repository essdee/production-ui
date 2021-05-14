import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserManagementApiService } from 'src/app/services/user-management-api/user-management-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mobileNumber!: string;
  password!: string;
  isLoginClicked = false;
  isverified!: boolean;

  constructor(private router: Router, public toastService: ToastService, public userManagementApi: UserManagementApiService,
    public appComponent: AppComponent) {}

  ngOnInit(): void {
  }
  async verifyUser() {
    if(this.mobileNumber.length != 10){
      this.appComponent.showDanger('Please Enter 10 digit mobile number');
      return;
    }
    this.isLoginClicked = true;
    await this.userManagementApi.verifyUser(this.mobileNumber, this.password)
    // console.log(this.userManagementApi.result);

    // Todo: Need to handle response here
  //   if(this.userManagementApi.result){
  //     if(this.userManagementApi.result.message.status == 'Failed'){
  //     this.isLoginClicked = false;
  //     this.appComponent.showDanger('Invalid Password!');
  //   }
  //   if(this.userManagementApi.result.message.status == 'Success'){
  //     this.showHomeScreen();
  //   }
  //   if(this.userManagementApi.result.message.error_message == "User not found"){
  //     this.isLoginClicked = false;
  //     this.appComponent.showDanger('User not Found');
  //   }
  // }
  // else{
  //   this.isLoginClicked = false;
  //   this.appComponent.showDanger('Invalid Password!');
  // }
  }
  showHomeScreen(){
    this.isverified = true;
    if(this.isverified){
    this.router.navigateByUrl('/home');
    }
  }
  
  showPassword = false;
  
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
