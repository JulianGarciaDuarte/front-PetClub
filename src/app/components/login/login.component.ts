import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private logger: LoginService){ }

  ngOnInit(): void {
    console.log("hola");
  }
  logIn(){
    this.logger.login();
  }
}
