import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  demandes:any={}
  constructor(private auth:AuthenticationService,
    private authservice:AuthenticationService,private router:Router,
    private service : APIService,) { }


  ngOnInit(): void {
    this.auth.loadToken()
    this.service.getDemande().subscribe(
      data => this.demandes=data)
    
    
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