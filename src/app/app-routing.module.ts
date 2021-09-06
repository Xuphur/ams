import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListassetComponent } from './components/asset/listasset/listasset.component';
import { ListcontractComponent } from './components/contract/listcontract/listcontract.component';
import { ListcustomerComponent } from './components/customer/listcustomer/listcustomer.component';
import { SearchComponent } from './components/search/search.component';
import { LoginInComponent } from './components/users/login-in/login-in.component';
import { SignupComponent } from './components/users/signup/signup.component';
import { AuthguardService } from './authguard.service';
import { MainComponent } from './components/reports/main/main.component';

const routes: Routes = [
  // { path: '', component: LoginInComponent },
  { path: '', canActivate: [AuthguardService], redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'login',
    // canActivate: [AuthguardService],
    component: LoginInComponent
  },
  {
    path: 'signup',
    canActivate: [AuthguardService],
    component: SignupComponent
  },
  {
    path: 'asset/list',
    canActivate: [AuthguardService],
    component: ListassetComponent
  },
  {
    path: 'contract/list',
    canActivate: [AuthguardService],
    component: ListcontractComponent
  },
  {
    path: 'customer/list',
    canActivate: [AuthguardService],
    component: ListcustomerComponent
  },
  {
    path: 'reports/main',
    canActivate: [AuthguardService],
    component: MainComponent
  },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
