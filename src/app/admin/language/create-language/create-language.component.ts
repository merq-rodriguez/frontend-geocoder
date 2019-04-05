import { Component, OnInit } from "@angular/core";

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { v4 as uuid } from 'uuid';
import {MatSnackBar} from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';
import { ICardTheme } from 'src/app/@theme/components/card/ICard.interface';
import { ITheme } from 'src/app/@core/data/theme.data';
import { ILanguage } from 'src/app/@core/data/language.data';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';



@Component({
  selector: "app-create-language",
  templateUrl: "./create-language.component.html",
  animations   : fuseAnimations,
  styleUrls: ["./create-language.component.css"]
})
export class CreateLanguageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = true;
  listCoordinates: [] = []
  hiddenTimeEnd = false;
  isLinear = false;
  valueSlider: number = 0;
  
  public arrayTheme: ICardTheme[] = []
  
  public newTheme: ITheme = {
    id: '',
    name: '',
    content: '',
    description: '',
    image: ''
  };

  public language: ILanguage = {
    idLanguage: null,
    name: '',
    description: '',
    image: '',
  }
  constructor(
    private _formBuilder: FormBuilder, 
    private snackBar: MatSnackBar,
    private editorService: ContentEditorService
  ) {
   // this.editorService.setBehaviorContent('Hola');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }



  private emptyTextfieldTheme(){
    return (this.newTheme.name.trim() === '' || this.newTheme.description.trim() === '' || this.newTheme.image === '') ? true : false;
  }
  
  private emptyTextfieldLanguage(){
    return (this.language.name.trim() === '' || this.language.description.trim() === '' || this.language.image === '') ? true : false;
  }

  private clearTheme(){
   this.newTheme = {
      id: '',
      name: '',
      content: '',
      description: '',
      image: ''
    };
    this.editorService.setBehaviorContent('');
  }


  theme = {
    name : 'Tipos de funciones',
    description: 'Estudio de Funciones: Función. FUNCIÓN: En matemáticas, una función f es una relación entre un conjunto dado X (el dominio) y otro conjunto de elementos Y (el codominio) de forma que a cada elemento x del dominio le corresponde un único elemento del codominio f(x).',
    image: '../../../../assets/img/funciones-en-python-t1.jpg',
    subtitle: ''
  }

  public addTheme(){
    if(this.emptyTextfieldTheme()){
      this.openSnackBar("Existen campos vacios","Aceptar")
    }else{
      this.editorService.getBehaviorContent()
          .subscribe(content => this.newTheme.content = content);
         // .subscribe(content =>  console.log(` Eyyyyyyyy ${content}`));
      let _theme: ICardTheme = {
        id: uuid(),
        name: this.newTheme.name,
        subtitle: 'Tema del lenguaje',
        description: this.newTheme.description,
        content: this.newTheme.content,
        image: '../../../../assets/img/funciones-en-python-t1.jpg'
      //  image: this.newTheme.image
      }
      console.log(_theme);
      this.arrayTheme.push(_theme);
      this.openSnackBar("Has creado un nuevo tema","Aceptar");
      this.clearTheme();
      console.log(this.arrayTheme)
     // this.editorService.setBehaviorView()
    }
    
  }
saveThemes(){
 
}

  saveLanguage(){
    if(this.emptyTextfieldLanguage()){
      this.openSnackBar("Existen campos vacios","Aceptar");
    }
    console.log(this.language)
  }

  ngOnDestroy(){
   
  }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      nameLanguageCtrl:         [this.language.name, Validators.required],
      descriptionLanguageCtrl:  [this.language.description, Validators.required],
      imageLanguageCtrl:        ['', Validators.required],
      imageFakeLanguageCtrl: new FormControl({  value: this.language.image,  disabled: true},[ Validators.required ])
    });
    
    this.secondFormGroup = this._formBuilder.group({
      nameThemeCtrl: ['', Validators.required],
      descriptionThemeCtrl: ['', Validators.required],
      imageThemeCtrl: ['', Validators.required],
      imageFakeThemeCtrl: new FormControl({  value: this.language.image,  disabled: true},[ Validators.required ])

     

    }); 

   
  }
}
