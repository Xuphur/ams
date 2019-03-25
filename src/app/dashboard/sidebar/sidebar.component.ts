import { Component, OnInit } from '@angular/core';
import {  AuthguardService } from './.././../authguard.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  hide: any;
  constructor(private authService: AuthguardService) {}

  ngOnInit() {
    console.log(this.authService.isLoggedIn(),  'is login');
    this.hide = this.authService.isLoggedIn();
  }

}
