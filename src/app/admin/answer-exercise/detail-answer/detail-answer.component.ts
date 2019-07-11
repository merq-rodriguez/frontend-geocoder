import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { UserService } from 'src/app/@core/services/user.service';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';
import { AnswerExerciseService, IAnswerCalification } from 'src/app/@core/services/answer-exercise.service';
import { ExerciseService } from 'src/app/@core/services/exercise.service';
import { ICode } from 'src/app/@core/data/code.data';
import { AuthService } from 'src/app/@core/services/auth.service';

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

  user: any;
  exercise: any;
  code:string = '';
  ngOnInit() {
   
  }
 


  

  constructor(
    private route: ActivatedRoute,
    private monacoService: MonacoService,
    private snackService: SnackBarService,
    private answerService: AnswerExerciseService,
    private exerciseService: ExerciseService,
    private authService: AuthService
  ) {
  
    this.authService.userObservable$.subscribe(user => {
      this.user = user;
    })

    if(this.route.snapshot.params.idExercise){
      console.log("EN EL DETALLE RESPUESTA")
      let id = this.route.snapshot.params.idExercise;
      this.exerciseService.findExercise(id).subscribe( res => {
        //console.log(res);
        this.exercise = res;
      })
    }
     this.monacoService.content$.subscribe(code => {
        this.code = code;
     })
 
  }


  sendAnswerExercise(){
    console.log(this.code)
    if(this.code.trim() === ''){
      this.snackService.openSnackBar("Debes ingresar codigo antes de enviar","Aceptar")
    }else{
      let answer = { 
        content: this.code, 
        idExercise: this.exercise.idexercise,
        idUser: this.user.idUser
       } as ICode;
        this.answerService.sendAnswerExercise(answer).subscribe(res => {
          console.log("RESPONSE SEND ANSWER EXERCISE");
          if(res){
            if(res.status == 'OK'){
                this.snackService.openSnackBar("Se envio tu respuesta exitosamente","Aceptar")
            }else{
              this.snackService.openSnackBar("Hubo un problema guardando tu respuesta","Aceptar")
            }
          }else{
              this.snackService.openSnackBar("Hubo un problema guardando tu respuesta","Aceptar")
          }
          console.log(res);
        })
    }
  }

  getRoutesItem(){
    return ROUTES;
  }

}

const ROUTES: RouteInfo[] = [
/*   { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true }, */
   { path: '/admin/answer-exercises/exercise-favorite', icon: "school", title: "Atras", class: "", active: true }, 
 /*  { icon: "", title: "Respuesta", class: "", active: false }, */
];