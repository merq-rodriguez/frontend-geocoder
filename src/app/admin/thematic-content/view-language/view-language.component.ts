import { Component, OnInit, Input } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ILanguage } from 'src/app/@core/data/language.data';
import { ICardTheme } from 'src/app/@theme/components/card/ICard.interface';
import { MatDialog } from '@angular/material';
import { ISubthemeDialog, CreateSubthemeDialog } from '../../modal/create-subtheme/create-subtheme.component';
import { ShowSubthemeDialog } from '../../modal/show-subtheme/show-subtheme.component';
import { ISubtheme } from 'src/app/@core/data/subtheme-data';



@Component({
  selector: "app-language",
  templateUrl: "./view-language.component.html",
  styleUrls: ["./view-language.component.css"],
})
export class ViewLanguageComponent implements OnInit {
  public subscriberArrayTheme: any;
 
  public arrayThemes: ICardTheme[] = [
    {
      id: '1',
      subtitle: 'Temas',
      name: 'Operadores logicos',
      content: 'x',
      description: '',
      image: '',
      subthemes:  [
        {
          idSubtheme: '1',
          name: 'Nombre del subtheme',
          description: 'Description of the subthemexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxssssssssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          contentEditor: '<h1> Titulo... </h1> <p>Holaxxxxxxxsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>'
        },
        {
          idSubtheme: '1',
          name: '',
          description: ''
        },
        {
          idSubtheme: '1',
          name: '',
          description: ''
        },
        {
          idSubtheme: '1',
          name: '',
          description: ''
        },
        {
          idSubtheme: '1',
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
      image: '',
      subthemes:  [
        {
          idSubtheme: '1',
          name: '',
          description: ''
        },
        {
          idSubtheme: '1',
          name: '',
          description: ''
        },
        {
          idSubtheme: '1',
          name: '',
          description: ''
        },
        {
          idSubtheme: '1',
          name: '',
          description: ''
        },
        {
          idSubtheme: '1',
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
      image: '',
      subthemes:  [
      
        {
          idSubtheme: '1',
          name: '',
          description: ''
        },
        {
          idSubtheme: '1',
          name: '',
          description: ''
        },
        {
          idSubtheme: '1',
          name: '',
          description: ''
        },
        {
          idSubtheme: '1',
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
    image: 'https://cdn-images-1.medium.com/max/1600/1*F1oFCwu6_4ork7pWE__IIg.jpeg',
  }
  public showSubtheme: boolean = false;
  public subthemeSelected: ISubtheme = {
    idSubtheme: '',
    name: '',
    description: '',
    contentEditor: '',
    contentCode: '',
    image: 'https://www.eff.org/files/banner_library/coder-cat-2.png',
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



 

}
