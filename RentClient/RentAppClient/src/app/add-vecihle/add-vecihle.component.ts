import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesService } from '../services/vehicles.service';
import { ServicesService } from '../services/services.service';

import {Service} from '../models/Service'
import {Vehicle} from '../models/Vehicle'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-vecihle',
  templateUrl: './add-vecihle.component.html',
  styleUrls: ['./add-vecihle.component.css']
})
export class AddVecihleComponent implements OnInit {
  public idService: string;

  constructor(private router: Router, private Vehicles: VehiclesService, private Service: ServicesService) { }

  ngOnInit() {
  }

  AddVehicle(vehicle: Vehicle,  ngForm: NgForm){
    if(vehicle.Description != "" && vehicle.Model != "" && vehicle.Pictures != "" && 
    vehicle.Producer != "" && vehicle.TypeVehicle != "" && vehicle.ProductionDate != ""){
    let x = this.router.url.split('/')
    this.idService = x[2]
     // this.uploader.uploadAll();
     vehicle.ServiceId = Number(this.idService);
      this.Vehicles.postMethodVehicle(vehicle)
      .subscribe(
        data => {
          this.router.navigateByUrl(`/service/${this.idService}`);
        },
        error => {
          console.log(error);
          alert("GRESKA KOD ADDbranchoffice!");
        })
    }
  }
}
