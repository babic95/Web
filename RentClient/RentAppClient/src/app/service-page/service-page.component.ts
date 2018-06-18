import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../models/Vehicle';
import { VehiclesService } from '../services/vehicles.service';
import { ServicesService } from '../services/services.service';

import {Service} from '../models/Service'
import {Comment} from '../models/Comment'
import {Rating} from '../models/Rating'
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  idService
  pageIndex
  vehicles: Vehicle[]
  service: Service
  comments: Comment[]
  user
  ratingService: Rating;
  rating: Number;
  ratingStar: String = `&#9734; &#9734; &#9734; &#9734; &#9734;`;
  comment: Comment;

  constructor(private router: Router, private Vehicle: VehiclesService, private Service: ServicesService, 
    private Comment: CommentsService) { 
  }

  ngOnInit() {
    this.ratingService = new Rating(0,0,0)
    this.service = new Service(0,"", "", "", "", 0, 0)
    let x = this.router.url.split('/')
    this.idService = x[2]
    this.pageIndex = 1
    
    this.Service.getMethodService(this.idService)
    .subscribe(
      data => {
        this.service = data;
        this.Vehicle.getMethodVehicles(this.pageIndex, this.idService)
        .subscribe(
          data2 => {
            this.vehicles = data2;
            
            this.Comment.getMethodComments(1, this.idService)
            .subscribe(
              data3 => {
                this.comments = data3;
              },
              error => {
                alert("Greska3")
                console.log(error);
            })
          },
          error => {
            alert("Greska2")
            console.log(error);
          })
      },
      error => {
        alert("Greska1")
        console.log(error);
      })
  }

  onClick(rating: number): void {
    this.ratingService.Grade = rating;
    this.ratingService.ServiceId =  this.idService;
    this.ratingService.AppUserId = Number(localStorage.getItem("currentUserID"));

    this.Service.postMethodRating(this.ratingService)
      .subscribe(
        data => {
          this.Service.getMethodService(this.idService)
        .subscribe(
          data => {
            this.service = data;
          },
          error => {
            alert("Greska1")
            console.log(error);
          })
        },
        error => {
          console.log(error);
          alert("GRESKA KOD OCENE!");
        })
  }

  Commenting(com: Comment){
    com.ServiceId = this.idService;
    com.FullNameUser = localStorage.getItem("currentUserFullName");
    com.AppUserId = Number(localStorage.getItem("currentUserID"));

    this.Service.postMethodComment(com)
      .subscribe(
        data => {
          this.Comment.getMethodComments(1, this.idService)
            .subscribe(
              data3 => {
                this.comments = data3;
              },
              error => {
                alert("Greska3")
                console.log(error);
            })
        },
        error => {
          console.log(error);
          alert("GRESKA KOD KOMENTARISANJA!");
        })
  }
}


