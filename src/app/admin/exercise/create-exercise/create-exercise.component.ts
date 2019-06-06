import { Judge0Service } from './../../../@core/services/judge0.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
import { Coordinate } from 'src/app/@theme/components/map/map.component';
import { LatLng } from 'leaflet';

@Component({
  selector: "create-exercise",
  templateUrl: "./create-exercise.component.html",
  styleUrls: ["./create-exercise.component.css"],
  animations: fuseAnimations
})
export class CreateExerciseComponent implements OnInit {
  idUser: number;
  subscribeMonaco$: any;
  subscribeEditorHTML$: any;
  exerciseList:IExercise[] = []
  token:string = '';

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
    private localstorageService: LocalstorageService, 
    public dialog: MatDialog,
    private judgle0Service: Judge0Service
    ) {}

    ngOnInit() {
      let user = this.localstorageService.getLocalstorage('user');
      this.idUser = user.idUser;   
      this.getAllExercises(this.idUser);
      this.subscribeMonaco$ = this.monacoService.content$.subscribe(content => this.exercise.contentCode = content );
      this.subscribeEditorHTML$ = this.editorService.content$.subscribe(content => this.exercise.contentEditor = content );
      this.firstFormGroup = this._formBuilder.group({
        nameCtrl: ['', Validators.required],
        descriptionCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        
      });
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

  

  getCoordinate(e : LatLng){
    console.log(e);
    this.exercise.location.latitude = e.lat;
    this.exercise.location.longitude = e.lng;
  }

    // Da formato de texto a la barra de radio 
    formatLabel(value: number | null) {
    
     // this.exercise.radius = 0;
      if (!value) {return 0}
      if (value >= 1000) {return Math.round(value / 1000) + "k"}
      return value;
    }

  openDialog(option: number): void {
    this.submissionCode();
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: '250px',
      data: MESSAGES_DIALOG[option]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

 
  clearExercise(){
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

  getFile(file: File){
    this.exercise.image = file;
  }

  submissionCode(){
    this.judgle0Service.submission(
        { 
          source_code: this.exercise.contentCode,  
          language_id: 30,
          expected_output: this.exercise.output          
        } as PayloadJudge0).subscribe(res => {
         // console.log(res)
          if(!res['token']){
              this.openDialog(3);
          }else{
            this.token = res['token'];
           console.log(this.token); 
           
          }
        });  
  }

  getDetailSubmission():void{
    console.log("--------TOKEN----------")
    console.log(this.token)
    this.judgle0Service.detailSubmission(this.token).subscribe(res => {
      console.log(res);
      console.log("--------STATUS----------")
      let status = res['status'];
      console.log(status);
      if(!status){
        console.log("NO hay status")
        this.openDialog(2);
      }else{
        if(status.id == 3 ){
          console.log("Es aceptado XD")
          this.openDialog(0);
        }else{
          this.openDialog(1);
        }
      }
    });
  }

  createExercise(exercise: IExercise){
    console.log(exercise)
     this.exerciseService.createExercise(exercise).subscribe(res => {
      console.log("Response add exercise")
      console.log(res);
      
      if(res['result']){
        exercise.idExercise   = res['result'].idExercise;
        exercise.idCode       = res['result'].idCode;
        exercise.imageSrc     = res['result'].image;
        this.exerciseList.push(exercise);
        this.clearExercise();
        this.snackService.openSnackBar('¡Has agregado un nuevo ejercicio!', 'Aceptar');
        console.log(this.exerciseList)
      }else{
        this.snackService.openSnackBar('¡Ocurrio un problema al guardar el ejercicio!', 'Aceptar');        
      }
    }) 
  }


  getAllExercises(idUser: number){
    this.exerciseService.getExercises(idUser).subscribe(exersices => {
      console.log(exersices.name);
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

  addExercise(){
    let validate = false;
    if(this.exercise.contentEditor){
      
      if(
        this.exercise.contentEditor.trim() === '' || 
        this.exercise.name === '' ||
        this.exercise.description === '',
        this.exercise.output === ''){
        validate = false;
      }else{
        validate = true;
      }
    }else{
      validate = false;
    }

    console.log(this.exercise)

    if(!validate){
      this.snackService.openSnackBar('Hay campos obligatorios sin completar *', 'De acuerdo');
    }else{
      
      let exer: IExercise = {
        idExercise: uuid(),
        name: this.exercise.name,
        description: this.exercise.description,
        contentCode: this.exercise.contentCode,
        contentEditor: this.exercise.contentEditor,
        idUser: this.idUser,
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
  
  deleteExercise(idExercise: number){
    this.exerciseService.deleteExercise(idExercise).subscribe(res => {
      console.log(res)
      if(res.status){
        if(res.status === 'OK'){
          _.remove(this.exerciseList, (ex) =>  Number(ex.idExercise) === idExercise ); //Eliminamos el ejercicio
          this.snackService.openSnackBar("Has eliminado un ejercicio", "Aceptar");
          console.log(this.exerciseList);
        }
      }
    });
  }

  getAction(e){
    let exerci: IExercise = e.item; 
    console.log(exerci)
    switch(e.action){
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
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '', icon: "school", title: "Ejercicios", class: "", active: false },
];

const MESSAGES_DIALOG = [

  {
    id: 1, 
    title: '¡Compilacion exitosa!',
    message: '', 
    image: "http://localhost:3001/uploads/images/fine.png"
  },
  {
    id: 2, 
    title: '¡Compilacion fallida!',
    message: '', 
    image: "http://localhost:3001/uploads/images/bad.png"
  },
  {
    id: 3, 
    title: '¡El servidor no responde!',
    message: '', 
    image: "http://localhost:3001/uploads/images/alert.png"
  }



]