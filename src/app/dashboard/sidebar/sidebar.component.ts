import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  dash: boolean;
  asset: boolean;
  customerbool: boolean;
  constract: boolean;
  rep: boolean;
  dashboard: string;
  assets: string;
  customers: string;
  contracts: string;
  report: string;
  constructor() {
    this.dashboard = 'Dashboard';
    this.assets = 'assets';
    this.customers = 'customer';
    this.contracts = 'contract';
    this.report = 'report';

   }

  ngOnInit() {
  }
  customizecss(val) {
    console.log( 'checkingggggggggggg', val);
    if (val === 'Dashboard') {
      this.dash = true;
      this.asset = false;
      this.customerbool = false;
      this.constract = false;
      this.rep = false;
    }
    else if (val === 'assets') {
      this.asset = true;
      this.dash = false;
      this.customerbool = false;
      this.constract = false;
      this.rep = false;
    }
    else if (val === 'customer') {
      this.customerbool = true;
      this.asset = false;
      this.dash = false;
      this.constract = false;
      this.rep = false;
    }
    else if (val === 'contract') {
      this.constract = true;
      this.customerbool = false;
      this.asset = false;
      this.dash = false;
      this.rep = false;
    }
    else if (val === 'report') {
      this.rep = true;
      this.constract = false;
      this.customerbool = false;
      this.asset = false;
      this.dash = false;
    }
  }

}
