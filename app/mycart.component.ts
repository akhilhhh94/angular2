import { Product } from './product';
import { Injectable } from 'angular2/core';

@Injectable()
export class MyCart {

	public cart: Product[]= [];

	addToCart( item:Product ){
		this.cart.push(item);
	}
	getCart(){
		return this.cart;
	}
	clearCart(){
		return this.cart = [];
	}
	removeItem(item:Product){
		this.cart.filter(it=> it.id == item.id);
	}
	TotalItem(){
		return this.cart.length || 0;
	}
}