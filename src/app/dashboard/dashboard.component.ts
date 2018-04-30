import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Component, ViewEncapsulation, ViewChild, OnInit, ElementRef } from '@angular/core';
import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

WestDeck: any =[]; 
CentralDeck: any =[]; 
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.dataService.LoadDataForWestDeck().subscribe(result => {
      this.WestDeck = result;
      this.dtTrigger.next();
    });

    this.dataService.LoadDataForCentralDeck().subscribe(result => {
      this.CentralDeck = result;
      this.dtTrigger.next();
    });
  }

}
