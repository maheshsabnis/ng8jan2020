import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about-component',
  template: `
     <h2>The About Component</h2>
      <div>{{message}}</div>
      <hr>
      <input type="button" value="Navigate To Contact" (click)="navigateToContact()"/>
  ` 
})
export class AboutComponent implements OnInit {
  message: string;
  // inject router as ctor injector, this will be resolved by 'RouterModule'
  // inject ActivatedRoute in ctor this will be used to subscribe URL for parameter
  // this instance will be resolved by RouterModule
  constructor(private router: Router, private act: ActivatedRoute) { 
    this.message = 'This is About Component';
  }

  navigateToContact(): void {
    // the first paarmeter is route uri and next parameters will be route-parameters if any
    this.router.navigate(['contact']);
  }
  // subscribe to the paramneterized routing once using ActivatedRoute
  ngOnInit(): void { 
    this.act.params.subscribe((param) => {
        this.message += param.id;
    });

  }
}
