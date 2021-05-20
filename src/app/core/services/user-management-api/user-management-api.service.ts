import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { retry } from 'rxjs/operators';
import { ToastService } from '../toast/toast.service';


@Injectable()
export class UserManagementApiService {

  constructor(
    private httpclient: HttpClient,
    private api: ApiService,
    private toast: ToastService
  ) { }

  async api_call(api_call_type: string, api_name: string, body?: any) {
    const headers = { Accept: 'application/json' };
    if (api_call_type == 'get') {
      try {
        const response = this.httpclient.get<any>(
          this.api.url(api_name),
          { headers: headers, withCredentials: true }
        );
        return response.toPromise();
      } catch (error) {
        throw error;
      }
    } else {
      try {
        const response = this.httpclient.post<any>(
          this.api.url(api_name),
          body,
          { headers: headers, withCredentials: true }
        );
        return response.toPromise();
      } catch (error) {
        throw error;
      }
    }
  }

  login(body: any) {
    return this.httpclient.post<any>(this.api.url("login"), body, {
      headers: { Accept: 'application/json' },
      withCredentials: true,
    }).toPromise().then((_) => {
      return true;
    }).catch((err) => {
      this.api.handleError(err);
      if (err.status == 401)
        this.toast.showDanger('Invalid mobile number or password!');
      return false;
    });
  }



  isAuthenticated() {
    return this.httpclient
      .get<any>(this.api.url('get_logged_user'), {
        headers: { Accept: 'application/json' },
        withCredentials: true,
      })
      .toPromise().then((res) => {
        console.log(res);
        return true;
      }).catch((err) => {
        console.log(err);
        this.api.handleError(err);
        return false
      });
  }
}
