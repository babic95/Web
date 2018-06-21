import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from '../models/Vehicle';
import { BranchOfficeService } from '../services/branch-office.service';
import { ServicesService } from '../services/services.service';


import OlMap from 'ol/map';
import OlXYZ from 'ol/source/xyz';
import OlTileLayer from 'ol/layer/tile';
import OlView from 'ol/view';
import OlProj from 'ol/proj';
import { FileUploader } from 'ng2-file-upload';

import { FormControl } from '@angular/forms';

import {Service} from '../models/Service'
import {Marker} from '../models/Marker'
import {BranchOffice} from '../models/BranchOffice'
import { NgForm } from '@angular/forms';
import { MapInfo } from '../models/MapInfo';

@Component({
  selector: 'app-add-branch-office',
  templateUrl: './add-branch-office.component.html',
  styleUrls: ['./add-branch-office.component.css'],
  styles: ['agm-map {height: 500px; width: 370px;}'] //postavljamo sirinu i visinu mape
})
export class AddBranchOfficeComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: 'http://localhost:51680/api/file'});
  public uploader2:FileUploader = new FileUploader({url: 'http://localhost:51680/api/file'});
  private resp: string[] = [];
  private temp: string;
  private resp2: string;
  private temp2: string;

  public idService;
  private tempMarker: Marker = new Marker(0, 0);
  mapInfo: MapInfo;
  private lat: number = -1;
  private lgt: number = -1;
  
  private address: string = "";
  private picture: string = "";
  
  private marker: Marker;
  private markers: Marker[] = [];
  private branches: BranchOffice[];
  
  private branch: BranchOffice = new BranchOffice(0, 0, 0, "", "");

  constructor(private router: Router, private branchOffice: BranchOfficeService, private activatedRoute: ActivatedRoute, 
    private Service: ServicesService) { 
    let x = this.router.url.split('/')
    this.idService = x[2]

    activatedRoute.params.subscribe(params => {this.idService = params["Id"]});
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

    this.mapInfo = new MapInfo(45.25800424228705, 19.833547029022156, 
      "assets/ftn.png",
      "Novi Sad" , "" , "");
  }
  
  addAndUpload2(){
    this.uploader2.uploadAll();
  }
  castAndClear2(){
    this.resp2 = "";
    this.uploader2.clearQueue();
  }  

  ngOnInit() {
    let x = this.router.url.split('/')
    this.idService = x[2]
    this.callGetBranches();
  }

  addAndUpload(){
    this.uploader.uploadAll();
  }

  callGetBranches(){
    this.branchOffice.getMethodBranchOffices(this.idService)
    .subscribe(
      data => {
        this.branches = data;
        this.branches.forEach(obj => {
          this.marker = new Marker(obj.Y, obj.X);
          this.markers.push(this.marker);
        })
      },
      error => {
        console.log(error);
      })
  }

  placeMarker($event){
    this.tempMarker.Lat = $event.coords.lat;
    this.tempMarker.Lgt = $event.coords.lng;
    this.lat = $event.coords.lat;
    this.lgt = $event.coords.lng;
  }

  AddBranch(){
    if(this.address == "" || this.resp2 == "" || this.lat < 0 || this.lat == undefined || this.lgt < 0 || this.lgt == undefined){
      alert("You must fill in the address and select a place on the map!")
      return;
    }

    if(this.address == ""){
      this.address = "__empty__";
    }
    this.branch.Picture = this.resp2;
    this.branch.Addres = this.idService.toString() + "#" + this.address;
    this.branch.Y = this.lat;
    this.branch.X = this.lgt;
    this.branch.ServiceId = this.idService;

    this.branchOffice.postMethodBranchOffice(this.branch)
    .subscribe(
      data => {
        alert("Successful add branch!");
        this.router.navigateByUrl(`/service/${this.idService}`);
      },
      error => {
        console.log(error);
      })
  }
}
