import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginLogoutService } from '../Services/login-logout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:LoginLogoutService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuth){
      console.log(true);
      
      return true
    }else{
      alert('you should login first')
   this.router.navigate(['/LoginOut'])
      return false
    }
  }
  
}
