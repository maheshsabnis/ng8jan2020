import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
// HttpClientModule manages all Http Communications
import {HttpClientModule} from '@angular/common/http';

import {HttpService} from './services/app.http.service';

// shared modules can optionally import 'CommonModule' 
// to execute all Components/Directives/Pipes

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [HttpService] // registering HttpService in DI
})
export class SharedModule { }
