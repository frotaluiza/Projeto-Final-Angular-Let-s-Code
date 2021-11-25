
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { LoginResult, LoginUserInformation, ShowInformation, UserChosen } from './endpoints-results';

@Injectable({
  providedIn: 'root'
})
export class ApiNetflixService {

  listOfUsers: Array<LoginUserInformation> = [];
  urlApi: string = "https://private-3923c4-santandercoders809.apiary-mock.com";
  
  constructor(private http: HttpClient) { }

  postLoginNetflix(userEmailOrPhone: string, userPassword: string): Observable<LoginResult>{
    const payload = {
      emailOrPhone: userEmailOrPhone,
      password: userPassword
    }
    return this.http.post<LoginResult>(this.urlApi + '/login', payload)
  }

  getUserChosen(userId: number): Observable<UserChosen>{
    return this.http.get<UserChosen>(`${this.urlApi}/users/${userId}`)
  }

  getShow(showId: number): Observable<ShowInformation>{
    return this.http.get<ShowInformation>(`${this.urlApi}/series/${showId}`)
  }
}
