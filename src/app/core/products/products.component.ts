import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

import axios from 'axios';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products!: any ;
  constructor(private router: Router) {}
ngOnInit() :void {
  this.fetchData();
}
fetchData(){
  axios.get('https://dummyjson.com/products')
  .then(response => {
    this.products = response.data.products;
    console.log(this.products);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
navigate(id: number) {
  this.router.navigate(['/product', id]);
}

}
