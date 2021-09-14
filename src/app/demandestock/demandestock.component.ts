import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-demandestock',
  templateUrl: './demandestock.component.html',
  styleUrls: ['./demandestock.component.css']
})
export class DemandestockComponent implements OnInit {
  stocks:any={}
stock:any={}

 
  constructor(private auth:AuthenticationService,
    private authservice:AuthenticationService,private router:Router,
    private service : APIService,
    private http : HttpClient) { }

  ngOnInit(): void {
    this.auth.loadToken()
    this.service.getStock().subscribe(
      data => this.stocks=data)
    }
    
    
  superadmin(){
    return  this.auth.isSuperadmin()
   }
  admin(){
    return  this.auth.isAdmin()
   }
   user(){
     return this.auth.isUser()
   }
   Authentificated(){
    return this.auth.isAuthentificated()
  }
  deleteDemande(id:any){
    this.service.deleteDemande(id).subscribe(
      res=>{this.stocks},
      error => console.log(error)
      )
      }
  delete(i:any){
    this.stocks.splice(i,1)
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
  logout(){
    this.auth.logout()
  }
  

}

