import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  product } from '../Interfaces/ApiData.interface';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http :HttpClient) { }
  getPruducts(){
    return this.http.get<product[]>('https://fakestoreapi.com/products');
}
getPruduct(param:number){
  return this.http.get<product>(`https://fakestoreapi.com/products/${param}`);
}
}

