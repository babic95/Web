import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';
import { BranchOffice } from '../models/BranchOffice';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: Http, private httpClient: HttpClient) { }
  
  getMethodReservations(idService): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>('http://localhost:51680/api/Reservation',{params: idService})
  }

  getMethodReservation(VehicleId, DateRezervation, ReturnDate): Observable<boolean> {
    return this.httpClient.get<boolean>('http://localhost:51680/api/Reservation',{params: {VehicleId, DateRezervation, ReturnDate}}) 
  }

  postMethodReservation(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Reservation", newMember)
  }
}
