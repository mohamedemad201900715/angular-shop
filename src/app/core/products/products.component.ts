import { Component , EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import axios from 'axios';
import { product } from 'src/app/Interfaces/ApiData.interface';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products!: product[] ;
  loading:boolean= true;
  Categories:string[]=[];
  cartItem: product[]= [];
  newItemCount:number = 1;
  constructor(private router: Router, private service: ServiceService) { }
ngOnInit() :void {
  forkJoin([this.fetchCategories(),this.fetchProductData()]);
  if("cart" in localStorage){
    this.cartItem = JSON.parse(localStorage.getItem("cart")!) as product[];
    this.newItemCount = this.cartItem.length;
    this.service.updateCartItemCount(this.cartItem.length);
  }
}
fetchProductData(){
  this.loading = true
      this.service.getPruducts().subscribe(response => {
    this.products = response;
    this.loading=false;
  })
}
fetchCategories(){
  this.loading = true
  this.service.getCategories().subscribe(response => {
    this.Categories = response;
    this.loading=false;
  }, error=>{
    alert(error.message)
    })
}

filterCategory(event:any){
let filter = event.target.value;
(filter =="All")? this.fetchProductData() : this.getCategory(filter);
}
getCategory(filter:string){

  this.loading = true
  this.service.getCategory(filter).subscribe(response => {
    this.products = response;
    this.loading=false;
  }, error=>{
  alert(error.message)
  })
}

addToCart(event:product){
  if("cart" in localStorage){
  this.cartItem = JSON.parse(localStorage.getItem("cart")!) as product[];
  let exist = this.cartItem.find(item => item.id == event.id);
  if(exist){
    console.log(exist);
    alert("item is alredy exist in your cart");
  }
  else{
    this.cartItem.push(event);
    localStorage.setItem("cart",JSON.stringify(this.cartItem))
    this.newItemCount++;
    this.service.updateCartItemCount(this.newItemCount);
  }
}
else{
  this.cartItem.push(event);
  localStorage.setItem("cart", JSON.stringify(this.cartItem));
  this.service.updateCartItemCount(this.newItemCount);

}
}

}
