import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { UserManagementApiService } from 'src/app/core/services/user-management-api/user-management-api.service';

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
  isVerifyOtpClicked = false;
  isSendOtpClicked = false;
  isReSendOtpClicked = false;
  remaining:number = 60;
  timerOn = true;

  constructor(private router: Router, public userManagementApi: UserManagementApiService,
    public toast: ToastService) {}

  ngOnInit(): void {
  }

 startTimer() {
    var sec = this.remaining % 60;
    if(sec==0){
      this.timeLeft = 60
    }
    else{
    this.timeLeft = sec < 10 ? 0 + sec : sec;
    }
    this.remaining -= 1;
    
    if(this.remaining >= 0 && this.timerOn) {
      setTimeout(() => {
          this.startTimer();
      }, 1000);
      return;
    }
    this.timerOn = false
  }

  // Todo: Alter below functions as per response format
  async sendOtp(){
    this.isSendOtpClicked = true;
    if(this.mobileNumber.length != 10){
      this.toast.showDanger('Please Enter 10 digit mobile number');
      return;
    }
    this.is_otp_sent = true;
    this.startTimer();
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
    //     this.toast.showDanger(this.userManagementApi.result.message.error_message);
    //   }
    // }
    // else{
    //   this.isButtonClicked = false;
    //   this.toast.showDanger('Unable to reach server');
    // }
  }
  async verifyOtp(){
    this.isVerifyOtpClicked = true;
    if(this.mobileNumber.length != 10){
      this.toast.showDanger('Please Enter 10 digit mobile number');
      return;
    }
    // if(this.otp.length != 4){
    //   this.toast.showDanger('Please Enter 4 digit OTP');
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
    //     this.toast.showDanger('Incorrect OTP');
    //   }
    //   if(this.userManagementApi.result.message.status == 'Expired'){
    //     this.toast.showDanger('OTP Expired');
    //   }
    //   if(this.userManagementApi.result.message.status == 'Maximum Limit Reached'){
    //     this.toast.showDanger('Maximum Limit Reached');
    //   }
    // }
    // }
    // else{
    //   this.isButtonClicked = false;
    //   this.toast.showDanger('Unable to reach server');
    // }
  }
  resendOtp(){
    this.isReSendOtpClicked = true;
    this.is_otp_resent = true;
    // this.userManagementApi.resendOtp(this.loginAttemptId);
  }

}
