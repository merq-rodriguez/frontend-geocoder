import { Component, OnInit, Input } from "@angular/core";
import * as _ from 'lodash';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { MatSnackBar } from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';
import { ILanguage } from 'src/app/@core/data/language.data';
import { ThemeListService } from 'src/app/@core/services/themeList.service';



@Component({
  selector: "app-language",
  templateUrl: "./view-language.component.html",
  styleUrls: ["./view-language.component.css"],
  animations: fuseAnimations
})
export class ViewLanguageComponent implements OnInit {
 
  isLinear = false;
  
  private language: ILanguage;
  //public arrayTheme: ICardTheme[];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  

  constructor(  
    private _formBuilder: FormBuilder, 
    public themeListService: ThemeListService 
    ) {}

 
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  getLanguage(){
    console.log(this.language);
  }

  getThemesArray(){
    //console.log(this.arrayTheme);
    this.themeListService.getListTheme().subscribe(res => {
      console.log(res)
    })
  }

}
