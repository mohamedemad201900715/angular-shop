import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  loading:boolean = true;
  currentIndex: number = 0;
  product!: any ;
  param:any;
constructor(private route: ActivatedRoute ,  private service: ServiceService){}

ngOnInit() :void {
  this.param = this.route.snapshot.params['id'];
 this.fetchData();
}
  fetchData(){
    this.service.getPruduct(this.param).subscribe(response => {
    this.loading = true
    this.product = response;
    this.loading = false;

    console.log(this.product);
  })
}
displayImage(index: number): void {
  this.currentIndex = index;
}
}
