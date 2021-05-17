import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class UserManagementApiService {
  appConfig: any;
  constructor(private httpclient: HttpClient) {};
  async api_call(api_call_type:string, api_name:string, body:any) {
    const headers =  {"Accept": "application/json"};
    var api_dict: { [id: string] : string; } = {
      "login":"/api/method/login",
      "initiate_otp":"/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.initiate_otp",
      "verify_otp":"/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.verify_otp",
      "resend_otp":"/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.resend_otp",
      "get_reset_password_key":"/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.get_reset_password_key",
      "update_password":"/api/method/frappe.core.doctype.user.user.update_password"
    };
    if (api_call_type == 'get') {
    try {
      const response = await this.httpclient.get<any>(this.appConfig.baseUrl + api_dict[api_name], { headers: headers, withCredentials: true});
      return response.toPromise();
    } catch (error) {
        throw error;
    }
  }
  else {
    try {
      const response = await this.httpclient.post<any>(this.appConfig.baseUrl + api_dict[api_name], body, { headers: headers, withCredentials: true});
      return response.toPromise();
    } catch (error) {
        throw error;
    }
    }
  }
  loadAppConfig() {
    return this.httpclient.get('/assets/app-config.json')
    .toPromise()
    .then(data => {
        this.appConfig = data;
    })
  }

  get config() {
      return this.appConfig;
  }
  }
