import { Component, OnInit } from '@angular/core';
import {RegistrationUser} from '../models/RegistrationUser';
import {LoginUser} from '../models/LoginUser';
import { Router } from '@angular/router';
import {RegistrationService} from '../services/registration.service';
import {LoginService} from '../services/login.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public user: RegistrationUser;
  public userLogin: LoginUser;

  constructor(private loginService: LoginService, private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
    this.user = new RegistrationUser(0,"","","","","");
    this.userLogin = new LoginUser("","");
  }

  Registration(user: RegistrationUser, ngForm: NgForm) {
    if(user.Email != "" && user.Password != "" && user.FullName != "" && user.ConfirmPassword != "" && user.Birthday != ""){
      this.registrationService.postMethodRegistration(user)
      .subscribe(
        data => {
          this.userLogin.username = user.Email;
          this.userLogin.password = user.Password;
          this.loginService.getTheToken(this.userLogin)
        },
        error => {
          console.log(error);
          alert("GRESKA KOD POSTA!");
        })

      this.router.navigateByUrl('/start');
      return true;
    }
  }
}
