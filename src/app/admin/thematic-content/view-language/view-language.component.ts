import { Component, OnInit, Input } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ILanguage } from 'src/app/@core/data/language.data';
import { MatDialog } from '@angular/material';
import { ISubthemeDialog, CreateSubthemeDialog } from '../../modal/create-subtheme/create-subtheme.component';
import { ShowSubthemeDialog } from '../../modal/show-subtheme/show-subtheme.component';
import { ISubtheme } from 'src/app/@core/data/subtheme-data';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { ITheme } from 'src/app/@core/data/theme.data';



@Component({
  selector: "app-language",
  templateUrl: "./view-language.component.html",
  styleUrls: ["./view-language.component.css"],
})
export class ViewLanguageComponent implements OnInit {
  
  public subscriberArrayTheme: any;

  public arrayThemes: ITheme[] = [
    {
      id: '1',
      subtitle: 'Temas',
      name: 'Operadores logicos',
      content: 'x',
      description: '',
      image: null,
      subthemes:  [
        {
          id: '1',
          name: 'Nombre del subtheme',
          description: 'Description of the subthemexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxssssssssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          contentEditor: '<h1> Titulo... </h1> <p>Holaxxxxxxxsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>'
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
      ]
    },
    {
      id: '1',
      subtitle: 'Temas',
      name: 'Operadores logicos',
      content: 'x',
      description: '',
      image: null,
      subthemes:  [
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
      ]
    },
   
    {
      id: '1',
      subtitle: 'Temas',
      name: 'Operadores logicos',
      content: 'x',
      description: '',
      image: null,
      subthemes:  [
      
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
      ]
    }
    ]
  
   public language: ILanguage = {
    idLanguage: null,
    name: 'Python',
    description: 'Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en una sintaxis que favorezca un código legible. Se trata de un lenguaje de programación multiparadigma, ya que soporta orientación a objetos, programación imperativa y, en menor medida, ',
    imageSrc: 'https://cdn-images-1.medium.com/max/1600/1*F1oFCwu6_4ork7pWE__IIg.jpeg',
  }
  public showSubtheme: boolean = false;
  public subthemeSelected: ISubtheme = {
    id: '',
    name: '',
    description: '',
    contentEditor: '',
    contentCode: '',
    imageSrc: 'https://www.eff.org/files/banner_library/coder-cat-2.png',
    url_video: '',
  
  }


  constructor() {}

 
  ngOnInit() {}


   

  openDialog(subtheme: ISubtheme): void {
    const _subtheme = Object.assign(this.subthemeSelected, subtheme);
    console.log(_subtheme);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
      );
    }
  }

  public getRoutesItem(){
    console.log(ROUTES_THEMATIC);
     return ROUTES_THEMATIC; 
  }
}


const ROUTES_THEMATIC: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '/admin/thematic-content/menu-language', icon: "school", title: "Menu Lenguajes", class: "", active: true },
  { path: '/admin/thematic-content/language-list', icon: "school", title: "Listado de Lenguajes", class: "", active: true },
  { icon: "", title: "Lenguaje", class: "", active: false },
];