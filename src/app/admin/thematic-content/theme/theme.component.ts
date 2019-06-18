import { Component, OnInit,  } from "@angular/core";
import * as _ from 'lodash';

import { v4 as uuid } from 'uuid';
import { MatSnackBar } from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';
import { ITheme } from 'src/app/@core/data/theme.data';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import { ThemathicService } from 'src/app/@core/services/themathic.service';
import {  Observable } from 'rxjs';
import { ThemeService } from 'src/app/@core/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
  animations: fuseAnimations
})
export class ThemeComponent implements OnInit {

 
  public observerEditor: Observable<any>
  isUpdated: boolean = false;
  arrayTheme: ITheme[] = [];

  public newTheme: ITheme = {
    id: '',
    name: '',
    content: '',
    description: '',
    image: null
  };

  constructor(
    private snackBar: MatSnackBar,
    private editorService: ContentEditorService,
    private themeService: ThemeService,
    private themathicService: ThemathicService
  ) {}

 

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getFile(file: File){
    this.newTheme.image = file;
  }


  private emptyTextfieldTheme() {
    return (this.newTheme.name.trim() === '' || this.newTheme.description.trim() === '') ? true : false;
  }



  private clearTheme() {
    this.newTheme = {
      id: '',
      name: '',
      content: '',
      description: '',
      image: null,
    };
    this.editorService.reset();
  }



  public addTheme() {
    if (this.emptyTextfieldTheme()) {
      this.openSnackBar("Existen campos vacios", "Aceptar")
    } else {
      let _theme: ITheme = {
        id: uuid(),
        name: this.newTheme.name,
        subtitle: 'Tema del lenguaje',
        description: this.newTheme.description,
        content: this.newTheme.content,
        imageSrc: '',
        image: this.newTheme.image,
        subthemes: []
      }
      this.themeService.createTheme(_theme, 0).subscribe(res => {
        console.log(res);
      })

      this.arrayTheme.push(_theme);
      this.themathicService.addTheme(_theme);
      this.openSnackBar("Has creado un nuevo tema", "Aceptar");
      this.clearTheme();
    }
  }

  getAction(event) {
    let action: string = event['action'];
    let data: ITheme = event['item'];

    switch (action) {
      case 'update':
        this.isUpdated = true;

        this.newTheme = {
          id: data.id,
          name: data.name,
          description: data.description,
          content: data.description,
          //  image: data.image
        }

        console.log(data.content);
        this.editorService.setContent(this.newTheme.content);
        break;
      case 'delete':
        _.remove(this.arrayTheme, (n) => n.id === data.id);
        this.themathicService.deleteTheme(data.id);
        break;

      default:
        console.log("No existe esa opcion")
    }

  }

  public updateTheme() {
    if (this.emptyTextfieldTheme()) {
      this.openSnackBar("Existen campos vacios", "Aceptar")
    } else {
      
      let _themeUpdated: ITheme = {
        id: this.newTheme.id,
        name: this.newTheme.name,
        subtitle: 'Tema',
        description: this.newTheme.description,
        content: this.newTheme.content,
        imageSrc: '../../../../assets/img/funciones-en-python-t1.jpg',
        image: this.newTheme.image
      }
      console.log(_themeUpdated);
      //this.arrayTheme.map(theme => theme.id === _themeUpdated.id ? (theme = _themeUpdated): theme ); 
      this.arrayTheme.map(theme => {
        if (theme.id === _themeUpdated.id) {
            theme.id = _themeUpdated.id;
            theme.image = _themeUpdated.image;
            theme.content = _themeUpdated.content;
            theme.description = _themeUpdated.description;
            theme.name = _themeUpdated.name;
            theme.subtitle = _themeUpdated.subtitle;
        }
      });
      console.log(this.arrayTheme);
      this.themathicService.updateTheme(_themeUpdated);
      this.isUpdated = false;
      this.openSnackBar("Has actualizado un tema", "Aceptar");
      this.clearTheme();
    }
  }





  ngOnInit() {
    this.editorService.getContent().subscribe(content => {
      this.newTheme.content = content;
    });
      
   
  }
}
