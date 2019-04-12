import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateLanguageComponent } from '../create-language/create-language.component';
import { ILanguage } from 'src/app/@core/data/language.data';
import { ThemeListService } from 'src/app/@core/services/themeList.service';

@Component({
  selector: 'app-thematic',
  templateUrl: './thematic.component.html',
  styleUrls: ['./thematic.component.css']
})
export class ThematicComponent implements OnInit, AfterViewInit  {
  
  @ViewChild(CreateLanguageComponent) childRefCreateLanguage;
  isLinear = false;
  
  private language: ILanguage;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  

  constructor(  
    private _formBuilder: FormBuilder, 
    public themeListService: ThemeListService 
    ) {}

  ngAfterViewInit(){
    this.language = this.childRefCreateLanguage.language;
  }

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
