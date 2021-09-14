import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stock:any={}
  constructor(
    private http : HttpClient,
    private  service : APIService,
    private router : Router,
    private auth :AuthenticationService

    ) { }
  

  ngOnInit(): void {
  }
  ajouter(){
    console.log(this.stock)
    return this.http.post('http://localhost:8080/d',this.stock).subscribe()
    

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

