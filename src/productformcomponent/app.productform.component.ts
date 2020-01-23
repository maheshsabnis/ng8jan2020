import { Component, OnInit } from '@angular/core';
import {Product} from './../models/app.product.model';
import {Categories, Manufacturers} from './../models/app.constants';
import {ProductLogic} from './../models/app.logic';

@Component({
  selector: 'app-productform-component',
  templateUrl: './app.productform.view.html'
})
export class ProductFormComponent implements OnInit {
  // OnInit--> The Component Lifecycle intreface that provides 
  // ngOnInit() method

  product: Product;
  products: Array<Product>;
  private logic: ProductLogic;
  columnHeaders: Array<string>;

  // read the constants and store their data in local public objects
  categories = Categories;
  manufacturers = Manufacturers;
  constructor() { 
    this.product = new Product(0,'','','','','',0);
    this.products = Array<Product>();
    this.logic = new ProductLogic();
    this.columnHeaders = new Array<string>();
  }

  // ngOnInit will be immediately invoked after constructor
  // write a code in this method that will delay the ctor if it is written
  // imn ctor.
  ngOnInit(): void { 
    // JS Reflection
    for(let c in this.product) {
      this.columnHeaders.push(c);
    }
    this.products = this.logic.getProducts();
  }

  clear(): void {
    this.product = new Product(0,'','','','','',0);
  }
  save(): void {
    this.products = this.logic.saveProduct(this.product);
    console.log(JSON.stringify(this.products));
  }
  getSelectedProduct(p: Product): void {
    // creating a blank object aka target
    // copy source p in the blank target
      this.product = Object.assign({}, p);
  }
}
