import { Component, OnInit } from '@angular/core';
import {Category,Categories} from './../models/app.objects';
@Component({
  selector: 'app-catmaster-component',
  template: `
    <div>{{message}}</div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Cat Id</th>
          <th>Cat Name</th>
        </tr>
      </thead>
      <tbody>
         <tr *ngFor="let c of cats" (click)="getSelectedCategory(c)">
            <td>{{c.CatId}}</td>
            <td>{{c.CatName}}</td>
         </tr>
      </tbody>
    </table>
    <hr>
    <!--The Parent is subscribing to the notify event from child-->
    <app-prdchild-component [CatId]="cat.CatId" (notify)="getNotified($event)"></app-prdchild-component>
  ` 
})
export class CatMasterComponent implements OnInit {
   cat: Category;
   cats = Categories;
   message: string;   
  constructor() {
    this.cat = new Category(0,'');
    this.message = ""; 
   }

   getNotified(event): void {
      this.message = event;
   }

  ngOnInit(): void { }
  getSelectedCategory(c: Category ): void {
     this.cat = c;
  }
}
