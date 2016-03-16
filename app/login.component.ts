import { Component, OnInit } from 'angular2/core';
import { LoginService } from './login.service';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
@Component({
  selector: 'login',
  providers: [LoginService],
  template: `
  <div   *ngIf="token" class="loginBox">
    <h1>Welcome {{token}}</h1>
    <button (click)="logout()">logOUt</button>
    <button (click)="logout()">Profile</button>
  </div>
<div   *ngIf="!token"  class="loginBox">
<button  (click)="action=true" [style.display]="action?'none':'block'" >login</button>
<div   *ngIf="action" >
<form [ngFormModel]="form" (submit)="$event.preventDefault(); onSubmit(form.value)">
      <div *ngIf="error" style="color:red;">Check your password</div>
      <div>
        <label for="username">Username</label>
        <input type="text" ngControl="username">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" ngControl="password">
      </div>
      <div class="form-group">
        <button type="submit" [disabled]="!form.valid">Login</button>
      </div>
    </form>
</div>
 </div>

  `,
  styles: [`
.loginBox {
    position: fixed;
    float: right;
    padding: 33px;
    margin-top: 0;
    top: 22px;
    right: 0px;
    border: 10px dotted rebeccapurple;
    background-color:bisque;
}

`]

})
export class LoginComponent implements OnInit {

  public token=null;
  public action = false;
  form: ControlGroup;
  error: boolean = false;

  constructor(private arc: LoginService, fb: FormBuilder){
    this.token = this.arc.fullName;
      this.arc.getAuth().subscribe((item) => { this.token = item});
      this.form = fb.group({
          username:  ['', Validators.required],
          password:  ['', Validators.required]
      });
  }


    logout(){
       this.arc.logOut();
    }
  onSubmit(value: any) {
    if(! this.arc.login({ name: value.username, pass: value.password })){
        this.error = true;
        //clear form data
      
    }else{
        this.error = false;
    }
  }


}

