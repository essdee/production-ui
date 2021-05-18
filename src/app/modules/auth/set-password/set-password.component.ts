import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserManagementApiService } from 'src/app/core/services/user-management-api/user-management-api.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  password1!: string;
  password2!: string;
  isButtonClicked = false;
  constructor(public userManagementApi: UserManagementApiService, public appComponent: AppComponent) { }

  ngOnInit(): void {
  }
  async setPassword() {
    // this.isButtonClicked = true;
    // if(this.password1 != this.password2){
    //   this.appComponent.showDanger("Passwords do not match");
    //   return;
    // }
    // await  this.userManagementApi.setPassword(this.password1);
    // // Todo: Alter as per response format
    // if(this.userManagementApi.result){
    //   this.isButtonClicked = false;
    //   if(this.userManagementApi.result.message.status){
    //     if(this.userManagementApi.result.message.status == 'Success'){
    //       this.password1 = '';
    //       this.password2 = '';
    //       this.appComponent.showSuccess('Password Updated');
    //   }
    //   if(this.userManagementApi.result.message.status == 'Failed'){
    //     this.appComponent.showDanger('Password Update Failed');
    //   }
    // }
    // }
    // else{
    //   this.isButtonClicked = false;
    //   this.appComponent.showDanger('Unable to reach server');
    // }
  }

  showPassword1 = false;
  showPassword2 = false;
  
  toggleShowPassword1() {
    this.showPassword1 = !this.showPassword1;
  }
  toggleShowPassword2() {
    this.showPassword2 = !this.showPassword2;
  }

}
