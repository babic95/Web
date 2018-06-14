import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchOffice } from '../models/BranchOffice';
import { BranchOfficeService } from '../services/branch-office.service';

@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.css']
})
export class BranchOfficeComponent implements OnInit {
  idService
  branchOffice: BranchOffice[]

  constructor(private router: Router, private BranchOffice: BranchOfficeService) { }

  ngOnInit() {
    let x = this.router.url.split('/')
    this.idService = x[2]
  }

}
