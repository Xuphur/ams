import { Component, OnInit } from '@angular/core';
import { AmsService } from 'src/app/ams.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user.model';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css'],
  providers: [AmsService]
})
export class LoginInComponent implements OnInit {

  user: any;
  loginvalue: any;

  constructor(
    private amsService: AmsService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
    ) {
      this.user = new User();
      this.route.paramMap.subscribe(parameterMap => {
        const id = parameterMap.get('id');
        this.amsService.getUserById(id);
      });
    }

  ngOnInit() {
  }

  getuser(user) {
    console.log(user, 'this user login'),
    this.spinner.show();
    this.amsService.getUser(user).subscribe((loginData) => {
      localStorage.setItem('loginvalue', JSON.stringify(loginData));
      this.router.navigate(['/dashboard']);
      console.log( this.loginvalue, 'user at service'),
      this.spinner.hide();
      // Swal.fire(
      //   'User Log In Successfully'
      // )
    });
  }
}
