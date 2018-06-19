import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../models/Vehicle';
import { BranchOfficeService } from '../services/branch-office.service';
import { ServicesService } from '../services/services.service';

import {Service} from '../models/Service'
import {BranchOffice} from '../models/BranchOffice'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-branch-office',
  templateUrl: './add-branch-office.component.html',
  styleUrls: ['./add-branch-office.component.css']
})
export class AddBranchOfficeComponent implements OnInit {
  public idService: string;

  constructor(private router: Router, private BranchOffice: BranchOfficeService, private Service: ServicesService) { }

  ngOnInit() {
  }

  AddBranchOffice(branchOffice: BranchOffice,  ngForm: NgForm){
    if(branchOffice.X <= 0 && branchOffice.Y <= 0 && branchOffice.Addres != "" && branchOffice.Picture != ""){
      
    let x = this.router.url.split('/')
    this.idService = x[2]
     // this.uploader.uploadAll();
     branchOffice.ServiceId = Number(this.idService);
      this.BranchOffice.postMethodBranchOffice(branchOffice)
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
