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

  constructor(
    private snackService: SnackBarService,
    private exerciseService: ExerciseService,
    private monacoService: MonacoService,
    private editorService: ContentEditorService,  
    private localstorageService: LocalstorageService, 
    ) {}

    ngOnInit() {
      let user = this.localstorageService.getLocalstorage('user');
      this.idUser = user.idUser;   
      this.getAllExercises(this.idUser);
      this.subscribeMonaco$ = this.monacoService.content$.subscribe(content => this.exercise.contentCode = content );
      this.subscribeEditorHTML$ = this.editorService.content$.subscribe(content => this.exercise.contentEditor = content );
     
    }

  public exercise: IExercise = {
    contentEditor: '',
    contentCode: '',
    description: '',
    idExercise: null,
    idUser: null,
    name: '',
    input: '',
    output: '',
    image: null
  };


 

 
  clearExercise(){
    this.exercise = {
      idExercise: '',
      description: '',
      name: '',
      input: '',
      output: '',
      image: null
    };
    this.monacoService.reset();
    this.editorService.reset();
    console.log("Ejercicio limpiado");
    console.log(this.exercise);
    
    
    
  }

  getFile(file: File){
    this.exercise.image = file;
  }


  createExercise(exercise: IExercise){
   
    this.exerciseService.createExercise(exercise).subscribe(res => {
      console.log(res);
      
      if(res.createexercise){
        this.exerciseList.push(exercise);
        this.clearExercise();
        this.snackService.openSnackBar('¡Has agregado un nuevo ejercicio!', 'Aceptar');
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
        this.exercise.input === '',
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
        image: this.exercise.image
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