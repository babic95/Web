import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  service: Service = new Service("", "", "", "", -1, -1);
  
  public uploader2:FileUploader = new FileUploader({url: 'http://localhost:51680/api/file'});
  private resp2: string;
  private temp2: string;
  public uploader:FileUploader = new FileUploader({url: 'http://localhost:51680/api/file'});
  private resp: string[] = [];
  private temp: string;

  constructor(private router: Router, private Services: ServicesService,  private activatedRoute: ActivatedRoute) {
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
          this.resp.push(this.temp)
        };
      }
      this.uploader2.onCompleteItem = (item:any, response:string, status:any, headers:any) => {
        console.log("ImageUpload:uploaded:", item, status);
        if(response == "Please Upload image of type .jpg,.gif,.png,.img,.jpeg." || response == "Please Upload a file upto 1 mb." || response == "Please Upload a image." || response == "some Message"){
            
        }
        else if(response == ""){
          this.resp2 = "";
        }
        else{
          this.temp2 = response.replace('"', "");
          this.temp2 = this.temp2.replace('"', "");
          this.resp2 = this.temp2;
        };
      }
   }

  ngOnInit() {
  }
  
  addAndUpload2(){
    this.uploader2.uploadAll();
  }
  castAndClear2(){
    this.resp2 = "";
    this.uploader2.clearQueue();
  }  

  AddService(){
    if(this.service.Email != "" && this.service.Description != "" && this.resp2 != "" && this.service.Name != ""){
     
      this.service.Logo = this.resp2;
      this.service.AppUserId = Number(localStorage.getItem("currentUserID"));
      this.Services.postMethodService(this.service)
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
