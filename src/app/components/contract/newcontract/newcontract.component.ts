import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/contract.model';
import { AmsService } from 'src/app/ams.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { NewassetComponent } from '../../asset/newasset/newasset.component';
import { NewcustomerComponent } from '../../customer/newcustomer/newcustomer.component';
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
  contract: Contract;
  customerlist: any;
  assetlist: any;
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
    console.log(contract, 'this is new contract'),
<<<<<<< HEAD
      this.amsService.addContract(contract).subscribe(() => {
        this.close();
        this.router.navigate(['contract/list']);
      });
=======
    this.amsService.addContract(contract).subscribe(() => {
      Swal.fire(
        'Contract Inserted Successfully'
      );
      this.close();
    });
    //   this.router.navigate(['/']);
    // });
>>>>>>> 552d507ccd9b40c3dc4dea4a9ab4b55bd93049d0
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
  close() {
    this.activeModal.close();
  }
}
