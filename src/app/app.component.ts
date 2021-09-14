import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stagemae';
  constructor(
    private authservice:AuthenticationService
  ){}
  ngOnInit():void{
    this.authservice.loadToken();
  }
  isAdmin(){
    return this.authservice.isAdmin();
  }
  isUser(){
    return this.authservice.isUser();
  }
  isAuthenticated(){
    return this.authservice.isAuthentificated();
  }
}
