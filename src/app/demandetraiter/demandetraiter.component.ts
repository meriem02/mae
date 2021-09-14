import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-demandetraiter',
  templateUrl: './demandetraiter.component.html',
  styleUrls: ['./demandetraiter.component.css']
})
export class DemandetraiterComponent implements OnInit {
demandeadmins:any={}
  constructor(
    private authservice:AuthenticationService,private router:Router,
    private service : APIService,
    private auth:AuthenticationService
  ) { }


  ngOnInit(): void {
    this.auth.loadToken()
    this.service.getDemandeadmin().subscribe(
      data => this.demandeadmins=data)
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
