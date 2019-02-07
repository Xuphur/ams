import { Component, OnInit, Inject } from '@angular/core';
import { Asset } from '../../../asset.model';
import { AmsService } from '../../../ams.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewassetComponent } from './../newasset/newasset.component';
import { NewrecieptComponent } from '../../reciept/newreciept/newreciept.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { ListrecieptComponent } from '../../reciept/listreciept/listreciept.component';

library.add(fas, far);

@Component({
  selector: 'app-listasset',
  templateUrl: './listasset.component.html',
  styleUrls: ['./listasset.component.css']
})
export class ListassetComponent implements OnInit {

  assetlist: any;
  foundAsset: any;
  closeResult: string;

  constructor(
    private amsService: AmsService,
    private router: Router,
    private modalService: NgbModal
  ) {
     // this.asset = assetData.asset;
  }

  ngOnInit() {
    this.fetchAssets();
  }

  fetchAssets() {
    this.amsService
    .getAssets()
    .subscribe(data => {
      this.assetlist = data;
      console.log('all asset found', data);
    });
  }

  fetchAssetById(_id) {
    this.amsService.assetId = _id;
    this.amsService
    .getAssetById(this.amsService.assetId)
    .subscribe(data => {
      this.foundAsset = data;
      console.log(this.foundAsset._id, 'got this asset');
      const modalRef = this.modalService.open(NewassetComponent, { size: 'lg' });
      modalRef.componentInstance.name = 'Update Asset';
    });
  }

  deleteAsset(_id) {
    this.amsService.deleteAsset(_id).subscribe(() => {
      this.fetchAssets();
    console.log('delete click');
    });
  }

  updateAsset(asset) {
   console.log(asset._id, 'this is for update');
    this.amsService.updateAsset(asset).subscribe(() => {
      const modalRef = this.modalService.open(NewassetComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'Update Asset';
      // this.fetchAssets();
    console.log('Update click');
    });
  }

  open() {
    const modalRef = this.modalService.open(NewassetComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'New Asset';
  }

  viewAsset(asset._id) {
    const modalRef = this.modalService.open(NewassetComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'New Asset';
  }

  addReciept(_id) {
    console.log(_id, 'this is asset id');
    this.amsService.assetId = _id;
    const modalRef = this.modalService.open(NewrecieptComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'New Reciept';
  }

  listReciept(_id) {
    console.log(_id, 'this is asset id');
    this.amsService.assetId = _id;
    this.amsService.getRecieptById(_id).subscribe(() => {
      console.log(this.amsService.assetId, 'service Called');
    const modalRef = this.modalService.open(ListrecieptComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'List Reciept';
  });
}
}
