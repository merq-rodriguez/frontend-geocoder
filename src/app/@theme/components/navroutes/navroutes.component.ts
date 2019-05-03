import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Route } from '@angular/router';


@Component({
  selector: 'app-navroutes',
  templateUrl: './navroutes.component.html',
  styleUrls: ['./navroutes.component.css']
})
export class NavRoutesComponent implements OnInit {
 @Input() itemsRoutes:RouteInfo[] = [];

  constructor() { }

  ngOnInit() {
   
  }


}
 export interface RouteInfo {
  title: string;
  path?: string;
  icon: string;
  class: string;
  active: boolean;
}



