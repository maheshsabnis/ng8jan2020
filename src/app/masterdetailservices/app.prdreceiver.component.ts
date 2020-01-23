import { Component, OnInit } from '@angular/core';
import {ProductInfo,products} from '../models/app.objects';
import {CommunicationService} from './../services/app.communication.service';
@Component({
  selector: 'app-prdreceiver-component',
  template: `
    <h2>Receiver Component</h2>
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
   
  ` 
})
export class PrdReceiverComponent implements OnInit {
   prd: ProductInfo;
   prds = products;
    CatId: number;   
    _FilteredProducts: Array<ProductInfo>;
    
   constructor(private serv: CommunicationService) {
    this.CatId = 0;
    this._FilteredProducts = new Array<ProductInfo>();
  }
  get FilteredProducts(): Array<ProductInfo> {
    this._FilteredProducts = new Array<ProductInfo>();
    if(this.CatId >0) {
      this._FilteredProducts = this.prds.filter((p,i) => {
        return p.CatId === this.CatId;
      });
    } else {
      this._FilteredProducts = this.prds;
    }
    return this._FilteredProducts;
  }

  // subscribbe to the event only once

  ngOnInit(): void { 
    this.serv.notify.subscribe((id) => {
        this.CatId = id;
    });
    console.log(' ngOnInit Called');
  }
}
