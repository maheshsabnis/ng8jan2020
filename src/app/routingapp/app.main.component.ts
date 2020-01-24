import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
   <table class="table table-bordered table-striped">
     <tr>
       <td>
         <a [routerLink]="['']">Home</a>
       </td>
       <td>
         <a [routerLink]="['about', id]">About</a>
       </td>
       <td>
         <a [routerLink]="['contact']">Contact</a>
       </td>
     </tr>
   </table>
   <hr>
   <router-outlet></router-outlet>
  ` 
})
export class MainComponent implements OnInit {
  id: number;
  constructor() {
    this.id = 100000;
   }

  ngOnInit(): void { }
}
