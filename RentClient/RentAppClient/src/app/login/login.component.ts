import { Component, OnInit } from '@angular/core';
import {LoginUser} from '../models/LoginUser';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: LoginUser;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.user = {
      password: ``,
      username: ``
    }
  }

  Login(user: LoginUser, form: NgForm) {
    if(user.username != "" && user.password != ""){
      /*this.loginService.getTheToken(user);
      this.router.navigateByUrl('/home');
      return true;*/
      alert("PROSLO");
    }
    else{
      alert("Greska");
      /*alert("You have to enter username and password!");
      form.reset();
      return false;*/
    }
  }
}
