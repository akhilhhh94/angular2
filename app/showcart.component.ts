import { Component, OnInit, EventEmitter } from 'angular2/core';
import { MyCart } from './mycart.component';
import { Product } from './product';

@Component({
  selector: 'my-dashboard',
  template: `
    <h1>My Cart</h1>
    <div>
    <table  *ngIf="CartItems>0">
      <tr>
        <td>Num</td>
        <td>Name</td>
        <td>Action</td>
      </tr>
 <tr *ngFor="#single of _myCartItems; #i = index" >
          <td>{{i+1}}</td>
        <td>{{single.name}}</td>
        <td><button (click)="removeFromCart(single)">x</button></td>
        </tr> 
    </table>
    </div>
    <div *ngIf="CartItems>0" (click)="ckeckout()"><button>checkout</button></div>
   `,
  styles: [`
    table{
      width:100%
    }
  `]
})

export class ShowCart implements OnInit {

    public _myCartItems:Product[];

     public CartItems:number=0;
    
    constructor(private _myCart:MyCart){
      this._myCartItems = _myCart.getCart();
      this.CartItems = _myCart.TotalItem();
   }

    ngOnInit() { 
      this._myCart.getNavChangeEmitter()
        .subscribe(item =>  this.CartItems=item);
    }

    removeFromCart(item:Product){
      this._myCart.removeItem(item);
      this._myCartItems = this._myCart.getCart();
      return true;  
    }

    ckeckout(){
    this._myCart.clearCart();
      this._myCartItems = this._myCart.getCart();
      return true;
    }
}

