import { Component, OnInit, Inject } from '@angular/core';
import { Asset } from '../../../asset.model';
import { AmsService } from '../../../ams.service';
import { Router } from '@angular/router';
import { NewassetComponent } from './../newasset/newasset.component';
import { NewrecieptComponent } from '../../reciept/newreciept/newreciept.component';
import { ListrecieptComponent } from '../../reciept/listreciept/listreciept.component';
import { ViewassetComponent } from '../viewasset/viewasset.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listasset',
  templateUrl: './listasset.component.html',
  styleUrls: ['./listasset.component.css']
})
export class ListassetComponent implements OnInit {
   page = 1 ;
  pageSize = 4;
  assetlist: any = [];
  item: any;
  foundAsset: any;
  closeResult: string;
  public isCollapsed = true;

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

  edit(_id) {
    this.amsService.Id = _id;
    this.amsService.editMode = true;
    console.log(_id, 'this is asset id');
      const modalRef = this.modalService.open(NewassetComponent, { size: 'lg' });
      modalRef.componentInstance.name = 'Update Asset';
    }
  search(item) {
    console.log(item, 'this is item at search');
    this.amsService
    .getAsset(item)
    .subscribe((res: any) => {
      this.assetlist = res.data;
      console.log('all asset found', this.assetlist);
    });
    }

  deleteAsset(_id) {
    this.amsService.deleteAsset(_id).subscribe(() => {
      this.fetchAssets();
    console.log('delete click');
    });
  }

  open() {
    this.amsService.editMode = false;
    this.amsService.Id = null;
    const modalRef = this.modalService.open(NewassetComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'New Asset';
  }

  viewAsset(_id) {
    console.log(_id, 'this is asset id');
    this.amsService.Id = _id;
      const modalRef = this.modalService.open(ViewassetComponent, { size: 'lg' });
      modalRef.componentInstance.asset = _id;
    console.log('view asset open');
  }

}
