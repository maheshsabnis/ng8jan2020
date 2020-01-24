import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  template: `
    <table class="table table-bordered table-striped">
      <tr>
        <td>
          <input type="radio" name="r" (click)="color='red'"/> Red
        </td>
        <td>
          <input type="radio" name="r" (click)="color='blue'"/> Blue
        </td>
        <td>
          <input type="radio" name="r" (click)="color='yellow'"/> Yellow
        </td>
      </tr>
    </table>
    <br/>

    <div class="container" [setColor]="color"> The First Div</div> 
    <br/>
    <div class="container" [setColor]="color"> The Second Div</div> 
    <br/>
    <div class="container" [setColor]="color"> The Third Div</div> 

  ` 
})
export class DirectiveComponent implements OnInit {
  color: string;
  constructor() {
    this.color = '';
   }

  ngOnInit(): void { }
}
