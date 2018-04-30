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
FacultyLotA: any =[]; 
CentralParkingLot: any =[]; 
EastEconomy: any =[]; 
ResidentParking: any =[]; 
WestParking: any =[]; 


dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
dtOptions2: DataTables.Settings = {};
dtTrigger2: Subject<any> = new Subject();
dtOptions3: DataTables.Settings = {};
dtTrigger3: Subject<any> = new Subject();
dtOptions4: DataTables.Settings = {};
dtTrigger4: Subject<any> = new Subject();
dtOptions5: DataTables.Settings = {};
dtTrigger5: Subject<any> = new Subject();
dtOptions6: DataTables.Settings = {};
dtTrigger6: Subject<any> = new Subject();
dtOptions7: DataTables.Settings = {};
dtTrigger7: Subject<any> = new Subject();

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

    this.dtOptions2 = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.dataService.LoadDataForCentralDeck().subscribe(result => {
      this.CentralDeck = result;
      this.dtTrigger2.next();
    });
  
  
    this.dtOptions3 = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.dataService.LoadDataForFacultyLotA().subscribe(result => {
      this.FacultyLotA = result;
      this.dtTrigger3.next();
    });
  
    this.dtOptions4 = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.dataService.LoadDataForCentralParkingLot().subscribe(result => {
      this.CentralParkingLot = result;
      this.dtTrigger4.next();
    });
    
    this.dtOptions5 = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.dataService.LoadDataForEastEconomy().subscribe(result => {
      this.EastEconomy = result;
      this.dtTrigger5.next();
    });
  
  
    this.dtOptions6 = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.dataService.LoadDataForResidentParking().subscribe(result => {
      this.ResidentParking = result;
      this.dtTrigger6.next();
    });
  
  
    this.dtOptions7 = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.dataService.LoadDataForWestParking().subscribe(result => {
      this.WestParking = result;
      this.dtTrigger7.next();
    });
  
  
  
  
  
  
  
  
  }

}
