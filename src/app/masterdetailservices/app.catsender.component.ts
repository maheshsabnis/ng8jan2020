import { Component, OnInit } from '@angular/core';
import {Category,Categories} from '../models/app.objects';
import {CommunicationService} from './../services/app.communication.service';
@Component({
  selector: 'app-catsender-component',
  template: `
    <h2>Sender Component</h2>
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
    
  
  ` 
})
export class CatSenderComponent implements OnInit {
   cat: Category;
   cats = Categories;
   message: string;   
  constructor(private serv: CommunicationService) {
    this.cat = new Category(0,'');
    this.message = ""; 
   }

   getNotified(event): void {
      this.message = event;
   }

  ngOnInit(): void { }
  getSelectedCategory(c: Category ): void {
     this.cat = c;
     this.serv.onNotify(this.cat.CatId);
  }
}
