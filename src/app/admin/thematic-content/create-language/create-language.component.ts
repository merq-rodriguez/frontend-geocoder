import { Component, OnInit, Input } from "@angular/core";
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



@Component({
  selector: "app-create-language",
  templateUrl: "./create-language.component.html",
  styleUrls: ["./create-language.component.css"],
  animations: fuseAnimations
})
export class CreateLanguageComponent implements OnInit {
  //@Input() action: string | 'update' | 'view'
  isUpdated: boolean = false;
  firstFormGroup: FormGroup;
  image: string = "";
  public language: ILanguage = {
    idLanguage: null,
    name: '',
    description: '',
    image: '../../../../assets/img/image-default.png',
  }
  constructor( private _formBuilder: FormBuilder, private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }


  private emptyTextfieldLanguage() {
    return (this.language.name.trim() === '' || this.language.description.trim() === '' || this.language.image === '') ? true : false;
  }



  saveLanguage() {
    if (this.emptyTextfieldLanguage()) {
      this.openSnackBar("Existen campos vacios", "Aceptar");
    }
    console.log(this.language)
  }



  ngOnInit() {
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
