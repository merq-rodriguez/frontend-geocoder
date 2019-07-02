import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { IExercise } from 'src/app/@core/data/exercise.data';
import { Router, ActivatedRoute } from '@angular/router';
import { AnswerExerciseService } from 'src/app/@core/services/answer-exercise.service';




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

  public getRoutesItem(){
    return ROUTES; 
  }

  constructor(
    public dialog: MatDialog,
    private routerActive: ActivatedRoute,
    private router: Router,
    private answerService: AnswerExerciseService
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    let id = this.routerActive.snapshot.params.idExercise;
    console.log("ID PARAMETRO")
    console.log(id)
    this.answerService.getHistoricalExercise(id).subscribe(res => {
      console.log("HISTORICAL EXERCISE")
      console.log(res);
    })
    
  }

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