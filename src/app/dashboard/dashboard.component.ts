import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Component, ViewEncapsulation, ViewChild, OnInit, ElementRef,AfterViewInit } from '@angular/core';
import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { DataTableDirective } from 'angular-datatables';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
WestDeck: any =[]; 
CentralDeck: any =[]; 
FacultyLotA: any =[]; 
CentralParkingLot: any =[]; 
EastEconomy: any =[]; 
ResidentParking: any =[]; 
WestParking: any =[]; 


dtOptions: any = {};
dtTrigger: Subject<any> = new Subject();
dtOptions2: any = {};
dtTrigger2: Subject<any> = new Subject();
dtOptions3: any = {};
dtTrigger3: Subject<any> = new Subject();
dtOptions4: any = {};
dtTrigger4: Subject<any> = new Subject();
dtOptions5: any = {};
dtTrigger5: Subject<any> = new Subject();
dtOptions6: any = {};
dtTrigger6: Subject<any> = new Subject();
dtOptions7: any = {};
dtTrigger7: Subject<any> = new Subject();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      select: true,
      dom: 'Bfrtip',
      buttons: [
        'colvis',
        'copy',
        'print',

      ],
   
     
    };

    this.dataService.LoadDataForWestDeck().subscribe(result => {
      this.WestDeck = result;
      this.dtTrigger.next();
    });

    this.dtOptions2 = {
      pagingType: 'full_numbers',
      pageLength: 10,
      select: true,
      dom: 'Bfrtip',
      buttons: [
        'colvis',
        'copy',
        'print',

      ],

    };
    this.dataService.LoadDataForCentralDeck().subscribe(result => {
      this.CentralDeck = result;
      this.dtTrigger2.next();
    });
  
  
    this.dtOptions3 = {
      pagingType: 'full_numbers',
      pageLength: 10,
      select: true,
      dom: 'Bfrtip',
      buttons: [
        'colvis',
        'copy',
        'print',

      ],

    };
    this.dataService.LoadDataForFacultyLotA().subscribe(result => {
      this.FacultyLotA = result;
      this.dtTrigger3.next();
    });
  
    this.dtOptions4 = {
      pagingType: 'full_numbers',
      pageLength: 10,
      select: true,
      dom: 'Bfrtip',
      buttons: [
        'colvis',
        'copy',
        'print'

      ],

    };
    this.dataService.LoadDataForCentralParkingLot().subscribe(result => {
      this.CentralParkingLot = result;
      this.dtTrigger4.next();
    });
    
    this.dtOptions5 = {
      pagingType: 'full_numbers',
      pageLength: 10,
      select: true,
      dom: 'Bfrtip',
      buttons: [
        'colvis',
        'copy',
        'print'

      ],

    };
    this.dataService.LoadDataForEastEconomy().subscribe(result => {
      this.EastEconomy = result;
      this.dtTrigger5.next();
    });
  
  
    this.dtOptions6 = {
      pagingType: 'full_numbers',
      pageLength: 10,
      select: true,
      dom: 'Bfrtip',
      buttons: [
        'colvis',
        'copy',
        'print'

      ],

    };
    this.dataService.LoadDataForResidentParking().subscribe(result => {
      this.ResidentParking = result;
      this.dtTrigger6.next();
    });
  
  
    this.dtOptions7 = {
      pagingType: 'full_numbers',
      pageLength: 10,
      select: true, 
      dom: 'Bfrtip',
      buttons: [
        'colvis',
        'copy',
        'print'
        
      ],

    };
    this.dataService.LoadDataForWestParking().subscribe(result => {
      this.WestParking = result;
      this.dtTrigger7.next();
    });
  
  
  
  
  
  
  
  
  }


}
