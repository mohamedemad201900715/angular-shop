import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProductsComponent } from './core/products/products.component';
import { ProductComponent } from './core/product/product.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'products',
  component: ProductsComponent
},
{
  path: 'product/:id',
  component: ProductComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
