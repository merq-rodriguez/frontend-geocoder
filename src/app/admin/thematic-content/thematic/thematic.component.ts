import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateLanguageComponent } from '../create-language/create-language.component';
import { ILanguage } from 'src/app/@core/data/language.data';
import { ThemeListService } from 'src/app/@core/services/themeList.service';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { ICardTheme } from 'src/app/@theme/components/card/ICard.interface';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/@core/services/language.service';
import { ThemeService } from 'src/app/@core/services/theme.service';

@Component({
  selector: 'app-thematic',
  templateUrl: './thematic.component.html',
  styleUrls: ['./thematic.component.css']
})
export class ThematicComponent implements OnInit, AfterViewInit  {
  
  @ViewChild(CreateLanguageComponent) childRefCreateLanguage;
  isLinear = false;
  private subscribeTheme: any;
  private language: ILanguage;
  private listThemes: ICardTheme[]
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
//SI NOS COMPLICAMOS MUCHO HACIENDO FORKJOIN MANDAMOS TODO EL HPTA ARRAY CON EL TEMA
// Y QUE EL BACKEND SE ENCARGUE DE TODO
//(DECIDIDO) TODO PAL BACKEND
  constructor(  
    private _formBuilder: FormBuilder, 
    public themeListService: ThemeListService,
    private languageService: LanguageService,
    ) {}

  ngAfterViewInit(){
    this.language = this.childRefCreateLanguage.language;
  }

  ngOnInit() {
    this.getThemesArray();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }



  getThemesArray(){
    this.themeListService.getListTheme().subscribe(themes => {
      this.listThemes = themes;
    })
  }


  saveData(){
    Object.assign(this.language, { themes:  this.listThemes});
    console.log(this.language);
    
    this.languageService.saveLanguageAndThemes(this.language).subscribe(res => console.log(res));
  }

  getData(){
    console.log("================= languaje ================");
    console.log(this.language);
    console.log("================= Lista de temas con subtemas ================");
    console.log(this.listThemes);
    this.saveData()
    
  }

  public getRoutesItem(){
    return ROUTES_THEMATIC; 
  }

}
const ROUTES_THEMATIC: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '/admin/thematic-content/menu-language', icon: "school", title: "Menu Lenguaje", class: "", active: true },
  {  icon: "school", title: "Crear Lenguaje", class: "", active: false },
];