import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ProductInfo,products} from './../models/app.objects';
@Component({
  selector: 'app-prdchild-component',
  template: `
    <h2>List of Products for CatId {{CatId}}</h2>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
        <th>Prd Id</th>
        <th>Prd Name</th>
          <th>Cat Id</th>
        </tr>
      </thead>
      <tbody>
         <tr *ngFor="let p of FilteredProducts">
         <td>{{p.PrdId}}</td>
         <td>{{p.PrdName}}</td>
            <td>{{p.CatId}}</td>
         </tr>
      </tbody>
    </table>
    <br>
    <input type="button" value="NotifyBack" class="btn btn-warning" (click)="onNotify()">
  ` 
})
export class PrdChildComponent implements OnInit {
   prd: ProductInfo;
   prds = products;
   private _CatId: number;   
   private _FilteredProducts: Array<ProductInfo>;

   @Output() 
   notify: EventEmitter<string>;
  
   constructor() {
    this._CatId = 0;
    this._FilteredProducts = new Array<ProductInfo>();
    this.notify = new EventEmitter<string>();
    console.log('Constructor Called');
  }

  @Input()
  set CatId(val: number) {
    console.log(`Received from Parent ${this._CatId}`);
    this._CatId = val;
  }

  get CatId(): number {
    return this._CatId;
  }

  // a method that will ewmit an event with payload
  onNotify(): void {
    this.notify.emit(`We found ${this._FilteredProducts.length} records for CatId ${this._CatId}`);
  }

  get FilteredProducts(): Array<ProductInfo> {
    this._FilteredProducts = new Array<ProductInfo>();
    if(this._CatId >0) {
      this._FilteredProducts = this.prds.filter((p,i) => {
        return p.CatId === this._CatId;
      });
    } else {
      this._FilteredProducts = this.prds;
    }
    return this._FilteredProducts;
  }


  ngOnInit(): void { 
    console.log(' ngOnInit Called');
  }
}
