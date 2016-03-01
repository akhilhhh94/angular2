import { Component, OnInit, EventEmitter } from 'angular2/core';
import { Router } from 'angular2/router';
import { Product } from './product';
import { AllProductService } from './allProduct.service';
import { MyCart } from './mycart.component';
import { cartFilter } from './cartFilter.pipe';
@Component({
  selector: 'my-dashboard',
  template: `
    <div clss="allpro">
      <ul>
        <li *ngFor="#hero of Prod" >
          <div class="single">
              <img src="{{hero.link}}"/>
              <span>{{hero.name}}</span>
              <button [disabled]="buttonState(hero)" (click)='addTocart(hero)'>+Add To Cart</button>
          </div>
        </li>  
      </ul>
    </div>
   `,
  pipes: [cartFilter],
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

  public Prod: Product[] = [];
  public _myCartItems:Product[];
 

  constructor( private _router: Router, poewr: AllProductService, private _myCart:MyCart) {
    this.Prod = poewr.getHeroes()._result;
    this._myCartItems = _myCart.getCart();
  }

  addTocart(item:Product){
    this._myCart.addToCart(item);
    
  }

  buttonState(item:Product){
      var CartProduct = this._myCart.getCart();
    
      if (CartProduct) {
          for (var i = CartProduct.length - 1; i >= 0; i--) {
        console.info(CartProduct[i]);
            if(CartProduct[i].id ===item.id){
        console.info(item.name);
                return true;
            }else{
                //return false;
            }
          }
      }else{
        //return true;
      }
  }

}
