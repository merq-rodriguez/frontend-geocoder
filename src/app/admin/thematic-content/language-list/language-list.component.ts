import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { log } from "util";
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { LanguageService } from 'src/app/@core/services/language.service';

@Component({
  selector: "app-language-list",
  templateUrl: "./language-list.component.html",
  styleUrls: ["./language-list.component.css"]
})
export class LanguageListComponent implements OnInit {
  public languageList = [];
  constructor(
    private router: Router,
    private languageService: LanguageService  
  ) {
     this.languageService.getLanguages().subscribe(res => {
       this.languageList = res;
     
    });
    
  }
  ngOnInit() {}


  getRouteTheme(id: number) {
    this.router.navigate(["/admin/thematic-content/language", {id: id}]);
  }
  public getRoutesItem(){
    return ROUTES_LANGUAJELIST; 
  }
}

const ROUTES_LANGUAJELIST: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '/admin/thematic-content/menu-language', icon: "school", title: "Menu Lenguaje", class: "", active: true },
  { path: '', icon: "school", title: "Listado de Lenguajes", class: "", active: false },
];