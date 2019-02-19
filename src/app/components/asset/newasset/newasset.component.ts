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

  asset: Asset ;

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
     if(this.amsService.editMode){
      this.fetchAssetById();
     }
  }

  fetchAssetById() {
    this.amsService
    .getAssetById(this.amsService.assetId)
    .subscribe((res: any) => {
      this.asset = res.data;
      console.log(this.amsService.assetId, 'asset at view');
    });
  }

  addAsset(asset) {
    console.log(asset, 'this is new asset'),
    this.amsService.addAsset(asset).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
