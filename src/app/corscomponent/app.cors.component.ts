import { Component, OnInit } from '@angular/core';
import { Category } from '../models/app.category.model';
import { CORSService } from '../../sharedmodule/services/app.cors.service';

@Component({
  selector: 'app-cors-component',
  template: `
     <input type="button" value="Get Data" (click)="getDataFromServ()"/>
  ` 
})
export class CORSComponent implements OnInit {
  constructor(private serv: CORSService) { }
 
  ngOnInit(): void { }

  getDataFromServ(): void {
    this.serv.getData().subscribe((resp) => { 
        console.log(`Received Data ${JSON.stringify(resp)}`);
    },(err) => {
        console.log(`Error Occured ${err}`);
    });
  }
}
