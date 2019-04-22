import { Component, OnInit } from '@angular/core';
import { AuthguardService } from '../../authguard.service';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem('loginvalue');
    this.router.navigateByUrl('/login');
  }
}
