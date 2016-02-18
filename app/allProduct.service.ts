import { Product } from './product';
import { Products } from './mock-products';
import { Injectable } from 'angular2/core';

@Injectable()
export class AllProductService {
  getHeroes() {
    return new Promise<Product>((resolve, reject) => {
      resolve(Products);
    });
  }
}