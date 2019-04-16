import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  isLoggIn: Boolean;

  constructor(private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.isLoggedIn();
  }

  isLoggedIn() {
    if (localStorage.getItem('loginvalue') !== null) {
      // this.route.navigate(['/dashboard']);
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
