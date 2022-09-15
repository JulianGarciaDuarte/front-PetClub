import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isloggedin=false;
  constructor() { }
  login(){
    this.isloggedin=true;
  }
  logout(){
    this.isloggedin=false;  
  }
  islogged(){
    return this.isloggedin;
  }
}
