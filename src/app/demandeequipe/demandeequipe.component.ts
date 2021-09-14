import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-demandeequipe',
  templateUrl: './demandeequipe.component.html',
  styleUrls: ['./demandeequipe.component.css']
})
export class DemandeequipeComponent implements OnInit {
  equipements:any={}
nom:any={}
equipement:any={}
de:any={}
userlist:any={}
demandeadmin:any={}
 adminlist: any[]=[]
 
  constructor(private auth:AuthenticationService,
    private authservice:AuthenticationService,private router:Router,
    private service : APIService,
    private http : HttpClient) { }

  ngOnInit(): void {
    this.auth.loadToken()
    this.service.getEquipe().subscribe(
      data => this.equipements=data)
       
    }
    updateAdmin(e:any){
      this.selectedAdmin = e.target.value
    }
  selectedAdmin = "----"
    Isactive(){
      this.equipement.etat=true;
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
  deletedemande(id:any){
    this.service.deleteUser(id).subscribe(
      res=>{this.equipements},
      error => console.log(error)
      )
      }
  delete(i:any){
    this.equipements.splice(i,1)
  }
  
  onchange()
  {
    console.log(this.equipements);
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
