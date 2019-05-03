import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';




@Component({
  selector: "app-competence-menu",
  templateUrl: "./competence.component.html",
  styleUrls: ["./competence.component.css"]
})
export class CompetenceMenuComponent implements OnInit {

  constructor() {}

  public ngOnInit(){}
  public getRoutesItem(){
    return ROUTES_COMPETENCE; 
  }

}
const ROUTES_COMPETENCE: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '', icon: "school", title: "Menu Competencias", class: "", active: false },
];