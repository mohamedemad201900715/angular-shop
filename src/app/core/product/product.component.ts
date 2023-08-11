import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  currentIndex: number = 0;
  product!: any ;
  param:any;
constructor(private route: ActivatedRoute){}

ngOnInit() :void {
  this.param = this.route.snapshot.params['id'];
 this.fetchData();
}

  fetchData(){
  axios.get(`https://dummyjson.com/products/${this.param}`)
  .then(response => {
    this.product = response.data;
    console.log(this.product);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}

displayImage(index: number): void {
  this.currentIndex = index;
}
}
