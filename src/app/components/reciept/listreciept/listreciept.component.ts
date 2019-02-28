import { Component, OnInit } from '@angular/core';
import { AmsService } from '../../../ams.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listreciept',
  templateUrl: './listreciept.component.html',
  styleUrls: ['./listreciept.component.css']
})
export class ListrecieptComponent implements OnInit {

  asset: any;
  recieptlist: any;
  closeResult: string;
  grandTotal: any;

  constructor(
    private amsService: AmsService,
    private router: Router,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    console.log('i m called in listrec');
    // this.fetchAssetById();
    this.fetchReciept();
  }

  fetchAssetById() {
    this.amsService
    .getAssetById(this.amsService.Id)
    .subscribe(data => {
      this.asset = data;
      console.log(this.amsService.Id, this.asset, 'got this asset');
    });
  }

  fetchReciept() {
    this.amsService
    .getRecieptById(this.amsService.Id)
    .subscribe((data: any) => {
      this.recieptlist = data.data;
      const total = this.getTotal(this.recieptlist);
      this.grandTotal = total;
      console.log(this.recieptlist, 'this is reciept data');
    });
  }

  getTotal(data) {
    let amount = 0;
    let total = 0;
    data.forEach(element => {
      amount = parseInt(element.recivedAmount, 10);
      console.log(amount, 'this is amount');
      total += amount;
    });
    return total;
 }
}
