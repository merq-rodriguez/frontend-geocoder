import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/@core/services/user.service';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';
import { LocalstorageService } from 'src/app/@core/services/localstorage.service';
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { AnswerExerciseService } from 'src/app/@core/services/answer-exercise.service';
import { ICode } from 'src/app/@core/data/code.data';
import { Judge0Service } from 'src/app/@core/services/judge0.service';
import { PayloadJudge0 } from 'src/app/@core/data/payload-judge0';

@Component({
  selector: 'form-code',
  templateUrl: './form-code.component.html',
  styleUrls: ['./form-code.component.css']
})
export class FormCode implements OnInit {
  hiddenSubmission: boolean = false;
  hiddenStatus: boolean = true;
  //data = (<HTMLInputElement>document.getElementById("data")).value;;
  subscribeMonaco$: any;
  private code: string = '';
  public token;
  answer: ICode = {
    idUser: 29,
    idExercise: 9,
    content: "xxxxxxxxxxxxxxxxxx",
    solved: false
  }

  constructor(
    private monacoService: MonacoService,
    private answerService: AnswerExerciseService,
    private judgeService: Judge0Service,
    private snackService: SnackBarService

  ) { }

  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  sendCode() {
    if (this.isMobileDevice()) {
      let data = (<HTMLInputElement>document.getElementById("data")).value;
      let json = JSON.parse(data);
      this.snackService.openSnackBar(json.idExercise, "Aceptar");
    }
    console.log("Antes de enviar el codigo a api judge0");
    console.log(this.code);
    if (this.code.trim() !== '') {
      try {
        this.judgeService.submission(
          {
            source_code: this.code,
            language_id: 43,
            stdin: '*'
          } as PayloadJudge0)
          .subscribe(res => {
            this.snackService.openSnackBar("Has enviado tu codigo", "Aceptar");

            if (res.token) {
              this.token = res.token;
              this.hiddenSubmission = true;
              this.hiddenStatus = false;
              console.log(this.token)
            }
          })
      } catch (error) {
        console.error(error);
        this.snackService.openSnackBar("Ha un problema (llama a la policia :c)", "Aceptar");

      }
    } else {
      this.snackService.openSnackBar("No has ingresado ningun codigo", "Aceptar");
    }
  }
  // 
  //
  getStatusCode() {
    if (this.token) {
      try {
        this.judgeService.detailSubmission(this.token)
          .subscribe(res => {
            console.log('====================================');
            console.log("        DETALLE ENVIO CODIGO        ");
            console.log('====================================');
            console.log(res.status)
            if (res.status) {
              switch (res.status.id) {
                case 1:
                  this.snackService.openSnackBar("Tu codigo esta en cola", "Aceptar");
                  break;
                case 2:
                  this.snackService.openSnackBar("Tu codigo se esta procesando", "Aceptar");
                  break;
                case 3:
                  this.snackService.openSnackBar("¡Felicidades tu codigo a sido aceptado!", "Aceptar");
                  this.hiddenStatus = true;
                  //aqui deberia redirigir hacia atras
                  break;
                case 4:
                  this.snackService.openSnackBar("¡Tu codigo ha sido rechazado!", "Aceptar");
                  this.hiddenSubmission = false;
                  this.hiddenStatus = true;
                  break;
                case 13:
                  this.snackService.openSnackBar("¡Error interno :( llama a la policia!", "Aceptar");
                  this.hiddenSubmission = false;
                  this.hiddenStatus = false;
                  break;
                default:
                  this.snackService.openSnackBar("¡Tu codigo ha sido rechazado!", "Aceptar");
                  this.hiddenSubmission = false;
                  this.hiddenStatus = true;
              }
            }
            this.token = ''
          })
      } catch (error) {
        console.error(error)
        this.snackService.openSnackBar("A ocurrido un problema inesperado (llama a la policia)", "Aceptar");

      }
    }
  }



  saveCode() {
    this.answerService.sendAnswerExercise(this.answer).subscribe(res => {
      "=========== SAVE CODE ==========="
      console.log(res)
    })
  }

  ngOnInit() {
    this.subscribeMonaco$ = this.monacoService.content$.subscribe(content => this.code = content);
  }







}
