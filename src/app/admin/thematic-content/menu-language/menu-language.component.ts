import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';


@Component({
  selector: "app-language-menu",
  templateUrl: "./menu-language.component.html",
  styleUrls: ["./menu-language.component.css"]
})
export class LanguageMenuComponent implements OnInit {


  constructor() { }
  
  ngOnInit() {}

  public getRoutesItem(){
    return ROUTES_MENU_LANGUAGE; 
  }
}

const ROUTES_MENU_LANGUAGE: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '/admin/thematic-content/menu-language', icon: "school", title: "Menu Lenguaje", class: "", active: false },
];