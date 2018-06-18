import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loginUser: string = "";

  constructor() { }

  ngOnInit() {
    this.loginUser = localStorage.getItem("currentUserFullName");
  }

  LoginUser(){
      return localStorage.jwt;
  }
  LogoutUser(){
      localStorage.clear();
  }
}
