import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-demandedesinter',
  templateUrl: './demandedesinter.component.html',
  styleUrls: ['./demandedesinter.component.css']
})
export class DemandedesinterComponent implements OnInit {
demandes:any={}
nom:any={}
demande:any={}
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
    this.service.getDemande().subscribe(
      data => this.demandes=data)
      this.service.getUser().subscribe(
        data => {this.userlist=data
          this.userlist.forEach((u: any) => {
            let roles ={};
            u.roles.forEach((role: any) => {
              if(role.id==2 ||role.id==8 ||role.id==9){
               this.adminlist.push(u);
              }
            });
          });
        })
       
    }
    updateAdmin(e:any){
      this.selectedAdmin = e.target.value
    }
  selectedAdmin = "----"
    Isactive(){
      this.demande.etat=true;
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
      res=>{this.demandes},
      error => console.log(error)
      )
      }
  delete(i:any){
    this.demandes.splice(i,1)
  }
  valider(id:any){
    let d:any
   this.demandes.forEach((dem:any) => {
     if(dem.id==id){
       d=dem
     }
   });
   this.demandeadmin['admin']=this.selectedAdmin
   this.demandeadmin['superadmin']=d.nom
   this.demandeadmin['iddemande']=d.id
   this.demandeadmin['dat']=d.date
   this.demandeadmin['rec']=d.reclamation
   this.demandeadmin['direction']=d.direction
  console.log(this.demandes)
    console.log(this.demandeadmin)
    return this.http.post('http://localhost:8080/a',this.demandeadmin).subscribe()
      }
  getAdminUsers(){
  this.userlist.forEach((u: any) => {
    let roles ={};
    u.roles.forEach((role: any) => {
      if(role.id==2 ||role.id==8 ||role.id==9){
       this.adminlist.push(u);
      }
    });
  });
    console.log(this.adminlist);
  }
  demandedetaill(id: any){
    this.router.navigate(['affectation',id])
    }
  onchange()
  {
    console.log(this.demandes);
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
