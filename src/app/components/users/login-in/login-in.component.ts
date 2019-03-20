import { Component, OnInit } from '@angular/core';
import { AmsService } from 'src/app/ams.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css'],
  providers: [AmsService]
})
export class LoginInComponent implements OnInit {

  user: any;

  constructor(
    private amsService: AmsService,
    private route: ActivatedRoute,
    private router: Router
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
    this.amsService.getUser(user).subscribe(() => {
        if (!user) {
          console.log('err');
          Swal.fire(
            'Invalid User or Password'
          );
        } else {
          Swal.fire(
            'User Log In Successfully'
          );
          this.router.navigate(['/dashboard']);
          }
        });
  }
}
