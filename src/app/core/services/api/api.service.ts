import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastService } from '../toast/toast.service';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly baseurl = environment.serverAddress;
  readonly api_dict: { [id: string]: string } = {
    login: '/api/method/login',
    initiate_otp: '/api/method/user_management.user_management.doctype.cd_otp_auth_attempt.cd_otp_auth_attempt.initiate_otp',
    verify_otp: '/api/method/user_management.user_management.doctype.cd_otp_auth_attempt.cd_otp_auth_attempt.verify_otp',
    resend_otp: '/api/method/user_management.user_management.doctype.cd_otp_auth_attempt.cd_otp_auth_attempt.resend_otp',
    update_password: '/api/method/frappe.core.doctype.user.user.update_password',
    get_logged_user: '/api/method/frappe.auth.get_logged_user',
  };

  constructor(private toast: ToastService) {}

  get baseUrl() {
    return this.baseurl;
  }

  url(endpoint: string): string {
    return this.baseurl + this.api_dict[endpoint];
  }

  handleError(err: HttpErrorResponse) {
    if (err.status === 0) {
      console.error('An error occurred:', err.error);
    } else {
      if (err.error['message']) {
        this.toast.showDanger(err.error['message']);
      }
      else {
        this.toast.showWarning("There was an error with status code: "+ err.status);
      }
      console.error('Backend returned code ${err.status}');
    }
    return throwError('Something bad happened; please try again later.');
  }
}
