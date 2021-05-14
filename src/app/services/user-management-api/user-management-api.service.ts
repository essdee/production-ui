import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable()
export class UserManagementApiService {
  appConfig: any;
  public result: any;
  public handleError: any;
  public mobileNumber:any;
  public subscriber:any;
  constructor(private httpclient: HttpClient) {};
  async verifyUser(mobileNumber: string, password: string){
    this.mobileNumber = mobileNumber;
    const headers =  {"Accept": "application/json"};
    const body = {
      "usr": mobileNumber,
      "pwd": password
      };
      this.result = await this.httpclient.post<any>(this.appConfig.baseUrl + '/api/method/login', body, { headers: headers}).pipe(delay(1000)).toPromise()
     
      // Todo: Handle response by status code
    //   this.result = await this.httpclient.post<any>(this.appConfig.baseUrl + '/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.verify_user', body, { headers: headers}).subscribe(async data => {
    //     this.result = await data
    //     console.log(data);
    //       },
    //       err=>{
    //         console.log(err.status);
    //       })
    // console.log(this.result)
  }
async initiateOtp(mobileNumber: string){
  this.mobileNumber = mobileNumber;
  const headers =  {"Accept": "application/json"};
  
  const body = {
    "mobile_number": mobileNumber
    };
    console.log(mobileNumber);
    this.result = await this.httpclient.post<any>(this.appConfig.baseUrl + '/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.initiate_otp', body, { headers: headers}).pipe(delay(1000)).toPromise()
}
async verifyOtp(login_attempt_id: string, incoming_otp: string){
  const headers =  {"Accept": "application/json"};
  
  const body = {
    "login_attempt_id": login_attempt_id,
    "incoming_otp": incoming_otp
    };
  this.result = await this.httpclient.post<any>(this.appConfig.baseUrl + '/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.verify_otp', body, { headers: headers}).pipe(delay(1000)).toPromise()
}
resendOtp(login_attempt_id: string){
  const headers =  {"Accept": "application/json"};
  
  const body = {
    "login_attempt_id": login_attempt_id
    };

  this.httpclient.post<any>(this.appConfig.baseUrl + '/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.resend_otp', body, { headers}).subscribe(res => {
      // this.res = data;
  });
}
async setPassword( password: string){
  const headers =  {"Accept": "application/json"};
  console.log(this.mobileNumber, password);
  const body = {
    "mobile_number": this.mobileNumber,
    "password": password
    };
  this.result = await this.httpclient.post<any>(this.appConfig.baseUrl + '/api/method/user_management.user_management.doctype.cd_login_attempt.cd_login_attempt.set_password', body, { headers: headers}).pipe(delay(1000)).toPromise()
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
