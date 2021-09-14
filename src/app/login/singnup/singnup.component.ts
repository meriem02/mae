import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent implements OnInit {
user:any={}
  constructor(private http : HttpClient,
    private  service : APIService,
    private router : Router,
    private auth :AuthenticationService) { }

  ngOnInit(): void {
  }
  ajouter(){
    console.log(this.user)
    return this.http.post('http://localhost:8080/register',this.user).subscribe()
      }
    
  
  
  }
  
