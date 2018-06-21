import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  constructor(private http: Http, private httpClient: HttpClient) { }
 
  getMethodVehicles(pageIndex, idService): Observable<Vehicle[]> {

    return this.httpClient.get<Vehicle[]>("http://localhost:51680/api/Vehicle", {params:{pageIndex,
                                                                                          idService}})  
  }

  getMethodVehicle(VehicleId): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(`http://localhost:51680/api/Vehicle/${VehicleId}`)  
  }

  postMethodVehicle(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Vehicle", newMember)
  }

  deleteMethodVehicle(VehicleId): Observable<Vehicle> {
    return this.httpClient.delete<Vehicle>(`http://localhost:51680/api/Vehicle/${VehicleId}`)
  }

  putMethodVehicle(newMember): Observable<any> {
    return this.httpClient.put("http://localhost:51680/api/Vehicle", newMember)
  }
  
}
