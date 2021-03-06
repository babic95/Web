import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: LoginService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //console.log("Intercepted");
    //console.log("Token : ", localStorage.jwt);

    let jwt = localStorage.jwt;

    if (jwt) 
    {
        console.log(request)

        request = request.clone(
            {
                url: request.url.replace('http://localhost:51680', 'https://localhost:44386'),
                setHeaders: 
                { 
                    Authorization: `Bearer ${jwt}`
                }
            });
        //console.log(request)
    }

    return next.handle(request);
  }
}