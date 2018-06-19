import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';

import {Service} from '../models/Service'
import { NgForm } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  imageUrl: string;
  service: Service = null;
  public uploader:FileUploader = new FileUploader({url: 'http://localhost:51680/api/file'});

  private temp: string;
  private resp: string[] = [];

  constructor(private router: Router, private Service: ServicesService) {
    this.uploader.onCompleteItem = (item:any, response:string, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status);
      if(response == "Please Upload image of type .jpg,.gif,.png,.img,.jpeg." || response == "Please Upload a file upto 1 mb." || response == "Please Upload a image." || response == "some Message"){
        
      }
      else if(response == ""){
        this.resp = [];
      }
      else{
        this.temp = response.replace('"', "");
        this.temp = this.temp.replace('"', "");
        this.resp.push(this.temp)};
      }
   }

  ngOnInit() {
  }

  AddService(service: Service,  ngForm: NgForm){
    if(service.Email != "" && service.Description != "" && service.Logo != "" && service.Name != ""){
     // this.uploader.uploadAll();
      service.AppUserId = Number(localStorage.getItem("currentUserID"));
      this.Service.postMethodService(service)
      .subscribe(
        data => {
          this.router.navigateByUrl(`/start`);
        },
        error => {
          console.log(error);
          alert("GRESKA KOD ADDSERVICE!");
        })
    }
  }
}
