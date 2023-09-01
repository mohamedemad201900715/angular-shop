import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import axios from 'axios';
import { product } from 'src/app/Interfaces/ApiData.interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products!: product[] ;
  loading:boolean= true;
  constructor(private router: Router, private service: ServiceService) { }
ngOnInit() :void {
  this.fetchData();
}
fetchData(){
  this.loading = true
      this.service.getPruducts().subscribe(response => {
    this.products = response;
    console.log(this.products);
    this.loading=false;
  })
}
navigate(id: number) {
  this.router.navigate(['/product', id]);
}

}
