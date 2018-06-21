import { Component, OnInit } from '@angular/core';
import { RegistrationUser } from '../models/RegistrationUser';
import { RegistrationService } from '../services/registration.service';
import { FileUploader } from 'ng2-file-upload';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload-user-picture',
  templateUrl: './upload-user-picture.component.html',
  styleUrls: ['./upload-user-picture.component.css']
})
export class UploadUserPictureComponent implements OnInit {

  private user: RegistrationUser = null;
  public uploader2:FileUploader = new FileUploader({url: 'http://localhost:51680/api/file'});
  private resp2: string;
  private temp2: string;
  constructor(private router: Router, private RegistrationServices: RegistrationService, private activatedRoute: ActivatedRoute) { 
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
    alert("Please upload your picture!");

    this.RegistrationServices.getMethodRegistration(localStorage.getItem("currentUserEmail"))
    .subscribe(
      data => {
        this.user = data;
      },
      error => {
        alert("Greska 2")
        console.log(error);
      })
  }
  addAndUpload2(){
    this.uploader2.uploadAll();
  }
  castAndClear2(){
    this.resp2 = "";
    this.uploader2.clearQueue();
  }  
  Upload(){
    if(this.resp2 == ""){
      alert("ucitaj sliku");
    }
    else{
      this.user.CanMakeReservation = true;
      this.user.Password = this.resp2;

      this.RegistrationServices.putMethodRegistration(this.user)
    .subscribe(
      data => {
        alert("proslo");
        this.router.navigateByUrl(`/start`);
      },
      error => {
        alert("Greska 2")
        console.log(error);
      })
      
    }
  }

}
