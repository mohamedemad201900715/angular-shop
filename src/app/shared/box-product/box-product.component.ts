import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/Interfaces/ApiData.interface';

@Component({
  selector: 'app-box-product',
  templateUrl: './box-product.component.html',
  styleUrls: ['./box-product.component.scss']
})
export class BoxProductComponent {
@Input() product!: product;
@Output() item = new EventEmitter<product>;
constructor(private router: Router){}
navigate(id: number) {
  this.router.navigate(['/product', id]);
}
add(){
this.item.emit(this.product);
}
}
