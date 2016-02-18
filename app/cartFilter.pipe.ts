import {Pipe} from 'angular2/core';

@Pipe({
	name:'filtercart'
})
export class cartFilter{
	transform(item) {
		console.log(item);
		return "saasd";
	}
}

