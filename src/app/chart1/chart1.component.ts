import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { APIService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[]=[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[]=[];
  demandes:any={};
  equipements:any={}
   materiellist:any[]=[];
   quantitelist:any[]=[];
  constructor(private auth:AuthenticationService,
    private authservice:AuthenticationService,private router:Router,
    private service : APIService,
    private http : HttpClient) {
  }
  doughnutChartLabels: Label[] =[];
  doughnutChartData: MultiDataSet = [];
 
  doughnutChartType: ChartType = 'doughnut';
  ngOnInit():void {
    try {
      this.auth.loadToken()
      this.service.getDemande().subscribe(
        data =>{this.demandes=data;
          console.log(data);
          let startDateArry: any[] = [];
          let listdemande: any[] = [];
      
          let blinkArry: any[] = [];
          let index:number=0;
          let listdate:any[]=[];
          let listdem:any[]=[];
          this.demandes.forEach((d: any) => {
            listdate.push(d.Date);
            listdem.push(1);
            // if(listdemande[0]==null){
            //   listdemande[0]['date']=d.date;
            //   listdemande[0]['count']=1;
            // }
            // else if(listdemande[index]['date'] ==d.date){
            //   listdemande[index]['count']++;
      
            // }
            // else{
            //   listdemande[index+1]['date']=d.date;
            //   listdemande[index+1]['count']=1;
            //   index++;
            // }
          });
      
          for (var i = 0; i < 7; i++) {
            blinkArry.push(Math.round(Math.random() * 100));
            startDateArry.push(Math.round(Math.random() * 100));
         }
        
          this.barChartData = [{ data: listdem, label: 'blinks' }];
      
          this.barChartLabels = [listdate];
          // console.log('this is the issue!', this.barChartLabels);
      
          /* SOLUTION */
          this.barChartLabels = startDateArry;
          // console.log('this is the fix!!!', this.barChartLabels);
        } )
    } catch (error) {
      console.log(error);
    }
    
    this.service.getEquipe().subscribe(
      data => {this.equipements=data;
      this.equipements.forEach((element :any) => {
       this.materiellist.push(element.materiel);
        this.quantitelist.push(element.quantite);
       this.doughnutChartLabels=this.materiellist;
       this.doughnutChartData = [this.quantitelist];
      });
      })
   
  }
}
