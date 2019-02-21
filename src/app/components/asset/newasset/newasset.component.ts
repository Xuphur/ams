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
  // public currentPage = 0;
  number :any;
  asset: Asset ;
  activeIdString: String = '';
  // showassets: boolean =false;
  constructor(
    private amsService: AmsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    
  ) {
    this.asset = new Asset();
    this.route.paramMap.subscribe(parameterMap=> {
      const id = parameterMap.get('id');
      this.amsService.getAssetById(id);
    });
   }
   ngOnInit() {
  }
  changeTab(){
    // this.currentPage =this.currentPage+1;
    this.activeIdString = ' ';
    this.activeIdString = this.asset.assetType;
    
    // console.log(this.activeIdString);
  
  }
  addAsset(asset) {
    console.log(asset, 'this is new asset'),
    this.amsService.addAsset(asset).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
