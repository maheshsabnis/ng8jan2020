import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector:'app-dynamictable-component',
  templateUrl: './app.dynamictable.view.html'
})

export class DynamicTableComponent implements OnInit {
  private _DataSource: Array<any>;
  columnHeaders: Array<string>;
  constructor() { 
    this._DataSource = new Array<any>();
    this.columnHeaders = new Array<string>();
  }

  ngOnInit() {
  
  }
  @Input()
  set DataSource(value:  Array<any>) {
    this._DataSource = value;
    if(this._DataSource.length >0) {
      for(let p in this._DataSource[0]) {
        this.columnHeaders.push(p);
      }
    }
  }

  get DataSource() : Array<any> {
      return this._DataSource;
  }


}
