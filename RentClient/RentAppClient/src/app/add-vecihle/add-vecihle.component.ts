import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../services/vehicles.service';
import { ServicesService } from '../services/services.service';

import {Service} from '../models/Service'
import {Vehicle} from '../models/Vehicle'
import { NgForm } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-add-vecihle',
  templateUrl: './add-vecihle.component.html',
  styleUrls: ['./add-vecihle.component.css']
})
export class AddVecihleComponent implements OnInit {
  public idService: string;
  public vehicleId: string;
  vehicle: Vehicle = new Vehicle(-1, "", "", "", "", "", "", null, -1);
  public uploader:FileUploader = new FileUploader({url: 'http://localhost:51680/api/file'});
  private resp: string[] = [];
  private temp: string;

  constructor(private router: Router, private Vehicles: VehiclesService, private Service: ServicesService,  
    private activatedRoute: ActivatedRoute) { 
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
  }

  addAndUpload(){
    this.uploader.uploadAll();
  }

  castAndClear(){
    this.resp = [];
    this.uploader.clearQueue();
  } 
  ngOnInit() {
    let x = this.router.url.split('/');
    if(x.length > 3){
      this.vehicleId = x[3];
      this.Vehicles.getMethodVehicle(this.vehicleId)
        .subscribe(
          data2 => {
            this.vehicle = data2;
          },
          error => {
            alert("Greska 1")
            console.log(error);
          })
    }
  }

  AddVehicle(){
    if(this.vehicle.Description != "" && this.vehicle.Model != "" && this.resp != [] && 
    this.vehicle.Producer != "" && this.vehicle.TypeVehicle != "" && this.vehicle.ProductionDate != null){
    let x = this.router.url.split('/')
    this.idService = x[2];
    this.vehicle.ServiceId = Number(this.idService);
    this.resp.forEach(obj => {
      this.vehicle.Pictures += obj;
      this.vehicle.Pictures += ";";
    })
    this.vehicle.Picture = this.resp[0];

    if(x.length < 4){
        this.Vehicles.postMethodVehicle(this.vehicle)
        .subscribe(
          data => {
            alert("Successful add vehicle!");
            this.router.navigateByUrl(`/service/${this.idService}`);
          },
          error => {
            console.log(error);
            alert("GRESKA KOD ADDbranchoffice!");
          })
      }
    else{
      this.vehicleId = x[3];
      this.vehicle.Id = this.vehicle.Id;
      this.Vehicles.putMethodVehicle(this.vehicle)
        .subscribe(
          data => {
            alert("Successful update vehicle!");
            this.router.navigateByUrl(`/service/${this.idService}`);
          },
          error => {
            console.log(error);
            alert("GRESKA KOD ADDbranchoffice!");
          })
      }
    }
  }
}
