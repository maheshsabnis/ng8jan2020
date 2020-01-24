import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components jsut to use it in route table
import { HomeComponent } from './routingapp/app.home.component';
import { AboutComponent } from './routingapp/app.about.component';
import { ContactComponent } from './routingapp/app.contact.component';
import { ProductFormComponent } from './productformcomponent/app.productform.component';


// used to define route table
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about/:id', component:AboutComponent},
  {path:'contact', component:ContactComponent,children:[
    {path:'product', component: ProductFormComponent} ]
  },
  {path:'**', component:HomeComponent}
];

@NgModule({
  // the forRoot() method will register Route table on root e.g. at NgModule level
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] // the router module with all its object will be explosed to AppModule
})
export class AppRoutingModule { }
