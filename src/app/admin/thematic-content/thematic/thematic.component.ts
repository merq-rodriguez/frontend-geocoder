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
import { UserService } from 'src/app/@core/services/user.service';
import { LocalstorageService } from 'src/app/@core/services/localstorage.service';
import { isNumber, isNull } from 'util';

@Component({
  selector: 'app-thematic',
  templateUrl: './thematic.component.html',
  styleUrls: ['./thematic.component.css']
})
export class ThematicComponent implements OnInit, AfterViewInit  {
  
  @ViewChild(CreateLanguageComponent) childRefCreateLanguage;
  isLinear = false;
  private language: ILanguage = {
    name: '',
    description: '',
    idUser: null,
    idLanguage: null,
    image: null,
    imageSrc: ''
  };
  private listThemes: ICardTheme[]
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  

  constructor(  
    private _formBuilder: FormBuilder, 
    public themeListService: ThemeListService,
    private languageService: LanguageService,
    private localService: LocalstorageService
    ) {}

  ngAfterViewInit(){
    this.language = this.childRefCreateLanguage.language;
  }

  //Guardamos los cambios despues de que se ha creado (el usuario aun no ha terminado de ingresar todo el contneido tematico)
  updateLanguage(){
    console.log("Actualizando language")
    this.languageService.updateLanguage(this.language).subscribe(res => {
      console.log(res);

    })
  }

  saveLanguage(){ // Si el id del lenguaje es diferente de null, quiere decir que ya se guardo en base de datos, de lo contrario seria nulo
    if(!isNull(this.language.idLanguage)){
      this.updateLanguage();
    }else{
      this.createLanguage();
    } 
  }

  createLanguage(){
    console.log("Create language")
    let user = this.localService.getLocalstorage('user');
    this.language.idUser = user.idUser;
    console.log(this.language);
    this.languageService.createLanguage(this.language).subscribe(res => {
      console.log(res['language']);
      this.language.idLanguage = res['language'].id;
      this.language.imageSrc = res['language'].image;
    })
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


 /*  saveData(){
    Object.assign(this.language, { themes:  this.listThemes});
    console.log(this.language);
    
    this.languageService.saveLanguageAndThemes(this.language).subscribe(res => console.log(res));
  } */

/*   getData(){
    console.log("================= languaje ================");
    console.log(this.language);
    console.log("================= Lista de temas con subtemas ================");
    console.log(this.listThemes);
    this.saveData()
    
  } */

  public getRoutesItem(){
    return ROUTES_THEMATIC; 
  }

}
const ROUTES_THEMATIC: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '/admin/thematic-content/menu-language', icon: "school", title: "Menu Lenguaje", class: "", active: true },
  {  icon: "school", title: "Crear Lenguaje", class: "", active: false },
];