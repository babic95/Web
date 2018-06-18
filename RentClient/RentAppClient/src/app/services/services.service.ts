import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Service } from '../models/Service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http: Http, private httpClient: HttpClient) { }

  getMethodServices(): Observable<Service[]> {
    return this.httpClient.get<Service[]>('http://localhost:51680/api/Services')  
  }

  getMethodService(idService): Observable<Service> {
    return this.httpClient.get<Service>(`http://localhost:51680/api/Services/${idService}`)  
  }

  postMethodService(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Services", newMember)
  }

  postMethodRating(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Rating", newMember)
  }
  postMethodComment(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Comment", newMember)
  }
  
}