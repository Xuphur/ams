import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListassetComponent } from './components/asset/listasset/listasset.component';
import { ListcontractComponent } from './components/contract/listcontract/listcontract.component';
import { ListcustomerComponent } from './components/customer/listcustomer/listcustomer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { LoginInComponent } from './components/users/login-in/login-in.component';
import { SignupComponent } from './components/users/signup/signup.component';
import { AuthguardService } from './authguard.service';

const routes: Routes = [
  // { path: '', component: LoginInComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'asset/list', component: ListassetComponent },
  { path: 'contract/list', component: ListcontractComponent },
  { path: 'customer/list', component: ListcustomerComponent },
  { path: 'dashboard', canActivate: [AuthguardService], component: DashboardComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
