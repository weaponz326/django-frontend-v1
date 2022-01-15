import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViewTaskGroupGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!!sessionStorage.getItem('personal_task_group_id')){
      return true;
    }
    else{
      this.router.navigateByUrl('/home/tasks');
      return false;
    }
  }

}
