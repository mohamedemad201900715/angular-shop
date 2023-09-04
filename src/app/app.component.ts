import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { product } from './Interfaces/ApiData.interface';
import { NavigationEnd, Router } from '@angular/router';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Shopify';
  cartItem: product[] =[];
  numberOfCartItem:number= 0;
  constructor(private service: ServiceService){}
  ngOnInit(): void {
    this.service.getCartItemCount().subscribe((count) => {
      this.numberOfCartItem = count;
    });
  }


}
