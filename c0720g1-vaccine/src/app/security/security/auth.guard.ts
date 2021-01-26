import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../service/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private tokenStorageService:TokenStorageService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser =  this.tokenStorageService.getUser();
    if(currentUser){
      console.log(currentUser.roles.indexOf(route.data.role));
      if(currentUser.roles.indexOf(route.data.role) === -1){
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;

  }

}
