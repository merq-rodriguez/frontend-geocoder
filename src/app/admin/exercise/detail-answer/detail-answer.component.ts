import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MonacoService } from 'src/app/@core/services/monaco.service';




@Component({
  selector: "app-detail-answer",
  templateUrl: "./detail-answer.component.html",
  styleUrls: ["./detail-answer.component.css"]
})
export class DetailAnswerComponent implements OnInit {

  public answer: any = {};
  public calification;
  public observations;
  codigo: string = "xxx cdcdcd"
  ngOnInit() {
   
  }
 
  constructor(
    private route: ActivatedRoute,
    private monacoService: MonacoService
  ) {
    this.route.queryParams.subscribe(params => {
      this.answer = JSON.parse(params["answer-exercise"])
      console.log("EN EL DETALLE RESPUESTA")
      console.log(this.answer)
      this.monacoService.setMonacoContent("HOliiiiii")
  });
  }

  getRoutesItem(){
    return ROUTES;
  }

}

const ROUTES: RouteInfo[] = [
/*   { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true }, */
  { path: '/admin/exercises/menu-exercises', icon: "school", title: "Menu de Ejercicios", class: "", active: true },
  { path: '/admin/exercises/list-exercise', icon: "school", title: "Listado de ejercicios", class: "", active: true },
  { path: '/admin/exercises/answer-exercise', icon: "school", title: "Listado de respuestas", class: "", active: true },
  { icon: "", title: "Respuesta", class: "", active: false },
];