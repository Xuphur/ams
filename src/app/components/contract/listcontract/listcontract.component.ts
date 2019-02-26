import { Component, OnInit } from '@angular/core';
import { AmsService } from 'src/app/ams.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewcontractComponent } from '../newcontract/newcontract.component';
import { ViewcontractComponent } from '../viewcontract/viewcontract.component';
import { NewrecieptComponent } from '../../reciept/newreciept/newreciept.component';
import { ListrecieptComponent } from '../../reciept/listreciept/listreciept.component';

@Component({
  selector: 'app-listcontract',
  templateUrl: './listcontract.component.html',
  styleUrls: ['./listcontract.component.css']
})
export class ListcontractComponent implements OnInit {
  page = 1;
  pageSize = 4;
  contractlist: any = [];
  item: any;
  public isCollapsed = true;

  constructor(
    private amsService: AmsService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.fetchContracts();
  }

  fetchContracts() {
    this.amsService
    .getContracts()
    .subscribe(data => {
      this.contractlist = data;
      console.log('all contract found', data);
    });
  }

  open() {
    const modalRef = this.modalService.open(NewcontractComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'New Contract';
  }

  viewContract(_id) {
    console.log(_id, 'this is contract id');
    this.amsService.Id = _id;
      const modalRef = this.modalService.open(ViewcontractComponent, { size: 'lg' });
      modalRef.componentInstance.name = 'View Contract';
    console.log('view contract open');
}

edit(_id) {
  this.amsService.Id = _id;
  this.amsService.editMode = true;
    console.log(this.amsService.Id, 'got this contract');
    const modalRef = this.modalService.open(NewcontractComponent, { size: 'lg' });
    modalRef.componentInstance.user = 'Update Asset';
}

search(item) {
  console.log(item, 'this is item at search');
  this.amsService
  .getContract(item)
  .subscribe((res: any) => {
    this.contractlist = res.data;
    console.log('Contract found', this.contractlist);
  });
  }
  deleteContract(_id) {
    this.amsService.deleteContract(_id).subscribe(() => {
      this.fetchContracts();
    console.log('delete click');
    });
  }

  addReciept(_id) {
    console.log(_id, 'this is asset id');
    this.amsService.Id = _id;
    const modalRef = this.modalService.open(NewrecieptComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'New Reciept';
  }

  listReciept(_id) {
    this.amsService.Id = _id;
      console.log(this.amsService.Id, 'this asset Called');
    const modalRef = this.modalService.open(ListrecieptComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'List Reciept';
}
}
