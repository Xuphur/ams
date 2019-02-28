import { Component, OnInit } from '@angular/core';
import { AmsService } from '../../../ams.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/asset.model';

@Component({
  selector: 'app-newasset',
  templateUrl: './newasset.component.html',
  styleUrls: ['./newasset.component.css']
})
export class NewassetComponent implements OnInit {

  number: any;
  asset: any;
  activeIdString: String = '';
  ownerTab = false;
  dummy = 0;
  currentTab = 'main';
  constructor(
    private amsService: AmsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.asset = new Asset();
    this.route.paramMap.subscribe(parameterMap => {
      const id = parameterMap.get('id');
      this.amsService.getAssetById(id);
    });
  }
  ngOnInit() {
    if (this.amsService.editMode) {
      this.fetchAssetById();
    }
  }

  fetchAssetById() {
    this.amsService
    .getAssetById(this.amsService.Id)
    .subscribe((res: any) => {
      this.asset = res.data;
      console.log(this.amsService.Id, 'asset at view');
    });
  }
  changeTab(ast) {
    console.log('Asset = ', ast);
    this.dummy = this.dummy + 1;
    if (this.dummy % 2 === 0) {
      this.asset.assetType = 'owner';
      this.ownerTab = true;
      this.activeIdString = this.asset.assetType;
    }

    if ((ast.assetType === "house" || ast.assetType === 'item' || ast.assetType === 'vehicle' || ast.assetType === 'owner') && this.currentTab !== 'main') {
      this.activeIdString = '';
      this.activeIdString = this.asset.assetType;
    }
    else {
      this.activeIdString = '';
      this.activeIdString = this.asset.assetType;
      this.currentTab = this.asset.assetType;
      console.log(this.asset.assetType);
    }
  }

  Backbtn() {
    this.ownerTab = false;
    this.asset.assetType = 'main';
    this.activeIdString = ' ';
    this.activeIdString = this.asset.assetType;
  }

  addAsset(asset) {
    console.log(asset, 'this is new asset'),
      this.amsService.addAsset(asset).subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
