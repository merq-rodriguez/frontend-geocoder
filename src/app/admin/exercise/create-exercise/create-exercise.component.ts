import { Judge0Service } from './../../../@core/services/judge0.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from "@angular/core";
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { fuseAnimations } from 'src/app/@theme/animations';
import { IExercise } from 'src/app/@core/data/exercise.data';
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import { LocalstorageService } from 'src/app/@core/services/localstorage.service';
import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';
import { ExerciseService } from 'src/app/@core/services/exercise.service';
import { InfoDialogComponent } from '../../modal/info/info-dialog.component';
import { PayloadJudge0 } from 'src/app/@core/data/payload-judge0';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LatLng } from 'leaflet';
import { AuthService } from 'src/app/@core/services/auth.service';
import { failed, accepted, warning, waiting, processing, internalError }  from './messages'
import { Observable, Subscription, Subject } from 'rxjs';

export interface LanguageOption {
  id: number;
  name: string;
}

@Component({
  selector: "create-exercise",
  templateUrl: "./create-exercise.component.html",
  styleUrls: ["./create-exercise.component.css"],
  animations: fuseAnimations
})





export class CreateExerciseComponent implements OnInit {

  selectedLanguage: number;
  languages: LanguageOption[] = [];


  user: any;
  subscribeMonaco$: any;
  subscribeEditorHTML$: any;
  exerciseList: IExercise[] = []
  token: string;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  fourFormGroup: FormGroup;


  public exercise: IExercise = {
    contentEditor: '',
    contentCode: '',
    description: '',
    idExercise: null,
    idUser: null,
    name: '',
    input: '',
    output: '',
    image: null,
    location: {
      latitude: 0,
      longitude: 0
    },
    radius: 0
  };




  constructor(
    private _formBuilder: FormBuilder,
    private snackService: SnackBarService,
    private exerciseService: ExerciseService,
    private monacoService: MonacoService,
    private editorService: ContentEditorService,
    private authService: AuthService,
    public dialog: MatDialog,
    private judgle0Service: Judge0Service
  ) { }

  ngOnInit() {
    this.subscriptionToken();
    this.getAllLanguages();
    this.authService.userObservable$.subscribe(user => this.user = user);
    this.getAllExercises(this.user.idUser);
    this.subscribeMonaco$ = this.monacoService.content$.subscribe(content => this.exercise.contentCode = content);
    this.subscribeEditorHTML$ = this.editorService.content$.subscribe(content => this.exercise.contentEditor = content);
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      descriptionCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({});
    this.threeFormGroup = this._formBuilder.group({
      inputCtrl: ['', Validators.required],
      outputCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      latitudeCtrl: ['', Validators.required],
      longitudeCtrl: ['', Validators.required],
      radiusCtrl: ['', Validators.required]
    });
  }


  subscriptionToken(){
    this.judgle0Service.token$.subscribe(token => this.token = token);
  }

  getCoordinate(e: LatLng) {
    console.log(e);
    this.exercise.location.latitude = e.lat;
    this.exercise.location.longitude = e.lng;
  }

  // Da formato de texto a la barra de radio 
  formatLabel(value: number | null) {

    // this.exercise.radius = 0;
    if (!value) { return 0 }
    if (value >= 1000) { return Math.round(value / 1000) + "k" }
    return value;
  }

