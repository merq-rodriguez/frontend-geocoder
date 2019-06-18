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
    private snackBar: MatSnackBar,
    private themathicService: ThemathicService
  ) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getFile(file: File){
    this.language.image = file;
  }

  private emptyTextfieldLanguage() {
    return (this.language.name.trim() === '' || this.language.description.trim() === '' ) ? true : false;
  }



  saveLanguage() {
    if (this.emptyTextfieldLanguage()) {
      this.openSnackBar("Existen campos vacios", "Aceptar");
    }
    console.log(this.language)
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
