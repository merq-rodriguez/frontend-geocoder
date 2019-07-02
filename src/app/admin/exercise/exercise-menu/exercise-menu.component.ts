import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { ICardMenu } from 'src/app/@theme/components/card-menu/card-menu.component';




@Component({
  selector: "app-exercise-menu",
  templateUrl: "./exercise-menu.component.html",
  styleUrls: ["./exercise-menu.component.css"]
})
export class ExerciseMenuComponent implements OnInit {

  menuArray: ICardMenu[] = [
    {
      name: 'Crear Ejercicios',
      subtitle: 'Ejercicios',
      image: '../../../../../assets/img/compe.png',
      description: '¡Animate! entra aqui y crea una ejercicio.',
      routeLink: '/admin/exercises/create-exercise'
    },
    {
      name: 'Ver todos los ejercicios',
      subtitle: 'Listado de ejercicios',
      description: ' Entra aqui si quieres ver todos los ejercicios.',
      image: '../../../../../assets/img/mundo.png',
      routeLink: '/admin/exercises/list-exercise'
    },
    {
      name: 'Estadisticas',
      subtitle: 'Ekercicios',
      description: 'Crea un lenguaje de programacion.',
      image: '../../../../assets/img/compe2.png',
      routeLink: ''
    }
  ];


  constructor() { }

  public ngOnInit() { }
  public getRoutesItem() {
    return ROUTES_COMPETENCE;
  }

}
const ROUTES_COMPETENCE: RouteInfo[] = [
  /* { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true }, */
  { path: '', icon: "school", title: "Menu Ejercicios", class: "", active: false },
];