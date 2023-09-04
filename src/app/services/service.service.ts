import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  product } from '../Interfaces/ApiData.interface';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private cartItemCountSubject = new BehaviorSubject<number>(0);

  constructor(private http :HttpClient) { }
  getPruducts(){
    return this.http.get<product[]>('https://fakestoreapi.com/products');
}
getPruduct(param:number){
  return this.http.get<product>(`https://fakestoreapi.com/products/${param}`);
}
getCategories(){
  return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
}
getCategory(category:string){
  return this.http.get<product[]>(`https://fakestoreapi.com/products/category/${category}`);
}
getCartItemCount(): Observable<number> {
  return this.cartItemCountSubject.asObservable();
}
updateCartItemCount(count: number) {
  this.cartItemCountSubject.next(count);
}
}

