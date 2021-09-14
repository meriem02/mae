import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  jwt:any={};
  username:any={};
  roles:any={};

  constructor(private http:HttpClient , private route : Router) { }
  onlog(data:any){
    return this.http.post("http://localhost:8080/login",data,{observe:"response"})
  }
  saveToken(jwt:any){
localStorage.setItem("token",jwt);
this.jwt=jwt;
this.parseJWT();

  }
  parseJWT(){
    let jwthelper=new JwtHelperService();
    let objJWT=jwthelper.decodeToken(this.jwt)
    this.username=objJWT.obj;
    this.roles=objJWT.roles;
  }
  isSuperadmin(){
    return this.roles.indexOf('SUPERUSER')>=0;

  }
  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;

  }
  isUser(){
    return this.roles.indexOf('USER')>=0;

  }
  isAuthentificated(){
    return this.roles && (this.isAdmin() || this.isUser());
  }
  loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }
  logout(){
  localStorage.removeItem("token");
  this.jwt=undefined;
  this.username=undefined;
  this.roles=undefined;
  this.route.navigateByUrl("/login");
  }
}
