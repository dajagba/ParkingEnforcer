import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Component, ViewEncapsulation, ViewChild, OnInit, ElementRef } from '@angular/core';
import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('acc') accordionComponent: NgbAccordion;
  constructor() { }
toggle(id:string): void {
    this.accordionComponent.toggle(id);
  }
  ngOnInit() {
  }

}
