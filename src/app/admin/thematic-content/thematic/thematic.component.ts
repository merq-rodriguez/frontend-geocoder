import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import { CreateLanguageComponent } from '../create-language/create-language.component';
import { ILanguage } from 'src/app/@core/data/language.data';
import { ICardTheme } from 'src/app/@theme/components/card/ICard.interface';
import { ThemeComponent } from '../theme/theme.component';

@Component({
  selector: 'app-thematic',
  templateUrl: './thematic.component.html',
  styleUrls: ['./thematic.component.css']
})
export class ThematicComponent implements OnInit, AfterViewInit  {
  
  @ViewChild(CreateLanguageComponent) childRefCreateLanguage;
  @ViewChild(ThemeComponent) childRefThemeComponent;
  isLinear = false;
  
  private language: ILanguage;
  private arrayTheme: ICardTheme[];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngAfterViewInit(){
    this.language = this.childRefCreateLanguage.language;
    this.arrayTheme = this.childRefThemeComponent.arrayTheme;
  }


  getLanguage(){
    console.log(this.language);
  }

  getThemesArray(){
    console.log(this.arrayTheme);
    
  }

  

  constructor(  private _formBuilder: FormBuilder ) {}

  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
