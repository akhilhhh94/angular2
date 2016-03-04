import { Component, OnInit, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-home',
  template: `
    <h1>Welcomr to cart</h1>
    <div>
   `,
})

export class HomeComponent {
    public _myCartItems:Product[];
    
    constructor(){
     
    }
}

