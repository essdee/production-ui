import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
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
  myForm: FormGroup;

  constructor(
    private router: Router,
    public userManagementApi: UserManagementApiService,
    public toast: ToastService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      usr: ['', [Validators.required, Validators.minLength(10)]],
      pwd: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  async verifyUser() {
    this.isLoginClicked = true;
    if(this.myForm.invalid){
      this.toast.showDanger('Please Enter the credentials properly!');
      return;
    }
    this.userManagementApi.login(this.myForm.value).then((res) => {
      if (res) {
        const qparam = this.route.snapshot.queryParamMap.get('redirect_to');
        if (qparam) this.router.navigateByUrl(qparam);
        else this.router.navigateByUrl('/home');
      } else {
        this.isLoginClicked = false;
      }
    });
  }
  
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
