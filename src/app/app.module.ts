import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SimpleComponent} from './simplecomponent/app.simple.component';

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
    AppComponent, SimpleComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SimpleComponent]
})
export class AppModule { }
