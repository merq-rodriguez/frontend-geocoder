import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { IExercise } from 'src/app/@core/data/exercise.data';
import { Router } from '@angular/router';




@Component({
  selector: "app-answer-exercise",
  templateUrl: "./answer-exercise.component.html",
  styleUrls: ["./answer-exercise.component.css"]
})
export class AnswerExerciseComponent implements OnInit {


  ELEMENT_DATA: ElementAnswerUser[] = [
    {
      idAnswer: 1,
      idUser: null,
      idExercise: null,
      idCode: null,
      names_user: "stringsssssssssssssss",
      level: "string",
      date: "string",
      code: "string",
      solved: "No resuelto",
      state: "Sin revizar"
    
    },
    {
      idAnswer: 2,
      idUser: null,
      idExercise: null,
      idCode: null,
      names_user: "string",
      level: "string",
      date: "string",
      code: "string",
      solved: "No resuelto",
      state: "Sin revizar"
    
    },
    {
      idAnswer: 3,
      idUser: null,
      idExercise: null,
      idCode: null,
      names_user: "stringsssssssss",
      level: "string",
      date: "string",
      code: "string",
      solved: "No resuelto",
      state: "Sin revizar"
    
    }
  ];

  public answerSelected: ElementAnswerUser = null;

  displayedColumns: string[] = ['id','names_user', 'level','date', 'state','solved', 'action'];
  
  dataSource = new MatTableDataSource<ElementAnswerUser>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;



  getDetailAnswer(exer){
    this.answerSelected = exer;
    console.log(this.answerSelected);
    this.router.navigate(['/admin/exercises/detail-answer'])
  }



  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    
  }
    public getRoutesItem(){
      return ROUTES; 
    }
  
  
  
 
  constructor(
    public dialog: MatDialog,
    public router: Router
  ) {}


}

export interface ElementAnswerUser{
  idAnswer: number;
  idUser: number;
  idExercise: number;
  idCode: number;
  names_user: string;
  level: string;
  date: string;
  code: string;
  solved: string;
  state: string;

}


const ROUTES: RouteInfo[] = [
/*   { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true }, */
  { path: '/admin/exercises/menu-exercises', icon: "school", title: "Menu de Ejercicios", class: "", active: true },
  { path: '/admin/exercises/list-exercise', icon: "school", title: "Listado de ejercicios", class: "", active: true },
  { icon: "", title: "Listado de respuestas", class: "", active: false },
];