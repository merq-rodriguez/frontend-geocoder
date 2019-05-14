import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { ICardMenu } from 'src/app/@theme/components/card-menu/card-menu.component';




@Component({
  selector: "app-competence-menu",
  templateUrl: "./competence.component.html",
  styleUrls: ["./competence.component.css"]
})
export class CompetenceMenuComponent implements OnInit {

  menuArray: ICardMenu[] = [
    {
      name: 'Crear una competencia',
      subtitle: 'Competencias',
      image: '../../../../../assets/img/compe.png',
      description: '¡Animate! entra aqui y crea una competencia.',
      routeLink: '/admin/competences/create-competence'
    },
    {
      name: 'Ver todos los competencias',
      subtitle: 'Competencias',
      description: ' Entra aqui si quieres ver todos los competencias.',
      image: '../../../../../assets/img/mundo.png',
      routeLink: '/admin/competences/competence-list'
    },
    {
      name: 'Estadisticas',
      subtitle: 'Lenguajes',
      description: 'Crea un lenguaje de programacion.',
      image: '../../../../assets/img/compe2.png',
      routeLink: ''
    }
  ];
  

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