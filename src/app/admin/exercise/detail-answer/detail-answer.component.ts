import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { UserService } from 'src/app/@core/services/user.service';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';
import { AnswerExerciseService, IAnswerCalification } from 'src/app/@core/services/answer-exercise.service';
import { ThemathicService } from 'src/app/@core/services/themathic.service';
import { MonacoFile } from 'ngx-monaco';

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
  selected: Option = {
    id: 2,
    name: ""
  };
  selectedPoints: Option = null;
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
 code: string;
  public options_points:Option[] = [
    { id: 1,  name: "10"  },
    { id: 2,  name: "20"  },
    { id: 3,  name: "30"  },
    { id: 4,  name: "40"  },
    { id: 5,  name: "50"  },
    { id: 6,  name: "60"  },
    { id: 7,  name: "70"  },
    { id: 8,  name: "80"  },
    { id: 9,  name: "90"  },
    { id: 10, name: "100" },
  ]

  ngOnInit() {
   this.monacoService.content$.subscribe(res => {
     this.code = res;
   })
   this.monacoService.setMonacoFile({
      uri: "index.js",
      language: "javascript",
      content: `${this.answer.content}`
   }as MonacoFile)
   
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
        points: Number(this.selected.name),
        solved: solved
      }

      this.answerService.sendCalificationAnswer(calification).subscribe( res => {
        console.log(res)
        if(res){
          if(!res.status){
            this.snackService.openSnackBar("Ocurrio un problema guardando la calificacion", "Aceptar");
          }else{
            if(this.selected.id === 1){
              this.answer.points = this.answer.points + Number(this.selectedPoints.name)
              this.userService.addScoreToUser(this.answer.idscore, Number(this.selectedPoints.name)).subscribe( res => {
                console.log(res);
              })

            }
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