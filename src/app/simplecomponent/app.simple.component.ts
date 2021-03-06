import {Component} from '@angular/core'

import {UtilityService} from './../services/app.utility.service';
// selector --> the custom HTML tage using which the component's html will 
// be rendered in index.html
// templateUrl --> the html file that will be rendered where the 'selector'
// is used  

// the Angular Binding
// 1. interpolation , the read-only string based interpolation
// syntax {{PROPERTY-FROM_COMPONENT}}

// use [(ngModel)]="<PUBLIC-PROPERTY-FROM-COMPONENT>"
// use FormsModule from @angular/forms and import it in imports of @NgModule

@Component({
  selector: 'app-simple-component',
  templateUrl: './app.simple.component.view.html'
})
export class SimpleComponent {
  message: string;
  name: string;
  header: string;

  // inject the UtilityService in ctor
  constructor(private serv: UtilityService) {
    this.header = 'The Simple Component';
    this.name = 'Mahesh Sabnis';
    this.message = 'The Component';
  }

  display(event){
     this.header = this.serv.chagneCase(this.header, 'U'); 
     this.message = `The display method ${event.target.value}`;
  }
}