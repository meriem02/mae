import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ROUTES } from '@angular/router';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {
  public focus: any;
  public listTitles: any[] = [];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() { }
  
  
}
