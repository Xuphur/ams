import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListassetComponent } from './components/asset/listasset/listasset.component';
import { ListcontractComponent } from './components/contract/listcontract/listcontract.component';
import { ListcustomerComponent } from './components/customer/listcustomer/listcustomer.component';

const routes: Routes = [
  { path: 'asset/list', component: ListassetComponent },
  { path: 'contract/list', component: ListcontractComponent },
  { path: 'customer/list', component: ListcustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
