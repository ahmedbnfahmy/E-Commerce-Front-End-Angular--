import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AuthGuard } from 'src/app/gaurds/auth.guard';
import { Route } from '@angular/router';




const routes:Routes=[

  {path:'Products',component:ProductsComponent,title:'products' },
  // {path:'Products',component:ProductsComponent,title:'products' , canActivte: [AuthGuard]},
  {path:'Prddetails/:pid',component:ProductDetailsComponent,title:'productsDetails'},
  // {path:'Prddetails/:pid',component:ProductDetailsComponent,title:'productsDetails'canActivte:[AuthGuard]},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
