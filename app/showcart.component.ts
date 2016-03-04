import { Component, OnInit, EventEmitter } from 'angular2/core';
import { MyCart } from './mycart.component';
import { Product } from './product';
@Component({
  selector: 'my-dashboard',
  template: `
    <h1>My Cart</h1>
    <div>
    <table>
      <tr>
        <td>Num</td>
        <td>Name</td>
        <td>Action</td>
      </tr>
 <tr *ngFor="#single of _myCartItems; #i = index" >
          <td>{{i+1}}</td>
        <td>{{single.name}}</td>
        <td><button>x</button></td>
        </tr> 
    </table>
    </div>

   `,
  styles: [`
    table{
      width:100%
    }
  `]
})

export class ShowCart {
    public _myCartItems:Product[];
    
    constructor(private _myCart:MyCart){
      this._myCartItems = _myCart.getCart();
    }
}

