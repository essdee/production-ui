import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  is_otp_sent: boolean = false;
  sendOtp(){
    this.is_otp_sent = true;
  }
  verifyOtp(){
    this.router.navigateByUrl('/set-password');
  }

}
