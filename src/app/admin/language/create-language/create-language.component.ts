import { Component, OnInit } from "@angular/core";

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { ILanguage } from 'src/app/@core/entities/language.interface';
import { ITheme } from 'src/app/@core/entities/theme.interface';
import { v4 as uuid } from 'uuid';
import {MatSnackBar} from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';



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
  
  public arrayTheme: ITheme[] = []
  
  public newTheme: ITheme = {
    id: '',
    name: '',
    content: '',
    description: '',
    image: ''
  };

  public language: ILanguage = {
    id: '',
    name: '',
    description: '',
    image: '',
  }
  constructor(private _formBuilder: FormBuilder, private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
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
  }


  theme = {
    name : 'Tipos de funciones',
    description: 'Estudio de Funciones: Función. FUNCIÓN: En matemáticas, una función f es una relación entre un conjunto dado X (el dominio) y otro conjunto de elementos Y (el codominio) de forma que a cada elemento x del dominio le corresponde un único elemento del codominio f(x).',
    image: '../../../../assets/img/funciones-en-python-t1.jpg',
    subtitle: ''
  }

  addTheme(){
    console.log(this.newTheme)
    if(this.emptyTextfieldTheme()){
      this.openSnackBar("Existen campos vacios","Aceptar")
    }else{
      let _theme: ITheme = {
        id: uuid(),
        name: this.newTheme.name,
        description: this.newTheme.description,
        image: this.newTheme.image
      }
      this.arrayTheme.push(_theme);
      this.openSnackBar("Has creado un nuevo tema","Aceptar");
      this.clearTheme();
      console.log(this.arrayTheme)
    }
    
  }

  getLanguage(){
    if(this.emptyTextfieldLanguage()){
      this.openSnackBar("Existen campos vacios","Aceptar");
    }
    console.log(this.language)
  }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      nameLanguageCtrl:         [this.language.name, Validators.required],
      descriptionLanguageCtrl:  [this.language.description, Validators.required],
      imageLanguageCtrl:        ['', Validators.required],
      imageFakeLanguageCtrl: new FormControl({  value: this.language.image,  disabled: true},[ Validators.required ]
      )
    });
    
    this.secondFormGroup = this._formBuilder.group({
      nameThemeCtrl: ['', Validators.required],
      descriptionThemeCtrl: ['', Validators.required],
      imageThemeCtrl: ['', Validators.required],
     

    }); 

   
  }
}
