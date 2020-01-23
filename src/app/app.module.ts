import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SimpleComponent} from './simplecomponent/app.simple.component';
import { ProductFormComponent } from './productformcomponent/app.productform.component';
import { ProductReactiveFormComponent } from './productrectiveformcomponent/app.productreactiveform.component';
import { CatMasterComponent } from './masterdetails/app.catmaster.component';
import { PrdChildComponent } from './masterdetails/app.prdchild.component';
import {UtilityService} from './services/app.utility.service';
import { CatSenderComponent } from './masterdetailservices/app.catsender.component';
import { PrdReceiverComponent } from './masterdetailservices/app.prdreceiver.component';
import {CommunicationService} from './services/app.communication.service';


// imporing the SharedModule
import {SharedModule} from './../sharedmodule/app.shared.module';
import { HttpComponent } from './httpcomponent/app.http.component';

// imports: Of the type array, used to import standard angular modules and
// custom external modules in current application

// declarations: Of the type array, used to declare objects of Components,
// directives and pipes of the current application in object pool
// RULE--> All components/directives/pipes must be declared in declarations

// providers: Of the type array, used to register the injectable services
// in DI containser. Providers is DI container

// bootstrap: Of the type array, used to instantiate component(s) from
// declarations to run in browser

@NgModule({
  declarations: [
    AppComponent, SimpleComponent, ProductFormComponent,
    ProductReactiveFormComponent,
    CatMasterComponent, PrdChildComponent,
    CatSenderComponent, PrdReceiverComponent, HttpComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, SharedModule // the AppModule will use DI of SharedModule
  ],
  providers: [UtilityService,CommunicationService],
  bootstrap: [ProductFormComponent]
})
export class AppModule { }
