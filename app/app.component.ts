import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { AllProductService } from './allProduct.service';
import { AllProductsComponent } from './allproduct.component';
import { MyCart } from './mycart.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="myBody">
  <h1>{{title}}</h1>
  <button><a [routerLink]="['Cart']">All Products</a></button>
  <button>Cart</button>
 <router-outlet></router-outlet>
   </div>
  `,
  styleUrls: ['css/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    AllProductService,
    MyCart
  ]
})
@RouteConfig([
  {
      path: '/Cart',
      name: 'Cart',
    component: AllProductsComponent
   
  }
])
export class AppComponent {
  title = 'welcome';
}

