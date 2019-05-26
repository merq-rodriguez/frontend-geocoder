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


@Component({
  selector: "create-exercise",
  templateUrl: "./create-exercise.component.html",
  styleUrls: ["./create-exercise.component.css"],
  animations: fuseAnimations
})
export class CreateExerciseComponent implements OnInit {

  subscribeMonaco$: any;
  subscribeEditorHTML$: any;

  constructor(
    private snackService: SnackBarService,
    private monacoService: MonacoService,
    private editorService: ContentEditorService,  
    private localstorageService: LocalstorageService, 
    ) {

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


  exerciseList:IExercise[] = []

  getFile(file: File){
    this.exercise.image = file;
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

    if(!validate){
      this.snackService.openSnackBar('Hay campos obligatorios sin completar *', 'De acuerdo');
    }else{
      
      let exer: IExercise = {
        idExercise: uuid(),
        name: this.exercise.name,
        description: this.exercise.description,
        contentCode: this.exercise.contentCode,
        contentEditor: this.exercise.contentEditor,
        idUser: this.exercise.idUser,
        input: this.exercise.input,
        output: this.exercise.output,
        image: this.exercise.image
      } 
      this.exerciseList.push(exer);
      this.snackService.openSnackBar('¡Han agregado un nuevo ejercicio!', 'Aceptar')
    }
    
  }
  
  getAction(e){
    console.log(e);
    
  }

  ngOnInit() {
    let user = this.localstorageService.getLocalstorage('user');
    this.exercise.idUser = user.idUser;    
    this.subscribeMonaco$ = this.monacoService.content$.subscribe(content => this.exercise.contentCode = content );
    this.subscribeEditorHTML$ = this.editorService.content$.subscribe(content => this.exercise.contentEditor = content );
   
  }
  


  
  public getRoutesItem() {
    return ROUTES_COMPETENCE;
  }

}
const ROUTES_COMPETENCE: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '', icon: "school", title: "Ejercicios", class: "", active: false },
];