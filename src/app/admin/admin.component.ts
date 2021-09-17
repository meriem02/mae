import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
users:any={};
username:any={}

  constructor( private authservice:AuthenticationService,private router:Router,
    private service : APIService,
    private auth : AuthenticationService,
  
    ) { }

  ngOnInit(): void {
    this.auth.loadToken()
    this.service.getUser().subscribe(
      data => this.users=data
    )
  }
  dropdown() {
    let batt: any = document.querySelector(".rounded-circle");
    let drop: any = document.querySelector(".dropdown-menu dropdown-menu show");

    drop.classList.toggle("active");
    if (batt.classList.contains("dropdown-menu dropdown-menu ")) {
      batt.classList.replace("dropdown-menu dropdown-menu ");
    } else {
      batt.classList.replace( "dropdown-menu dropdown-menu");
    }
  }

  superadmin(){
    return  this.auth.isSuperadmin()
   }
   Authentificated(){
    return this.auth.isAuthentificated()
    
  }
  function(){
    let btn:any = document.querySelector("#btn");
    let sidebar:any = document.querySelector(".sidebar");
    let searchBtn = document.querySelector(".bx-search");


    sidebar.classList.toggle("active");
    if(btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
  admin(){
    return  this.auth.isAdmin()
   }
   user(){
     return this.auth.isUser()
   }
  deleteUser(username:any){
    this.service.deleteUser(username).subscribe(
      res=>{this.users},
      error => console.log(error)
      )
      }
  delete(i:any){
    this.users.splice(i,1)
  }
  
  
  Search(){
    if (this.username ==''){
      this.ngOnInit();
  
    }else {
      this.users =this.users.filter ((res: { username: string; }) => {
        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
  
   }
   
  logout() {
    this.auth.logout()
  }
}
