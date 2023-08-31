import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import axios from 'axios';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products!: any ;
  loading:boolean= true;
  constructor(private router: Router, private service: ServiceService) { }
ngOnInit() :void {
  this.fetchData();
}
fetchData(){
      this.service.getPruducts().subscribe(response => {
    this.loading = true
    this.products = response.products;
    console.log(this.products);
    this.loading=false;
  })
}
navigate(id: number) {
  this.router.navigate(['/product', id]);
}

}
