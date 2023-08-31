import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllData, product } from '../Interfaces/ApiData.interface';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http :HttpClient) { }
  getPruducts(){
    return this.http.get<AllData>('https://dummyjson.com/products');
}
getPruduct(param:number){
  return this.http.get<product>(`https://dummyjson.com/products/${param}`);
}
}

