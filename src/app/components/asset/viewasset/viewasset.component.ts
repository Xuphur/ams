import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/asset.model';
import { AmsService } from 'src/app/ams.service';

@Component({
  selector: 'app-viewasset',
  templateUrl: './viewasset.component.html',
  styleUrls: ['./viewasset.component.css']
})
export class ViewassetComponent implements OnInit {

  asset: any ;

//  vehicle: Boolean = true;
//  house: Boolean = true;
//  item: Boolean = true;
  constructor(
    private amsService: AmsService,
  ) { }

  ngOnInit() {
    this.fetchAssetById();
  }

  fetchAssetById() {
    this.amsService
    .getAssetById(this.amsService.assetId)
    .subscribe((res: any) => {
      this.asset = res.data;
      console.log(this.amsService.assetId, this.asset, 'asset at view');
    });
  }

}
