import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  

  constructor(private http: Http, private httpClient: HttpClient) { }
  
  getMethodComments(pageIndex, idService): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('http://localhost:51680/api/Comment',{params:{pageIndex,
                                                                                        idService}})
  }

  getMethodComment(): Observable<Comment> {
    return this.httpClient.get<Comment>('http://localhost:51680/api/Comment/')  
  }

  postMethodComment(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Comment", newMember)
  }
}
