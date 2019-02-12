import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListassetComponent } from './components/asset/listasset/listasset.component';

import { AmsService } from './ams.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NewassetComponent } from './components/asset/newasset/newasset.component';
import { NewrecieptComponent } from './components/reciept/newreciept/newreciept.component';
import { ListrecieptComponent } from './components/reciept/listreciept/listreciept.component';
import { ViewassetComponent } from './components/asset/viewasset/viewasset.component';
import { NewcustomerComponent } from './components/customer/newcustomer/newcustomer.component';
import { ListcustomerComponent } from './components/customer/listcustomer/listcustomer.component';
import { ViewcustomerComponent } from './components/customer/viewcustomer/viewcustomer.component';
import { NewcontractComponent } from './components/contract/newcontract/newcontract.component';
import { ListcontractComponent } from './components/contract/listcontract/listcontract.component';
import { ViewcontractComponent } from './components/contract/viewcontract/viewcontract.component';


@NgModule({
  declarations: [
    AppComponent,
    ListassetComponent,
    NewassetComponent,
    NewrecieptComponent,
    ListrecieptComponent,
    ViewassetComponent,
    NewcustomerComponent,
    ListcustomerComponent,
    ViewcustomerComponent,
    NewcontractComponent,
    ListcontractComponent,
    ViewcontractComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  FormsModule,
  ],
  entryComponents: [
   NewassetComponent,
   NewrecieptComponent,
   ListrecieptComponent,
   ViewassetComponent,
   NewcustomerComponent,
   ListcustomerComponent,
   ViewcustomerComponent,
   NewcontractComponent,
   ListcontractComponent,
   ViewcontractComponent
  ],
  providers: [AmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
