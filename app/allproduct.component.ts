import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Product } from './product';
import { AllProductService } from './allProduct.service';
import { MyCart } from './mycart.component';
@Component({
  selector: 'my-dashboard',
  template: `
    <div clss="allpro">
      <ul>
        <li *ngFor="#hero of Prod" >
          <div class="single">
              <img src="{{hero.link}}"/>
              <span>{{hero.name}}</span>
              <button (click)='addTocart(hero)'>+Add To Cart</button>
          </div>
        </li>  
      </ul>
    </div>
   `,
  styles: [`
    li {
        display: block;
        float: left;
        padding: 15px;
        border: 1px solid #ECECEC;
        width:325px;
        text-align:center;
        background:cornsilk;
    }
    .single span{
      width:100%;
      display:block;

    }
  `]
})
export class AllProductsComponent  {

  Prod: Product[] = [];
  public _myCartItems:Product[];

  constructor( private _router: Router, poewr: AllProductService, private _myCart:MyCart) {
    this.Prod = poewr.getHeroes()._result;
    this._myCartItems = _myCart.getCart();
  }

  addTocart(item:Product){
      this._myCart.addToCart(item);
  }
  
}
