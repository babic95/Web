import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../models/Vehicle';
import { VehiclesService } from '../services/vehicles.service';
import { ServicesService } from '../services/services.service';

import {Service} from '../models/Service'

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {
  vehicle: Vehicle
  service: Service
  idService
  idVehicle

  constructor(private router: Router, private Vehicle: VehiclesService, private Service: ServicesService) { }

  ngOnInit() {
    let x = this.router.url.split('/')
    this.idService = x[2]
    this.idVehicle = x[3]

    this.Service.getMethodService(this.idService)
    .subscribe(
      data => {
        this.service = data;
        this.Vehicle.getMethodVehicle(this.idVehicle)
        .subscribe(
          data2 => {
            this.vehicle = data2;
          },
          error => {
            alert("Greska")
            console.log(error);
          })
      },
      error => {
        alert("Greska")
        console.log(error);
      })
  }

}
