import { Component, OnInit } from '@angular/core';
import {  AuthguardService } from './.././../authguard.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthguardService) {}

  ngOnInit() {
    
  }

}
