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
  page = 1 ;
  pageSize = 10;
  title: any;
  owner: any;
  type: any;
  customerlist: any = [];
  public isCollapsed = true;

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

  edit(_id) {
    this.amsService.Id = _id;
    this.amsService.editMode = true;
      console.log(this.amsService.Id, 'got this customer');
      const modalRef = this.modalService.open(NewcustomerComponent, { size: 'lg', backdrop : 'static'  });
      modalRef.componentInstance.user = 'Update Customer';
  }

  open() {
    const modalRef = this.modalService.open(NewcustomerComponent, { size: 'lg', backdrop : 'static'  });
    modalRef.componentInstance.name = 'New Customer';
  }

  deleteCustomer(_id) {
    this.amsService.deleteCustomer(_id).subscribe(() => {
      this.fetchCustomers();
    console.log('delete click');
    });
  }

  viewCustomer(id) {
    const modalRef = this.modalService.open(ViewcustomerComponent, { size: 'lg', backdrop : 'static'  });
    modalRef.componentInstance.name = 'View Customer';
  }

  search(title) {
    console.log(title, 'this is title at search');
    this.amsService
    .getCustomer(title)
    .subscribe((res: any) => {
      this.customerlist = res.data;
      console.log('all customer found bt Title', this.customerlist);
    });
    }

  searchByOwner(owner) {
    console.log(owner, 'this is owner at search');
    this.amsService
    .getCustomerByOwner(owner)
    .subscribe((res: any) => {
      this.customerlist = res.data;
      console.log('all customer found by Owner', this.customerlist);
    });
    }

  searchByType(type) {
    console.log(type, 'this is owner at search');
    this.amsService
    .getCustomerByType(type)
    .subscribe((res: any) => {
      this.customerlist = res.data;
      console.log('all customer found by Owner', this.customerlist);
    });
    }
}
