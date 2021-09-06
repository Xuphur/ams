import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import Swal from 'sweetalert2';
import { AmsService } from 'src/app/ams.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any;


  constructor(
    private amsService: AmsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    // public activeModal: NgbActiveModal
  ) {
    this.user = new User();
    this.route.paramMap.subscribe(parameterMap => {
      const id = parameterMap.get('id');
      this.amsService.getUserById(id);
    });
  }

  ngOnInit() {
  }

  // close() {
  //   this.activeModal.close();
  // }


  save(user) {
    console.log(user, 'this is new asset'),
      this.amsService.addUser(user).subscribe(() => {
        Swal.fire(
          'Assest Inserted Successfully'
        );
        // this.close();
      });
  }
}
