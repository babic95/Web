import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  idService

  constructor(private router: Router) { 
  }

  ngOnInit() {
    let x = this.router.url.split('/')
    this.idService = x[2]
  }

}
