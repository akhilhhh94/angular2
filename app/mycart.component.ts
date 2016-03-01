import { Product } from './product';
import { Injectable, EventEmitter } from 'angular2/core';


@Injectable()
export class MyCart {

	public cart: Product[]= [];
	UpdateCart: EventEmitter<number> = new EventEmitter();


	addToCart(item: Product) {

		this.cart.push(item);
		this.updateDom();

	}
	getCart() {
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
	updateDom(){
        this.UpdateCart.emit(this.TotalItem());
	}
	getNavChangeEmitter() {
	 	return this.UpdateCart;
	}
}