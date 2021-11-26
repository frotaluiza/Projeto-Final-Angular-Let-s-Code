import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  checkIfUserIsLogged(){
    let userToken = localStorage.getItem('token')
    return userToken
  }

  constructor(private router: Router, private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLogged = Boolean(this.checkIfUserIsLogged())
      this.authService.indededUrl = state.url
  
      if(isLogged){
        this.router.parseUrl('/user-selection')
        return true
      }
  
  
      return this.router.parseUrl('/login')
  }
  
}
