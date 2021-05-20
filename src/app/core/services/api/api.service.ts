import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService{
  readonly baseurl = environment.serverAddress;
  readonly api_dict: { [id: string]: string } = {
    'login': '/api/method/login',
    'initiate_otp': '/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.initiate_otp',
    'verify_otp': '/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.verify_otp',
    'resend_otp': '/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.resend_otp',
    'get_reset_password_key': '/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.get_reset_password_key',
    'update_password': '/api/method/frappe.core.doctype.user.user.update_password',
    'get_logged_user': '/api/method/frappe.auth.get_logged_user',
  };


  constructor() { }

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
      console.error(
        `Backend returned code ${err.status}, ` + `body was: ${err.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
