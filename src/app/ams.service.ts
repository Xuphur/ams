import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AmsService {
  assetId: String;

  url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

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
}
