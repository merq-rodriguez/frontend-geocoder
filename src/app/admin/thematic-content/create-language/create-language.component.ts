import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as _ from 'lodash';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { v4 as uuid } from 'uuid';
import { MatSnackBar } from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';
import { ILanguage } from 'src/app/@core/data/language.data';
import { ThemathicService } from 'src/app/@core/services/themathic.service';
import { environment } from 'src/environments/environment';
import { LanguageService } from 'src/app/@core/services/language.service';
import { isNull } from 'util';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';



@Component({
  selector: "app-create-language",
  templateUrl: "./create-language.component.html",
  styleUrls: ["./create-language.component.css"],
  animations: fuseAnimations
})
export class CreateLanguageComponent implements OnInit {
  
  


  isUpdated: boolean = false;
  firstFormGroup: FormGroup;
  image: string = "";

  public language: ILanguage = null;
  constructor( 
    private _formBuilder: FormBuilder, 
    private themathicService: ThemathicService,
    private languageService: LanguageService,
    private snackService: SnackBarService 
  ) {}

 

  getFile(file: File){
    this.language.image = file;
  }

  private emptyTextfieldLanguage() {
    return (
      this.language.name.trim() === '' || 
      this.language.description.trim() === '' ) ? true : false;
  }

  createLanguage(){
    console.log("Create language");
    console.log(this.language);
    this.languageService.createLanguage(this.language).subscribe(res => {
      if(res['result']){
        this.snackService.openSnackBar("Has guardado tu lenguaje","Aceptar")
        console.log(res['result']);
        this.language.idLanguage = res['result'].id;
        this.language.imageSrc   = res['result'].image;
      }else{
        this.snackService.openSnackBar("Hubo un problema guardando el lenguaje","Aceptar")
      }
    })
  }

  saveLanguage(){ // Si el id del lenguaje es diferente de null, quiere decir que ya se guardo en base de datos, de lo contrario seria nulo
    if (this.emptyTextfieldLanguage()) {
      this.snackService.openSnackBar("Aun existen campos vacios","Aceptar")
    }else{
      if(!isNull(this.language.idLanguage)){
        this.updateLanguage();
      }else{
        this.createLanguage();
      } 
    }
  }

  

 //Guardamos los cambios despues de que se ha creado (el usuario aun no ha terminado de ingresar todo el contneido tematico)
 updateLanguage(){
  console.log("Update language")
  this.languageService.updateLanguage(this.language).subscribe(res => {
    if(res['result']){
      this.language.imageSrc = res['result'].image;
      this.snackService.openSnackBar("Has modificado tu lenguaje","Aceptar");
    }else{
      this.snackService.openSnackBar("Hubo un problema actualizando el lenguaje","Aceptar")
    }

    console.log(res);
  })
}

  ngOnInit() {
    //Asociamos la variable lenguage con el lenguage del servicio: (thematicLanguage)
    // En este servicio se gestionaran las cosas
    this.themathicService.getLanguage().subscribe(language => this.language = language);

    this.firstFormGroup = this._formBuilder.group({
      nameLanguageCtrl: [this.language.name, Validators.required],
      descriptionLanguageCtrl: [this.language.description, Validators.required],
      imageLanguageCtrl: ['', Validators.required],
      imageFakeLanguageCtrl: new FormControl(
        {
            value: this.language.image, disabled: true
        }, [Validators.required])
    });


  }
}
