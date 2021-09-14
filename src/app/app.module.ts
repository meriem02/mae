
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SingnupComponent } from './login/singnup/singnup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReparationComponent } from './reparation/reparation.component';
import { AdminComponent } from './admin/admin.component';
import { ProfilComponent } from './profil/profil.component';
import { DemandetraiterComponent } from './demandetraiter/demandetraiter.component';
import { DemandedesinterComponent } from './demandedesinter/demandedesinter.component';
import { HistoriqueComponent } from './historique/historique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipementComponent } from './equipement/equipement.component';
import { DemandeequipeComponent } from './demandeequipe/demandeequipe.component';
import { DemandestockComponent } from './demandestock/demandestock.component';
import { StockComponent } from './stock/stock.component';
import { Chart1Component } from './chart1/chart1.component';
import { ChartsModule } from 'ng2-charts';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { TestComponent } from './test/test.component';
import { NotifComponent } from './notif/notif.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingnupComponent,
    DashboardComponent,
    ReparationComponent,
    AdminComponent,
    ProfilComponent,
    DemandetraiterComponent,
    DemandedesinterComponent,
    HistoriqueComponent,
    EquipementComponent,
    DemandeequipeComponent,
    DemandestockComponent,
    StockComponent,
    Chart1Component,
    TestComponent,
    NotifComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   ChartsModule,
   SnotifyModule
   

  ],
  providers: [ { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]

})
export class AppModule { }
