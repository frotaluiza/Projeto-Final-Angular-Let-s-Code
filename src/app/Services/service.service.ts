import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ShowInformation } from './endpoints-results';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http: HttpClient) { }

  backendUrl: string = "https://private-3923c4-santandercoders809.apiary-mock.com/"

  // logIn(emailOrPhone: string, pass: string ){
  //   return this.http.post()

  // }

  ShowSeriesInfo(seriesId:number){
    return this.http.get<ShowInformation>(this.backendUrl+`series/${seriesId}`);
  }
}
