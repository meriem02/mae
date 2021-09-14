import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private http:HttpClient,
    private auth : AuthenticationService
  ) { }



accepterdemande(){
  
}
  getUser(){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
     return this.http.get('http://localhost:8080/Users',{headers:header})
  }
 
  updateUser(username:any,user:any){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
   return this.http.put('http://localhost:8080/update/'+username,user,{headers:header})
  }

  addUser(user:any){
    return this.http.post('http://localhost:8080/register',user)
  }
  adddemandeadmin(demandeadmin:any){
    return this.http.post('http://localhost:8080/a',demandeadmin)
  }


  deleteUser(user:any){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.delete('http://localhost:8080/delete/'+user,{headers:header})
  }
  deleteDemande(user:any){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.delete('http://localhost:8080/deleted'+user,{headers:header})
  }

  userDetails(username:any){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.get('http://localhost:8080/User/'+username,{headers:header})
  }


  //crud servor
  getEquipe(){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.get('http://localhost:8080/equipe',{headers:header})
  }
  getDemande(){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.get('http://localhost:8080/demanded',{headers:header})
  }
  getStock(){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.get('http://localhost:8080/stock',{headers:header})
  }
  getDemandeadmin(){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.get('http://localhost:8080/demandead',{headers:header})
  }
  demandeid(id: any){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.get('http://localhost:8080/demande/'+ id,{headers:header})

  }
  getHistorique(){
    let header=new HttpHeaders({'authorization':'Bearer '+this.auth.jwt});
    return this.http.get('http://localhost:8080/historique',{headers:header})
  }
  updateServor(id:any,user:any){

   return this.http.put('http://localhost:8090/servor/'+id,user)
  }

  addDemande(user:any){
    return this.http.post('http://localhost:8080/add',user)
  }
  ajouterHistorique(user:any){
    return this.http.post('http://localhost:8080/ajouter',user)
  }


  deleteServor(id:any){

    return this.http.delete('http://localhost:8090/servor/'+id)
  }

  servorDetails(id:any){

    return this.http.get('http://localhost:8090/servor/'+id)
  }
//crud servor
getRack(){
  return this.http.get('http://localhost:8090/rack')
}
updateRack(id:any,user:any){

 return this.http.put('http://localhost:8090/rack/'+id,user)
}

addRack(user:any){
  return this.http.post('http://localhost:8090/rack',user)
}


deleteRack(id:any){

  return this.http.delete('http://localhost:8090/rack/'+id)
}

rackDetails(id:any){

  return this.http.get('http://localhost:8090/rack/'+id)
}
//CRUD fournisseur
getFour(){
  return this.http.get('http://localhost:8090/support')
}
updateFour(id:any,user:any){

 return this.http.put('http://localhost:8090/support/'+id,user)
}

addFour(user:any){
  return this.http.post('http://localhost:8090/support',user)
}


deleteFour(id:any){

  return this.http.delete('http://localhost:8090/support/'+id)
}

FourDetails(id:any){

  return this.http.get('http://localhost:8090/support/'+id)
}

//CRUD router

getRouter(){
  return this.http.get('http://localhost:8090/router')
}
updateRouter(id:any,user:any){

 return this.http.put('http://localhost:8090/router/'+id,user)
}

addRouter(user:any){
  return this.http.post('http://localhost:8090/router',user)
}


deleteRouter(id:any){

  return this.http.delete('http://localhost:8090/router/'+id)
}
addAdmin(de:any){
  return this.http.post('http://localhost:8080/a',de)
}
RouterDetails(id:any){

  return this.http.get('http://localhost:8090/router/'+id)
}

// crud switch

getSwitch(){
  return this.http.get('http://localhost:8090/switch')
}
updateSwitch(id:any,user:any){

 return this.http.put('http://localhost:8090/switch/'+id,user)
}

addSwitch(user:any){
  return this.http.post('http://localhost:8090/switch',user)
}


deleteSwitch(id:any){

  return this.http.delete('http://localhost:8090/switch/'+id)
}

SwitchDetails(id:any){

  return this.http.get('http://localhost:8090/switch/'+id)
}
// crud firewalls

getFirewalls(){
  return this.http.get('http://localhost:8090/firewalls')
}
updateFirewalls(id:any,user:any){

 return this.http.put('http://localhost:8090/firewalls/'+id,user)
}

addFirewalls(user:any){
  return this.http.post('http://localhost:8090/firewalls',user)
}


deleteFirewalls(id:any){

  return this.http.delete('http://localhost:8090/firewalls/'+id)
}

FirewallsDetails(id:any){

  return this.http.get('http://localhost:8090/firewalls/'+id)
}

//CRUD POD

getpod(){
  return this.http.get('http://localhost:8090/pod')
}
updatepod(id:any,user:any){

 return this.http.put('http://localhost:8090/pod/'+id,user)
}

addpod(user:any){
  return this.http.post('http://localhost:8090/pod',user)
}


deletepod(id:any){

  return this.http.delete('http://localhost:8090/pod/'+id)
}

podDetails(id:any){

  return this.http.get('http://localhost:8090/pod/'+id)
}


}
