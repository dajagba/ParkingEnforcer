import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Component, ViewEncapsulation, ViewChild, OnInit, ElementRef } from '@angular/core';
import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

AllStatus: any =[]; 
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.LoadData().subscribe(result => {
      this.AllStatus = result;
      console.log(this.AllStatus); 
    });
  }

}
