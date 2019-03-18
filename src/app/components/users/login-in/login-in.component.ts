import { Component, OnInit } from '@angular/core';
import { AmsService } from 'src/app/ams.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css'],
  providers: [AmsService]
})
export class LoginInComponent implements OnInit {
  password: string;
  user: String;

  constructor(  private service: AmsService , private route: Router) { }

  ngOnInit() {
  }
  getuser() {
    this.service.RegisterData(this.user, this.password).subscribe(loginData => {
      console.log('login data is ', loginData);
     }, errors => {
      console.log(errors);
  });
  }
}
