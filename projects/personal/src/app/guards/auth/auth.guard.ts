import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!!localStorage.getItem('personal_id')){
      return true;
    }
    else{
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    if (!!localStorage.getItem('personal_id')){
      return true;
    }
    else{
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }

}
