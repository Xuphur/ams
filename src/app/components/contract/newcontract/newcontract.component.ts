import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/contract.model';
import { AmsService } from 'src/app/ams.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { NewassetComponent } from '../../asset/newasset/newasset.component';
import { NewcustomerComponent } from '../../customer/newcustomer/newcustomer.component';
import * as moment from 'moment';
import {
  NgbModal,
  NgbActiveModal,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newcontract',
  templateUrl: './newcontract.component.html',
  styleUrls: ['./newcontract.component.css']
})
export class NewcontractComponent implements OnInit {
  contract: any;
  editMode = this.amsService.editMode;
  customerlist: any;
  assetlist: any;
  total: any;
  installment: any;

  constructor(
    private amsService: AmsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {
    this.contract = new Contract();
    this.route.paramMap.subscribe(parameterMap => {
      const id = parameterMap.get('id');
      this.amsService.getContractById(id);
    });
  }

  ngOnInit() {
    if (this.amsService.editMode) {
      this.fetchContractById();
    } else {
      this.fetchAssets();
      this.fetchCustomers();
    }
  }

  fetchContractById() {
    this.amsService
      .getContractById(this.amsService.Id)
      .subscribe((res: any) => {
        this.contract = res.data;
        console.log(this.amsService.Id, this.contract, 'contract at view');
      });
  }

  fetchCustomers() {
    this.amsService.getCustomers().subscribe(data => {
      this.customerlist = data;
      console.log('all customer found', data);
    });
  }

  fetchAssets() {
    this.amsService.getAssets().subscribe(data => {
      this.assetlist = data;
      console.log('all customer found', data);
    });
  }

  addContract(contract) {
    this.amsService.addContract(contract).subscribe(() => {
      Swal.fire('Contract Inserted Successfully');
      this.router.navigate(['/contract/list']);
      this.close();
    });
  }

  openCustomer() {
    const modalRef = this.modalService.open(NewcustomerComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.name = 'New Customer';
  }

  openAsset() {
    const modalRef = this.modalService.open(NewassetComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'New Asset';
  }



  // calculateTotalPayable() {
  //   if (this.contract.startDate && this.contract.duration) {
  //     let numberOf = null;
  //     let totalPayment = 0;
  //     const startDate = moment(this.contract.startDate);
  //     const expirayDate = this.getDuration(startDate, this.contract.duration);
  //     if (expirayDate) {
  //       this.contract.expiryDate = moment(expirayDate._d).format('YYYY-MM-DD');

  //       if (this.contract.paymentMathod) {
  //         numberOf = this.getNoOfBaseOnSchedule(expirayDate, startDate, this.contract.paymentMathod);
  //         console.log(numberOf, 'no of ');
  //         totalPayment = numberOf * this.contract.installment;
  //         this.contract.totalPayable = totalPayment;
  //       }
  //     }
  //   }
  // }

  getExpiry() {
    if (this.contract.startDate && this.contract.duration) {
      const startDate = moment(this.contract.startDate);
      const expirayDate = this.getDuration(startDate, this.contract.duration);
      if (expirayDate) {
        this.contract.expiryDate = moment(expirayDate._d).format('YYYY-MM-DD');
      }
    }
  }

  calculate() {
    if (
      this.contract.priceQuoted !== undefined &&
      this.contract.downPayment !== undefined &&
      this.contract.advancePayment !== undefined &&
      this.contract.paymentMathod !== undefined
    ) {
      this.getTotalPay();
      this.getInst();
      this.contract.totalPayable = this.total;
      this.contract.balance = this.total;
      this.contract.installment = this.installment;
    }
  }

  getTotalPay() {
    let totalPay = 0;
      totalPay = this.contract.priceQuoted -
        (this.contract.downPayment + this.contract.advancePayment);
    console.log(totalPay, 'total pay');
    this.total = totalPay;
  }

  getInst() {
    let numberOf = 0;
    const total = this.total;
    let inst = 0;
    const startDate = this.contract.startDate;
    const expirayDate = this.getDuration(startDate, this.contract.duration);
          numberOf = this.getNoOfInst(expirayDate, startDate, this.contract.paymentMathod);
      inst = total / numberOf;
      console.log(inst, 'installment');
     this.installment = inst;
  }

  getDuration(startDate, duration) {
    let expirayDate = null;
    if (duration === 'weekly') {
      expirayDate = moment(startDate).add(1, 'week');
    } else if (duration === 'daily') {
      expirayDate = moment(startDate).add(1, 'days');
    } else {
      const parseDuration = parseInt(duration, 10);
      expirayDate = moment(startDate).add(parseDuration, 'months');
    }
    return expirayDate;
  }

  getNoOfInst(expirayDate, startDate, paymentSchedule) {
    let diff = null;
    switch (paymentSchedule) {
      case 'weekly':
        diff = expirayDate.diff(startDate, 'week');
        console.log(diff, 'diff');
        break;
      case 'daily':
        diff = expirayDate.diff(startDate, 'days');
        console.log(diff, 'diff');
        break;
      default:
        diff = expirayDate.diff(startDate, 'months');
        console.log(diff, 'diff');
        break;
    }
    return diff;
  }

  close() {
    this.activeModal.close();
  }
}
