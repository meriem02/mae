import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(
    private auth:AuthenticationService
  ) { }


  ngOnInit(): void {
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
    } 
    else {
      btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
  dropdown(){
    let batt:any = document.querySelector(".rounded-circle");
    let drop:any = document.querySelector(".dropdown-menu dropdown-menu show");
    


    drop.classList.toggle("");
    if(batt.classList.contains("dropdown-menu dropdown-menu show")) {
        batt.classList.replace("dropdown-menu dropdown-menu show", "rounded-circle");
    } else {
        batt.classList.replace("rounded-circle", "dropdown-menu dropdown-menu show");
    }
  }
  logout(){
    this.auth.logout()
  }
  
}

