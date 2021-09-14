import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private snotifyService: SnotifyService) { }

  ngOnInit(): void {
    
  }
  mich(){
    this.snotifyService.error('haw wijji ken khidmit');
   // console.log("abs");
 }
}
