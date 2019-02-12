import { Component, OnInit } from '@angular/core';
import { AmsService } from 'src/app/ams.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewcustomerComponent } from '../newcustomer/newcustomer.component';
import { ViewcustomerComponent } from '../viewcustomer/viewcustomer.component';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.css']
})
export class ListcustomerComponent implements OnInit {

  customerlist: any;

  constructor(
    private amsService: AmsService,
    private router: Router,
    private modalService: NgbModal
  ) {

   }

  ngOnInit() {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.amsService
    .getCustomers()
    .subscribe(data => {
      this.customerlist = data;
      console.log('all customer found', data);
    });
  }

  fetchCustomerById(id) {
    this.amsService
    .getCustomerById(id)
    .subscribe(data => {
      this.customerlist = data;
      console.log('all customer found', data);
    });
  }

  open() {
    const modalRef = this.modalService.open(NewcustomerComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'New Customer';
  }

  deleteCustomer(_id) {
    this.amsService.deleteCustomer(_id).subscribe(() => {
      this.fetchCustomers();
    console.log('delete click');
    });
  }

  viewCustomer(id) {
    const modalRef = this.modalService.open(ViewcustomerComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'View Customer';
  }
}
