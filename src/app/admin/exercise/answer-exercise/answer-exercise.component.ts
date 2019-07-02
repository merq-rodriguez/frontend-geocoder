import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { IExercise } from 'src/app/@core/data/exercise.data';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AnswerExerciseService } from 'src/app/@core/services/answer-exercise.service';


export interface ElementAnswerUser{
  content: string;
  date_send: string;
  exercise_image: string;
  exercise_name: string;
  idexercise: number;
  idlevel: number;
  idrecordexercise: number
  iduser: number;
  level: string;
  name: string;
  solved: boolean;
  state: string;
  user_nick: string;

}

@Component({
  selector: "app-answer-exercise",
  templateUrl: "./answer-exercise.component.html",
  styleUrls: ["./answer-exercise.component.css"]
})
export class AnswerExerciseComponent implements OnInit {


  ELEMENT_DATA: ElementAnswerUser[] = [];

  public answerSelected: ElementAnswerUser = null;

  displayedColumns: string[] = ['id','names_user', 'level','date', 'state','solved', 'action'];
  
  dataSource = new MatTableDataSource<ElementAnswerUser>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;



  getDetailAnswer(exer){
    console.log("RESPUESTA SELECCIONADA")
    this.answerSelected = exer;
    console.log(this.answerSelected);

    let navigationExtras: NavigationExtras = {
      queryParams: {
          "answer-exercise": JSON.stringify(exer),
      } 
  };
    this.router.navigate(['/admin/exercises/detail-answer'], navigationExtras)
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
      this.ELEMENT_DATA = res;
      this.dataSource = new MatTableDataSource<ElementAnswerUser>(this.ELEMENT_DATA);
    })
    
  }

}




const ROUTES: RouteInfo[] = [
/*   { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true }, */
  { path: '/admin/exercises/menu-exercises', icon: "school", title: "Menu de Ejercicios", class: "", active: true },
  { path: '/admin/exercises/list-exercise', icon: "school", title: "Listado de ejercicios", class: "", active: true },
  { icon: "", title: "Listado de respuestas", class: "", active: false },
];