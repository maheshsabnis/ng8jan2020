import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-component',
  template: `
     <app-dynamictable-component [DataSource]="emps"></app-dynamictable-component>
  ` 
})
export class EmpComponent implements OnInit {
  emps: Array<any>;
  constructor() { 
    this.emps = new Array<any>();
  }

  ngOnInit(): void { 
    this.emps.push({EmpNo:101,EmpName:'A'}); 
    this.emps.push({EmpNo:102,EmpName:'B'});
    this.emps.push({EmpNo:103,EmpName:'C'});
  }
}
