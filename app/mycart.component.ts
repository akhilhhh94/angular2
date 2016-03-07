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
		this.cart = [];
		this.updateDom();
		return true;
	}

	removeItem(item: Product) {
		var tempCart = [];
		this.cart.forEach(itm=> {
			if (itm.id !== item.id) {
				tempCart.push(itm);
			}
		});
		this.cart = tempCart;
		this.updateDom();
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