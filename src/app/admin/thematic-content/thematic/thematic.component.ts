import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThemathicService } from 'src/app/@core/services/themathic.service';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';

@Component({
  selector: 'app-thematic',
  templateUrl: './thematic.component.html',
  styleUrls: ['./thematic.component.css']
})
export class ThematicComponent implements OnInit {
  
  isLinear = false;
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  

  constructor(  
    private _formBuilder: FormBuilder, 
    public themathicService: ThemathicService,
    ) {}

 

 





  ngOnInit() {
      
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
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