import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PetClub';
  loggedin=true;
  constructor(private logger: LoginService){}

  ngOnInit(){
    console.log(this.loggedin);
    this.loggedin=this.logger.islogged();
  }
  logout(){
    this.logger.logout()
    this.loggedin = this.logger.islogged();
  }
}
