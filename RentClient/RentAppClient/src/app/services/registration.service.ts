import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { RegistrationUser } from '../models/RegistrationUser';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: Http, private httpClient: HttpClient) { }
  
  getMethodRegistration(email): Observable<RegistrationUser> {
    return this.httpClient.get<RegistrationUser>('http://localhost:51680/api/User?email='+email)  
  }

  postMethodRegistration(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Account/Register", newMember)
  }

  putMethodRegistration(newMember): Observable<any> {
    return this.httpClient.put("http://localhost:51680/api/UserPut", newMember)
  }
}
