import { Injectable, EventEmitter } from 'angular2/core';


interface authData{
	name:string,
	pass:string
}
@Injectable()
export class LoginService {

	public Auth:any;
	AuthPannel: EventEmitter<number> = new EventEmitter();

	constructor(){
		this.Auth = localStorage.getItem('token') || null;
		this.updateAction();
	}

	get fullName(): string {
		 return this.Auth;
	}

	logOut(){
		this.Auth = null;
		localStorage.removeItem('token');
		this.updateAction();
	}

	private updateAction(){
		this.AuthPannel.emit(this.Auth);
	}

	public getAuth(){
		return this.AuthPannel;
	}

	public login(authdata:authData){
		if(authdata.name=="admin" && authdata.pass=="admin"){
			this.Auth = "admin";
			localStorage.setItem("token","admin");
			this.updateAction();
			return true;
		}
		return false;
	}

	

}