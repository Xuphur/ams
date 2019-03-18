import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer.model';
import { AmsService } from 'src/app/ams.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import {
  NgbModal,
  NgbActiveModal,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
=======
import Swal from 'sweetalert2';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 552d507ccd9b40c3dc4dea4a9ab4b55bd93049d0
@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {
  customer: Customer;

  constructor(
    private amsService: AmsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {
    this.customer = new Customer();
    this.route.paramMap.subscribe(parameterMap => {
      const id = parameterMap.get('id');
      this.amsService.getCustomerById(id);
    });
  }

  ngOnInit() {
    if (this.amsService.editMode) {
      this.fetchCustomerById();
    }
  }

  fetchCustomerById() {
    this.amsService
      .getCustomerById(this.amsService.Id)
      .subscribe((res: any) => {
        this.customer = res.data;
        console.log(this.amsService.Id, 'customer at edit');
      });
  }

  addCustomer(customer) {
    console.log(customer, 'this is new asset'),
<<<<<<< HEAD
      this.amsService.addCustomer(customer).subscribe(() => {
        this.close();
        this.router.navigate(['customer/list']);
      });
=======
    this.amsService.addCustomer(customer).subscribe(() => {
      Swal.fire(
        'Customer Inserted Successfully'
      );
      this.close();
    });
    //   this.router.navigate(['/']);
    // });
>>>>>>> 552d507ccd9b40c3dc4dea4a9ab4b55bd93049d0
  }
  close() {
    this.activeModal.close();
  }
}
