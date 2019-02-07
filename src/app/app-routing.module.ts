import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListassetComponent } from './components/asset/listasset/listasset.component';

const routes: Routes = [
  { path: '', component: ListassetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
