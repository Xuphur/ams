import { Component } from '@angular/core';
import {AuthguardService} from './authguard.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthguardService) {

    this.authService.isLoggIn = this.authService.isLoggedIn();
   }

  title = 'Asset Management System';
 logincheck = '';
}
