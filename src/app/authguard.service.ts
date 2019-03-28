import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  isLoggIn: Boolean;
  constructor(private route: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.isLoggedIn();
    }
     // tslint:disable-next-line:semicolon
     isLoggedIn() {
      if (localStorage.getItem('loginvalue') !== null) {
        return true;
  } else {
      this.route.navigate(['/login']);
      return false;
    }
}

}
