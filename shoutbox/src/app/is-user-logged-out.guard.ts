import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserLoggedOutGuard implements CanActivate {
  constructor(private _userService:UserService, private _route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._userService.isUserLoggedIn()){
      this._route.navigate(['/feeds'])
      return false;
    }else{
      return true;
    }
  }

}
