import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NewcontractComponent } from './components/contract/newcontract/newcontract.component';


@Injectable({
  providedIn: 'root'
})

export class AmsService {
  assetId: String;
  search: String;

  url = 'http://localhost:4000';

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
    ) { }


    find(customer) {
      console.log(customer, 'this is search value at service');
      return this.http.get(this.url + '/customer/find/' + customer);
      }

  // Asset CRUDs
  getAssets() {
    return this.http.get(this.url + '/asset/list');
  }

  getAssetById(id) {
    return this.http.get(this.url + '/asset/' + id);
  }

  addAsset(asset) {
    console.log(asset, 'this is asset at service');
    return this.http.post(this.url + '/asset/new', asset);
  }

  updateAsset(asset) {
    console.log(asset._id, 'update at asset service');
    return this.http.put(this.url + '/asset/update/' + asset._id, asset);
  }

  deleteAsset(id) {
    console.log('Asset Delete');
    return this.http.get(this.url + '/asset/delete/' + id);
  }

  // Reciept CRUDs
  // postReciept(_id) {
  //   return this.http.post(this.url + '/reciept/list', + _id);
  // }

  getReciept(_id) {
    return this.http.get(this.url + '/reciept/all');
  }

  getRecieptById(id) {
    console.log(id, 'this is asset at service');
    return this.http.get(this.url + '/reciept/list/' + id);
  }

  addReciept(reciept) {
    console.log(reciept, 'this is reciept at service');
    return this.http.post(this.url + '/reciept/new', reciept);
  }

  updateReciept(reciept) {
    console.log(reciept._id, 'update at reciept service');
    return this.http.put(this.url + '/reciept/update/' + reciept._id, reciept);
  }

  deleteReciept(id) {
    console.log('Reciept Delete');
    return this.http.get(this.url + '/reciept/delete/' + id);
  }

  // Customer CRUDs
  getCustomers() {
    return this.http.get(this.url + '/customer/list');
  }

  getCustomerById(id) {
    return this.http.get(this.url + '/customer/' + id);
  }

  addCustomer(asset) {
    return this.http.post(this.url + '/customer/new', asset);
  }

  updateCustomer(asset) {
    console.log(asset._id, 'update at customer service');
    return this.http.put(this.url + '/customer/update/' + asset._id, asset);
  }

  deleteCustomer(id) {
    console.log('Asset Delete');
    return this.http.get(this.url + '/customer/delete/' + id);
  }

  // Contract CRUDs
  getContracts() {
    return this.http.get(this.url + '/contract/list');
  }

  getContractById(id) {
    return this.http.get(this.url + '/contract/' + id);
  }

  addContract(contract) {
    console.log(contract, 'this is asset at service');
    return this.http.post(this.url + '/contract/new', contract);
  }

  updateContract(contract) {
    console.log(contract._id, 'update at asset service');
    return this.http.put(this.url + '/contract/update/' + contract._id, contract);
  }

  deleteContract(id) {
    console.log('Contract Delete');
    return this.http.get(this.url + '/contract/delete/' + id);
  }

  // Open Modals

  // openContract() {
  //   const modalRef = this.modalService.open(NewcontractComponent, { size: 'lg' });
  //   modalRef.componentInstance.name = 'New Contract';
  // }
}
