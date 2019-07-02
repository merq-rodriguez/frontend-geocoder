import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { UserService } from 'src/app/@core/services/user.service';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';
import { AnswerExerciseService, IAnswerCalification } from 'src/app/@core/services/answer-exercise.service';

export interface Option {
  id: number;
  name: string;
}


@Component({
  selector: "app-detail-answer",
  templateUrl: "./detail-answer.component.html",
  styleUrls: ["./detail-answer.component.css"]
})
export class DetailAnswerComponent implements OnInit {

  public answer: any = {};
  public calification = 0;
  public observations = "";
  selected: Option = null;
  public options:Option[] = [
    {
      id: 1,
      name: "Respuesta correcta"
    },
    {
      id: 2,
      name: "Respuesta incorrecta"
    }
  ]


  ngOnInit() {
   
  }
 
  saveCalificacion(){
    if(!this.selected){
      this.snackService.openSnackBar("No has especificado si la respuesta es correcta", "Aceptar");      
    }else{
      let solved = (this.selected.id === 1) ? true : false;

      let calification: IAnswerCalification = {
        idAnswer: this.answer.idrecordexercise,
        idScore: this.answer.idScore,
        observation: this.observations,
        points: this.calification,
        solved: solved
      }

      this.answerService.sendCalificationAnswer(calification).subscribe( res => {
        console.log(res)
        if(res){
          if(!res.status){
            this.snackService.openSnackBar("Ocurrio un problema guardando la calificacion", "Aceptar");
          }else{
            this.answer.points = this.answer.points + this.calification;
            this.snackService.openSnackBar("Has guardado la calificacion", "Aceptar");
          }
        }
      })

    }
   
  }

  

  constructor(
    private route: ActivatedRoute,
    private monacoService: MonacoService,
    private userService: UserService,
    private snackService: SnackBarService,
    private answerService: AnswerExerciseService
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
 /*  { path: '/admin/exercises/answer-exercise', icon: "school", title: "Listado de respuestas", class: "", active: true }, */
  { icon: "", title: "Respuesta", class: "", active: false },
];