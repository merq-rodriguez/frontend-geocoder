import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { ICardMenu } from 'src/app/@theme/components/card-menu/card-menu.component';


@Component({
  selector: "app-language-menu",
  templateUrl: "./menu-language.component.html",
  styleUrls: ["./menu-language.component.css"]
})
export class LanguageMenuComponent implements OnInit {

  menuArray: ICardMenu[] = [
    {
      name: 'Crear un lenguaje',
      subtitle: 'Lenguajes',
      image: '../../../../assets/img/Prog.png',
      description: 'Animate y crea un lenguaje de programacion.',
      routeLink: '/admin/thematic-content/create-thematic'
    },
    {
      name: 'Ver todos los lenguajes',
      subtitle: 'Lenguajes',
      description: 'Crea un lenguaje de programacion.',
      image: '../../../../assets/img/Developer-icon.png',
      routeLink: '/admin/thematic-content/language-list'
    },
    {
      name: 'Estadisticas',
      subtitle: 'Lenguajes',
      description: 'Crea un lenguaje de programacion.',
      image: '../../../../assets/img/compe2.png',
      routeLink: '/admin/thematic-content/language-list'
    }
  ];
  
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