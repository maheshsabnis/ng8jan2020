import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../sharedmodule/services/app.http.service';
import {Product} from './../models/app.product.model';
@Component({
  selector: 'app-http-component',
  template: `
  
     <input type="button" value="Get Data" class="btn btn-warning" (click)="receiveData()"/>
     <br>
     <input type="button" value="Post Data" class="btn btn-success" (click)="saveData()"/>
  ` 
})
export class HttpComponent implements OnInit {
  // inject the service
  constructor(private serv: HttpService) { }


  private loadData(): void {
     // subscribing to Observable to receive data
     this.serv.getData().subscribe((resp) => {
         console.log(`received Data ${JSON.stringify(resp)}`); 
      }, (error) => {
        console.log(`Error Occured ${error}`);
      });
  }

  receiveData(): void {
    this.loadData();
  }

  saveData(): void {
     let prd: Product = new Product(0, 'Prd100002', 'Laptop', 'HP', 
     'ELectronics', 'Gaming',920000);
     // subscribing to Observable to receive data
     this.serv.postData(prd).subscribe((resp) => {
      console.log(`received Data ${JSON.stringify(resp)}`); 
   }, (error) => {
     console.log(`Error Occured ${error}`);
   });
  }


  ngOnInit(): void {
    this.loadData();
  }
}
