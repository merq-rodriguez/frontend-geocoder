import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThemathicService } from 'src/app/@core/services/themathic.service';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';

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
    private snackBar: SnackBarService
    ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  //Se termino la guachafita, perdon perdon, quise decir que se termino de crear el lenguaje con los temas y subthemas
  public endGame(){
   /*  this.themathicService.reset(); */
   location.reload();
    this.snackBar.openSnackBar("En hora buena, ¡acabaste de crear un lenguaje tio!","Aceptar")
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