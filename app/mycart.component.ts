import { Product } from './product';
import { Injectable, EventEmitter } from 'angular2/core';


@Injectable()
export class MyCart {

	public cart =[];
	UpdateCart: EventEmitter<number> = new EventEmitter();

	public constructor(){
		if (!localStorage.getItem('mycart')) {
			localStorage.setItem('mycart',this.jsonConver([]));
		}
	}

	public jsonConver (array) {
		return JSON.stringify(array);	
	}
	public reverseJson(string:string){
		return JSON.parse(string);
	}

	addToCart(item: Product) {
		var temp = this.getCart();
		temp.push(item);
		localStorage.setItem('mycart', this.jsonConver(temp));
		this.updateDom();
	}

	getCart() {
		return this.reverseJson(localStorage.getItem('mycart'));
	}

	clearCart() {
		localStorage.setItem('mycart',this.jsonConver([]));
		this.updateDom();
		return true;
	}

	removeItem(item: Product) {
		var temp = this.getCart();
		var tempCart = [];
		temp.forEach(itm=> {
			if (itm.id !== item.id) {
				tempCart.push(itm);
			}
		});
		localStorage.setItem('mycart', this.jsonConver(tempCart));
		this.updateDom();
	}

	TotalItem(){
		return this.getCart().length || 0;
	}

	updateDom(){
        this.UpdateCart.emit(this.TotalItem());
	}

	getNavChangeEmitter() {
	 	return this.UpdateCart;
	}
}