import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesService } from '../services/services.service';
import { LoginService } from '../services/login.service';

import {Service} from '../models/Service'

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  services: Service[] = [];


  constructor(private Service: ServicesService, private Login: LoginService) {
   }

  ngOnInit() { 
    if(localStorage.jwt){
      this.Login.SetUserIDinToken(localStorage.getItem("currentUserEmail"));
    }
    this.Service.getMethodServices()
    .subscribe(
      data => {
        this.services = data;
      },
      error => {
        alert("Greska")
        console.log(error);
      })
  }
}
