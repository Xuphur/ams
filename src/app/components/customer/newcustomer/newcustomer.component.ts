import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer.model';
import { AmsService } from 'src/app/ams.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
    this.amsService.addCustomer(customer).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
