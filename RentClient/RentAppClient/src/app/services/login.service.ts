import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginUser} from '../models/LoginUser';
import {RegistrationUser} from '../models/RegistrationUser';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: LoginUser;
  
  public loginUser: LoginUser

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.user = {
      password: ``,
      username: ``
    }
  }

  getCurrentUser(Email: string): Observable<RegistrationUser> {
    return this.httpClient.get<RegistrationUser>(`http://localhost:51680/api/Account/GetCurrent?email=${Email}`);
  }

  callGetCurrentUser(email: string){
    this.getCurrentUser(email)
    .subscribe(
      data => {
        if(data != null){
          localStorage.setItem('currentUserEmail', data.Email);
          localStorage.setItem('currentUserFullName', data.FullName);
        }else{
          console.log(`Error in callGetCurrentUser(${email})`);
        }
      },
      error => {
        console.log(error);
      })
  }

  getTheToken(user: LoginUser){

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
    
    if(!localStorage.jwt)
    {
       let x = this.httpClient.post('http://localhost:51680/oauth/token',`username=${user.username}&password=${user.password}&grant_type=password`, {"headers": headers}) as Observable<any>

      x.subscribe(
        res => {
          console.log(res.access_token);
          
          let jwt = res.access_token;

          let jwtData = jwt.split('.')[1]
          let decodedJwtJsonData = window.atob(jwtData)
          let decodedJwtData = JSON.parse(decodedJwtJsonData)

          let role = decodedJwtData.role

          console.log('jwtData: ' + jwtData)
          console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
          console.log('decodedJwtData: ' + decodedJwtData)
          console.log('Role ' + role)

          localStorage.setItem('jwt', jwt)
          localStorage.setItem('role', role);

          this.callGetCurrentUser(user.username);
        },
        err => {
          console.log("Error occured");
        }
      );
    }
  }
  

  SetUserIDinToken(email){
    this.getCurrentUser(email)
    .subscribe(
      data => {
        if(data != null){
          if(localStorage.getItem("currentUserID")){
          }
          else{
            localStorage.setItem('currentUserID', String(data.Id));
          }
        }else{
          console.log(`Error in callGetCurrentUser(${email})`);
        }
      },
      error => {
        console.log(error);
      })
  }
}
