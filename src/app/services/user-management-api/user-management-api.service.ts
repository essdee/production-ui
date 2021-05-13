import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagementApiService {
  appConfig: any;
  constructor(private httpclient: HttpClient) {};
 

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
