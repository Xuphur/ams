import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListassetComponent } from './components/asset/listasset/listasset.component';

import { AmsService } from './ams.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NewassetComponent } from './components/asset/newasset/newasset.component';
import { NewrecieptComponent } from './components/reciept/newreciept/newreciept.component';
import { ListrecieptComponent } from './components/reciept/listreciept/listreciept.component';
import { ViewassetComponent } from './components/asset/viewasset/viewasset.component';



@NgModule({
  declarations: [
    AppComponent,
    ListassetComponent,
    NewassetComponent,
    NewrecieptComponent,
    ListrecieptComponent,
    ViewassetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  FormsModule,
  BsDropdownModule.forRoot(),
  TooltipModule.forRoot(),
  ModalModule.forRoot()
  ],
  entryComponents: [
   NewassetComponent,
   NewrecieptComponent,
   ListrecieptComponent
  ],
  providers: [AmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
