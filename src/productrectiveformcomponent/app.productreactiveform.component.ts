import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';

import {Product} from '../models/app.product.model';
import {Categories, Manufacturers} from '../models/app.constants';
import {ProductLogic} from '../models/app.logic';
import { EvenValidator } from './app.custom.validator';

@Component({
  selector: 'app-productreactiveform-component',
  templateUrl: './app.productreactiveform.view.html'
})
export class ProductReactiveFormComponent implements OnInit {
  // OnInit--> The Component Lifecycle intreface that provides 
  // ngOnInit() method

  product: Product;
  products: Array<Product>;
  private logic: ProductLogic;
  columnHeaders: Array<string>;

  // define FormGroup instance to map with the <form> tag
  frmProduct: FormGroup;

  // read the constants and store their data in local public objects
  categories = Categories;
  manufacturers = Manufacturers;
  constructor() { 
    this.product = new Product(0,'','','','','',0);

    // instantiate the frmProduct and map the product object with its properties
    // with this instance
    // the FormControl represents an editable elements inside <form>
    // and its key will be used to map element with the model object's property 
    this.frmProduct = new FormGroup({
      ProductRowId: new FormControl(this.product.ProductRowId,
         Validators.compose(
           [
             Validators.required, Validators.minLength(2),
             Validators.maxLength(6), Validators.pattern('[0-9]+'),
             EvenValidator.checkEven
           ]
         )),
      ProductId: new FormControl(this.product.ProductId),
      ProductName: new FormControl(this.product.ProductName),
      CategoryName: new FormControl(this.product.CategoryName),
      Manufacturer: new FormControl(this.product.Manufacturer),
      Description: new FormControl(this.product.Description),
      BasePrice: new FormControl(this.product.BasePrice)
    });



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
    this.product = this.frmProduct.value; // the state for the fromGroup
    this.products = this.logic.saveProduct(this.product);
    console.log(JSON.stringify(this.products));
  }
  getSel1ectedProduct(p: Product): void {
    // creating a blank object aka target
    // copy source p in the blank target
      this.product = Object.assign({}, p);
  }
}
