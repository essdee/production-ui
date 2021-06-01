import { Component, OnInit, ViewChildren } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { UserManagementApiService } from 'src/app/core/services/user-management-api/user-management-api.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  is_otp_sent: boolean = false;
  is_otp_resent: boolean = false;
  timeLeft: number = 60;
  isVerifyOtpClicked = false;
  isSendOtpClicked = false;
  isReSendOtpClicked = false;
  remaining: number = 60;
  timerOn = true;

  mobileForm: FormGroup;
  formInput = ['input1', 'input2', 'input3', 'input4'];
  otpForm: FormGroup;
  otp_auth_attempt_name!: string;
  delete: boolean = false;

  @ViewChildren('formRow') rows: any;
  constructor(
    private router: Router,
    public userManagementApi: UserManagementApiService,
    public toast: ToastService,
    private fb: FormBuilder
  ) {
    this.mobileForm = this.fb.group({
      mobile_number: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.otpForm = this.toFormGroup(this.formInput);
    console.log('in');
  }

  toFormGroup(elements: string[]) {
    const group: any = {};
    elements.forEach((key: string) => {
      group[key] = new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]);
    });
    return new FormGroup(group);
  }

  keyDownEvent(event: any, index: any) {
    if (event.keyCode === 8 && event.which === 8) {
      if (this.rows._results[index].nativeElement.value) {
        this.delete = false;
      } else {
        this.delete = true;
      }
    } else this.delete = false;
  }

  keyUpEvent(event: any, index: any) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      if (this.delete) pos = index - 1;
    } else {
      pos = index + 1;
    }
    if (pos > -1 && pos < this.formInput.length) {
      this.rows._results[pos].nativeElement.focus();
    }
  }

  ngOnInit(): void {}

  startTimer() {
    var sec = this.remaining % 60;
    if (sec == 0) {
      this.timeLeft = 60;
    } else {
      this.timeLeft = sec < 10 ? 0 + sec : sec;
    }
    this.remaining -= 1;

    if (this.remaining >= 0 && this.timerOn) {
      setTimeout(() => {
        this.startTimer();
      }, 1000);
      return;
    }
    this.timerOn = false;
  }

  getOtp(x: any): string {
    let otp = '';
    this.formInput.forEach((key: string) => {
      otp += x[key];
    }, otp);
    return otp;
  }

  async sendOtp() {
    this.isSendOtpClicked = true;
    if (this.mobileForm.invalid) {
      this.toast.showDanger('Please Enter 10 digit mobile number');
      this.isSendOtpClicked = false;
      return;
    }
    console.log(this.mobileForm.value);
    this.userManagementApi.sendOtp(this.mobileForm.value).then((res) => {
      if (res) {
        this.otp_auth_attempt_name = res['otp_auth_attempt_name'];
        this.is_otp_sent = true;
        this.startTimer();
        this.rows._results[0].nativeElement.focus();
      } else this.isSendOtpClicked = false;
    });
  }

  async verifyOtp() {
    console.log(this.otpForm.value);
    this.isVerifyOtpClicked = true;
    if (!this.otpForm.valid) {
      this.toast.showDanger('Please Enter a valid OTP');
      this.isVerifyOtpClicked = false;
      return;
    }
    console.log(this.getOtp(this.otpForm.value));

    this.userManagementApi
      .verifyOtp({
        otp_auth_attempt_name: this.otp_auth_attempt_name,
        incoming_otp: this.getOtp(this.otpForm.value),
        action: 'get_reset_password_key',
      })
      .then((res) => {
        if (res) {
          this.router.navigate(['/auth/set-password'], {
            queryParams: { reset_password_key: res['reset_password_key'] },
          });
        } else this.isVerifyOtpClicked = false;
      });
  }

  resendOtp() {
    this.isReSendOtpClicked = true;
    this.userManagementApi
      .resendOtp({ otp_auth_attempt_name: this.otp_auth_attempt_name })
      .then((x) => {
        if (x) {
          this.timerOn = true;
          this.remaining = 30;
          this.startTimer();
          this.isReSendOtpClicked = false;
        } else {
          this.isReSendOtpClicked = false;
        }
      });
  }
}
