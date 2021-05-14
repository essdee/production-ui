import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserManagementApiService } from 'src/app/services/user-management-api/user-management-api.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  is_otp_sent: boolean = false;
  is_otp_resent: boolean = false;
  mobileNumber!: string;
  otp1!: string;
  otp2!: string;
  otp3!: string;
  otp4!: string;
  loginAttemptId!: string;
  timeLeft: number = 60;
  interval:any;
  isVerifyOtpClicked = false;
  isSendOtpClicked = false;
  isReSendOtpClicked = false;

  constructor(private router: Router, public userManagementApi: UserManagementApiService,
    public appComponent: AppComponent) {}

  ngOnInit(): void {
  }

  startTimer() {
    // Todo: Use other function instead setInterval to handle timer
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 60;
        }
      },1000)
    }
  pauseTimer(){
    clearInterval(this.interval);
  }

  // Todo: Alter below functions as per response format
  async sendOtp(){
    this.isSendOtpClicked = true;
    if(this.mobileNumber.length != 10){
      this.appComponent.showDanger('Please Enter 10 digit mobile number');
      return;
    }
    this.is_otp_sent = true;
    this.startTimer();
    // clearInterval(this.interval);
    // this.isButtonClicked = true;
    // await this.userManagementApi.initiateOtp(this.mobileNumber);
    // console.log(this.userManagementApi.result);
    // if(this.userManagementApi.result){
    //   this.isButtonClicked = false;
    //   if(this.userManagementApi.result.message.name){
    //     this.is_otp_sent = true;
    //     this.loginAttemptId = this.userManagementApi.result.message.name
    //   }
    //   if(this.userManagementApi.result.message.error_message){
    //     this.appComponent.showDanger(this.userManagementApi.result.message.error_message);
    //   }
    // }
    // else{
    //   this.isButtonClicked = false;
    //   this.appComponent.showDanger('Unable to reach server');
    // }
  }
  async verifyOtp(){
    this.isVerifyOtpClicked = true;
    if(this.mobileNumber.length != 10){
      this.appComponent.showDanger('Please Enter 10 digit mobile number');
      return;
    }
    // if(this.otp.length != 4){
    //   this.appComponent.showDanger('Please Enter 4 digit OTP');
    //   return;
    // }
    this.router.navigateByUrl('/set-password');
    // this.isButtonClicked = true;
    // await this.userManagementApi.verifyOtp(this.loginAttemptId, this.otp);
    // if(this.userManagementApi.result){
    //   this.isButtonClicked = false;
    //   if(this.userManagementApi.result.message.status){
    //     if(this.userManagementApi.result.message.status == 'Success'){
    //     this.router.navigateByUrl('/set-password');
    //   }
    //   if(this.userManagementApi.result.message.status == 'Failed'){
    //     this.appComponent.showDanger('Incorrect OTP');
    //   }
    //   if(this.userManagementApi.result.message.status == 'Expired'){
    //     this.appComponent.showDanger('OTP Expired');
    //   }
    //   if(this.userManagementApi.result.message.status == 'Maximum Limit Reached'){
    //     this.appComponent.showDanger('Maximum Limit Reached');
    //   }
    // }
    // }
    // else{
    //   this.isButtonClicked = false;
    //   this.appComponent.showDanger('Unable to reach server');
    // }
  }
  resendOtp(){
    this.isReSendOtpClicked = true;
    this.is_otp_resent = true;
    // this.userManagementApi.resendOtp(this.loginAttemptId);
  }

}
