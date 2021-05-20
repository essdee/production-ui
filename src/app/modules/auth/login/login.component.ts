import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  showPassword = false;

  constructor(
    private router: Router,
    public toastService: ToastService,
    public userManagementApi: UserManagementApiService,
    public toast: ToastService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async verifyUser() {
    this.isLoginClicked = true;
    if(this.mobileNumber.length != 10){
      this.toast.showDanger('Please Enter 10 digit mobile number');
      return;
    }
    const body = {
      "usr": this.mobileNumber,
      "pwd": this.password
    };
    this.userManagementApi.login(body).then((res) => {
      if (res) {
        const qparam = this.route.snapshot.queryParamMap.get("redirect_to");
        if (qparam)
          this.router.navigateByUrl(qparam);
        else
          this.router.navigateByUrl('/home');
      }
      else {
        this.isLoginClicked = false;
      }
    });
  }
  
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
