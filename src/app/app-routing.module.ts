import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingnupComponent } from './login/singnup/singnup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReparationComponent } from './reparation/reparation.component';
import { AdminComponent } from './admin/admin.component';
import { DemandetraiterComponent } from './demandetraiter/demandetraiter.component';
import { DemandedesinterComponent } from './demandedesinter/demandedesinter.component';
import { HistoriqueComponent } from './historique/historique.component';
import { EquipementComponent } from './equipement/equipement.component';
import { DemandeequipeComponent } from './demandeequipe/demandeequipe.component';
import { DemandestockComponent } from './demandestock/demandestock.component';
import { StockComponent } from './stock/stock.component';
import { ProfilComponent } from './profil/profil.component';



const routes: Routes = [
{path :"",component:LoginComponent},
{path :"Singup",component:SingnupComponent},
{path:"Dashboard",component:DashboardComponent},
{path:"Reparation",component:ReparationComponent},
{path:"Admin",component:AdminComponent},
{path:"Demandetraiter",component:DemandetraiterComponent},
{path:"Demandedesinter",component:DemandedesinterComponent},
{path:"historique",component:HistoriqueComponent},
{path:"equipement",component:EquipementComponent},
{path:"demandeequipement",component:DemandeequipeComponent},
{path:"demandestock",component:DemandestockComponent},
{path:"stock",component:StockComponent},
{path:"profil",component:ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
