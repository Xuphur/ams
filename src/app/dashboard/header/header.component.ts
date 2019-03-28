import { Component, OnInit } from '@angular/core';
import { AuthguardService } from '../../authguard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: any;
  loginvalue: any;
  constructor(
    private authService: AuthguardService,
    private router: Router

    ) { }

  ngOnInit() {
    console.log(this.authService.isLoggedIn(),  'is login');
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
      localStorage.removeItem('loginvalue');
      this.authService.isLoggIn = false;
      this.router.navigate(['/']);
    }
}
