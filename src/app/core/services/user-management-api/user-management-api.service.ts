import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ToastService } from '../toast/toast.service';


@Injectable()
export class UserManagementApiService {
  constructor(
    private httpclient: HttpClient,
    private api: ApiService,
    private toast: ToastService
  ) {}

  async sendOtp(body: any) {
    return this.httpclient
      .post<any>(this.api.url('initiate_otp'), body, {
        headers: { Accept: 'application/json' }
      })
      .toPromise()
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        this.api.handleError(err);
        if (err.status == 404) this.toast.showDanger('Invalid mobile number');
        return null;
      });
  }

  async resendOtp(body: any) {
    return this.httpclient
      .post<any>(this.api.url('resend_otp'), body, {
        headers: { Accept: 'application/json' }
      })
      .toPromise()
      .then((res) => {
        console.log(res);
        this.toast.showSuccess(res['message']);
        return true;
      })
      .catch((err) => {
        this.api.handleError(err);
        return false;
      });
  }

  async verifyOtp(body: any) {
    return this.httpclient
      .post<any>(this.api.url('verify_otp'), body, {
        headers: { Accept: 'application/json' }
      })
      .toPromise()
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        this.api.handleError(err);
        return null;
      });
  }

  async updatePassword(body: any) {
    console.log("in",body);
    return this.httpclient
      .post<any>(this.api.url('update_password'), body, {
        headers: { Accept: 'application/json' },
      })
      .toPromise()
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err) => {
        this.api.handleError(err);
        return false;
      });
  }

  async login(body: any) {
    return this.httpclient
      .post<any>(this.api.url('login'), body, {
        headers: { Accept: 'application/json' },
        withCredentials: true,
      })
      .toPromise()
      .then((_) => {
        return true;
      })
      .catch((err) => {
        this.api.handleError(err);
        if (err.status == 401)
          this.toast.showDanger('Invalid mobile number or password!');
        return false;
      });
  }

  async isAuthenticated() {
    return this.httpclient
      .get<any>(this.api.url('get_logged_user'), {
        headers: { Accept: 'application/json' },
        withCredentials: true,
      })
      .toPromise()
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err) => {
        console.log(err);
        this.api.handleError(err);
        return false;
      });
  }
}
