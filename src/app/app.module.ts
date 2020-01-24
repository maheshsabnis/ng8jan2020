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
import { CORSComponent } from './corscomponent/app.cors.component';
import { HomeComponent } from './routingapp/app.home.component';
import { AboutComponent } from './routingapp/app.about.component';
import { ContactComponent } from './routingapp/app.contact.component';
import { MainComponent } from './routingapp/app.main.component';
import { DynamicTableComponent } from './dynamictablecomponent/app.dynamictable.component';
import { EmpComponent } from './empcomponent/app.emp.component';
import { ColorDirective } from './customdirective/app.color.directive';
import { DirectiveComponent } from './directicecomponent/app.directive.component';

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
    CatSenderComponent, PrdReceiverComponent, HttpComponent,
    CORSComponent, DynamicTableComponent,EmpComponent,
    HomeComponent, AboutComponent,ContactComponent,MainComponent,
    ColorDirective, DirectiveComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, SharedModule // the AppModule will use DI of SharedModule
  ],
  providers: [UtilityService,CommunicationService],
  bootstrap: [DirectiveComponent]
})
export class AppModule { }
