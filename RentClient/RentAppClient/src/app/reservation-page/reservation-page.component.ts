import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from '../models/Vehicle';
import { VehiclesService } from '../services/vehicles.service';
import { ServicesService } from '../services/services.service';
import { BranchOfficeService } from '../services/branch-office.service';

import {Service} from '../models/Service'
import {BranchOffice} from '../models/BranchOffice';
import { MapInfo } from '../models/MapInfo';
import { Marker } from '../models/Marker';
import { Reservation } from '../models/Reservation';

import OlMap from 'ol/map';
import OlXYZ from 'ol/source/xyz';
import OlTileLayer from 'ol/layer/tile';
import OlView from 'ol/view';
import OlProj from 'ol/proj';

import { FormControl } from '@angular/forms';
import { ReservationService } from '../services/reservation.service';
import { RegistrationService } from '../services/registration.service';
import { RegistrationUser } from '../models/RegistrationUser';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css'],
  styles: ['agm-map {height: 500px; width: 800px;}'] //postavljamo sirinu i visinu mape
})
export class ReservationPageComponent implements OnInit {
  vehicle: Vehicle = new Vehicle(-1,"","","","","","",null,-1);
  service: Service = new Service("","","","",-1,-1);
  pictures: string[] = [];
  idService
  idVehicle

  private branches: BranchOffice[] = [];
  
  private markers: Marker[] = [];
  private marker: Marker;
  
  private branch1: BranchOffice = new BranchOffice(-1,-1,-1,"","");
  private branch2: BranchOffice = new BranchOffice(-1,-1,-1,"","");

  private lat1: number;
  private lgt1: number;
  private lat2: number;
  private lgt2: number;
  
  private selectedBr1: boolean = false;
  private selectedBr2: boolean = false;

  private Rent: Reservation;
  private retRent: Reservation;

  mapInfo1: MapInfo;
  mapInfo2: MapInfo;


  private Start = new FormControl(new Date());
  private End = new FormControl(new Date());

  private reserve: boolean = false;
  private reserved: boolean = false;

  private user: RegistrationUser = null;

  constructor(private router: Router, private Vehicles: VehiclesService, private Services: ServicesService, private RegistrationServices: RegistrationService,  
    private branchOffice: BranchOfficeService, private activatedRoute: ActivatedRoute, private reservation: ReservationService) { 
      activatedRoute.params.subscribe(params => {this.idVehicle = params["vehicleId"], this.idService = params["serviceId"]});
      this.mapInfo1 = new MapInfo(45.25800424228705, 19.833547029022156, 
      "assets/ftn.png",
      "Novi Sad" , "" , "");
      this.mapInfo2 = new MapInfo(45.25800424228705, 19.833547029022156, 
        "assets/ftn.png",
        "Novi Sad" , "" , "");


      this.callGetBranches();
  }
   
  LoginUser(){
    return localStorage.jwt;
  }  
  Authentication(){
    if(localStorage.getItem("role") == "AppUser"){
      return false;
    }
    else{
      return true;
    }
  }

  ngOnInit() {
    let x = this.router.url.split('/')
    this.idService = x[2]
    this.idVehicle = x[3]

    this.Services.getMethodService(this.idService)
    .subscribe(
      data => {
        this.service = data;
        this.Vehicles.getMethodVehicle(this.idVehicle)
        .subscribe(
          data2 => {
            this.vehicle = data2;
            this.pictures = this.vehicle.Pictures.split(';');
            
            if(localStorage.jwt){
            this.RegistrationServices.getMethodRegistration(String(localStorage.getItem("currentUserEmail")))
            .subscribe(
              data => {
                this.user = data;
              },
              error => {
                alert("Greska 2")
                console.log(error);
              })
            }
          },
          error => {
            alert("Greska 1")
            console.log(error);
          })
      },
      error => {
        alert("Greska 3")
        console.log(error);
      })
  }

  markerClick1(lat: number, lgt: number){
    this.lat1 = lat;
    this.lgt1 = lgt;
    this.selectedBr1 = true;
    this.callGetBranch(this.lat1, this.lgt1, 1);
}

  markerClick2(lat: number, lgt: number){
    this.lat2 = lat;
    this.lgt2 = lgt;
    this.selectedBr2 = true;
    this.callGetBranch(this.lat2, this.lgt2, 2);
  }

  callGetBranches(){
    let x = this.router.url.split('/')
    this.idService = x[2]
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

  callGetBranch(lat: number, lgt: number, br: number){
    this.branchOffice.getMethodBranchOffice(this.idService, lat, lgt)
    .subscribe(
      data => {
        if(br == 1){
          this.branch1 = data;
        }
        else if(br == 2){
          this.branch2 = data;
          let x = this.branch2.Id;
        }       
      },
      error => {
        console.log(error);
      })
  }

  placeMarker1($event){
    this.mapInfo1.CenterLat = $event.coords.lat;
    this.mapInfo1.CenterLong = $event.coords.lng;
  }

  placeMarker2($event){
    this.mapInfo2.CenterLat = $event.coords.lat;
    this.mapInfo2.CenterLong = $event.coords.lng;
  }


  Reservation(){
    if(this.user.CanMakeReservation){
      if(this.Start.value == undefined || this.End.value == undefined || this.branch1 == null || this.branch2 == null){
        alert("You must select the dates and the branches!")
        return;
      }
      if(this.End.value < this.Start.value){
        alert("Start date must be earlier then return date!")
        return;
      }
      //this.Start.value.setDate(this.Start.value.getDate() + 1); // ne znam zasto smanjuje i povecava za jedan... ovako ga vratim kako je selektovano
      //this.End.value.setDate(this.End.value.getDate() + 1);
  
      this.Rent = new Reservation(this.Start.value, this.End.value, this.branch1.Id, this.branch2.Id, this.idVehicle);
  
      this.isReserved(); // provere: dokumenta, da nije vec rezervisao, da li je vozilo vec neko rezervisao u tom periodu*/
    }
    else{
      this.router.navigateByUrl(`/uploadUserPicture`);
    }
  }

  isReserved(){
    this.reservation.getMethodReservation(this.Rent.VehicleId, this.Rent.DateRezervation, this.Rent.ReturnDate)
    .subscribe(
      data => {
        if(data == true){
          this.callPostRent(this.Rent);
          this.reserved = true;
          this.reserve = false;
        }
        else{
          alert("This vehicle is already rented for that period");
          this.reserved = false;
          this.reserve = false;
        }
      },
      error => {
        console.log(error); 
      })
  }
  
  callPostRent(rent: Reservation){
    this.reservation.postMethodReservation(rent)
    .subscribe(
      data => {
        alert("Successful reservation!");
        
        this.router.navigateByUrl(`/service/${this.idService}`);
      },
      error => {
        console.log(error);
      })
  }

  Updata(vehicleId){
    this.router.navigateByUrl(`/addVehicle/${this.idService}/${this.idVehicle}`);
  }

  Remove(vehicleId){
    this.Vehicles.deleteMethodVehicle(vehicleId).subscribe(
      data => {
        alert("Successful remove vehicle!");
        
        this.router.navigateByUrl(`/service/${this.idService}`);
      },
      error => {
        console.log(error);
      })
  }
  
}
