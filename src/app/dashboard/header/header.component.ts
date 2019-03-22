import { Component, OnInit } from '@angular/core';
import { AuthguardService } from '../../authguard.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: any;
  constructor(private authService: AuthguardService) { }

  ngOnInit() {
    console.log(this.authService.isLoggedIn(),  'is login');
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