  openDialog(data: any): void {
    this.submissionCode();
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


  clearExercise() {
    this.exercise = {
      idExercise: '',
      description: '',
      name: '',
      input: '',
      output: '',
      image: null,
      location: {
        latitude: 0,
        longitude: 0
      },
      radius: 0
    };
    this.monacoService.reset();
    this.editorService.reset();
    console.log("Ejercicio limpiado");
    console.log(this.exercise);

  }

  getAllLanguages(){
    this.judgle0Service.getLanguages().subscribe(res => {
      console.log("RESPONSE LANGUAGES JUDGE")
      console.log(res);
      for (const lang of res) {
      this.languages.push(lang)
        
      }
    })
  }

  getFile(file: File) {
    this.exercise.image = file;
  }

  submissionCode() {
    console.log(this.exercise.contentCode)
    if(this.selectedLanguage){
      if(this.exercise.contentCode.trim() !== ''){
        this.judgle0Service.submission(
          {
            source_code: this.exercise.contentCode,
            language_id: this.selectedLanguage,
            expected_output: this.exercise.output
          } as PayloadJudge0).subscribe(res => {
            // console.log(res)
            if (!res.token) {
              this.openDialog(warning);
            } else {
                this.judgle0Service.setToken(res.token); 
                this.subscriptionToken();
                console.log("Ya hay token: ")
                console.log(this.token);
                this.sleep(2000)
                this.getDetailSubmission();           
            }

            
            
          });
      }else{
        this.snackService.openSnackBar("No has ingresado codigo de programacion", "Aceptar")        
      }
      
    }else{
      this.snackService.openSnackBar("No has seleccionado un lenguage", "Aceptar")
    }
  }
   sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
     if ((new Date().getTime() - start) > milliseconds) {
      break;
     }
    }
   }

  getDetailSubmission(): void {
    this.judgle0Service.detailSubmission(this.token).subscribe(res => {
      console.log("--------STATUS----------")
      let status = res.status;
      console.log(status);
      if (!status) {
        this.openDialog(waiting);
      }else{

        switch(status.id){
          case 1:
            console.info("Esperando ...") 
            //this.openDialog(waiting);
          break;
          case 2:
              console.info("Procesando ...") 
            //this.openDialog(processing);
          break;
          case 3:
            this.openDialog(accepted);

          break;
          case 4:
            this.openDialog(failed);
          break;
          case 13:
            this.openDialog(internalError);
          break;
          default :
            this.openDialog(failed);

        }
      }
      this.judgle0Service.unsubscribe();
      
     
      }
    );
  }

  createExercise(exercise: IExercise) {
    console.log(exercise)
    this.exerciseService.createExercise(exercise).subscribe(res => {
      console.log("Response add exercise")
      console.log(res);

      if (res['result']) {
        exercise.idExercise = res['result'].idExercise;
        exercise.idCode = res['result'].idCode;
        exercise.imageSrc = res['result'].image;
        this.exerciseList.push(exercise);
        this.clearExercise();
        this.snackService.openSnackBar('¡Has agregado un nuevo ejercicio!', 'Aceptar');
        console.log(this.exerciseList)
      } else {
        this.snackService.openSnackBar('¡Ocurrio un problema al guardar el ejercicio!', 'Aceptar');
      }
    })
  }


  getAllExercises(idUser: number) {
    console.log("idUser: "+ idUser)
    this.exerciseService.getExercises(idUser).subscribe(exersices => {
     
      for (const exer of exersices) {
        console.log(exer);
        this.exerciseList.push({
          idExercise: exer.idexercise,
          name: exer.name,
          description: exer.description,
          input: exer.input,
          output: exer.output,
          idUser: exer.fkuser,
          imageSrc: exer.image
        } as IExercise)
      }

    })
  }

  addExercise() {
    let validate = false;
    if (this.exercise.contentEditor) {

      if (
        this.exercise.contentEditor.trim() === '' ||
        this.exercise.name === '' ||
        this.exercise.description === '',
        this.exercise.output === '') {
        validate = false;
      } else {
        validate = true;
      }
    } else {
      validate = false;
    }

    console.log(this.exercise)

    if (!validate) {
      this.snackService.openSnackBar('Hay campos obligatorios sin completar *', 'De acuerdo');
    } else {

      let exer: IExercise = {
        idExercise: uuid(),
        name: this.exercise.name,
        description: this.exercise.description,
        contentCode: this.exercise.contentCode,
        contentEditor: this.exercise.contentEditor,
        idUser: this.user.idUser,
        input: this.exercise.input,
        output: this.exercise.output,
        image: this.exercise.image,
        location: {
          latitude: this.exercise.location.latitude,
          longitude: this.exercise.location.longitude
        },
        radius: this.exercise.radius
      }
      this.createExercise(exer);
    }

  }

  deleteExercise(idExercise: number) {
    this.exerciseService.deleteExercise(idExercise).subscribe(res => {
      console.log(res)
      if (res.status) {
        if (res.status === 'OK') {
          _.remove(this.exerciseList, (ex) => Number(ex.idExercise) === idExercise); //Eliminamos el ejercicio
          this.snackService.openSnackBar("Has eliminado un ejercicio", "Aceptar");
          console.log(this.exerciseList);
        }
      }
    });
  }

  getAction(e) {
    let exerci: IExercise = e.item;
    console.log(exerci)
    switch (e.action) {
      case 'delete':
        this.deleteExercise(Number(exerci.idExercise));

        break;
      case 'update':
        console.log("Actualizando ejercicio... equisde equisde")

        break;
    }

  }






  public getRoutesItem() {
    return ROUTES_COMPETENCE;
  }

}
const ROUTES_COMPETENCE: RouteInfo[] = [
 /*  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true }, */
  { path: '/admin/exercises/exercise-menu', icon: "school", title: "Menu Ejercicios", class: "", active: true },
  { path: '', icon: "school", title: "Ejercicios", class: "", active: false },
];




