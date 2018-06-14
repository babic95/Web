import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BranchOffice } from '../models/BranchOffice';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {

  constructor(private http: Http, private httpClient: HttpClient) { }
  
  getMethodBranchOffices(idService): Observable<BranchOffice[]> {
    return this.httpClient.get<BranchOffice[]>('http://localhost:51680/api/BranchOffice',{params: idService})
  }

  getMethodBranchOffice(): Observable<BranchOffice> {
    return this.httpClient.get<BranchOffice>('http://localhost:51680/api/BranchOffice/')  
  }

  postMethodBranchOffice(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/BranchOffice", newMember)
  }
}
