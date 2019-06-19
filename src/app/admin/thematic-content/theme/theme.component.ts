import { Component, OnInit,  } from "@angular/core";
import * as _ from 'lodash';

import { v4 as uuid } from 'uuid';
import { fuseAnimations } from 'src/app/@theme/animations';
import { ITheme } from 'src/app/@core/data/theme.data';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import { ThemathicService } from 'src/app/@core/services/themathic.service';
import {  Observable } from 'rxjs';
import { ThemeService } from 'src/app/@core/services/theme.service';
import { ILanguage } from 'src/app/@core/data/language.data';
import { isNull } from 'util';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
  animations: fuseAnimations
})
export class ThemeComponent implements OnInit {

  public isReset: boolean = false;
  public observerEditor: Observable<any>

  isUpdated: boolean = false;
  
  public language: ILanguage = null;

  public newTheme: ITheme = {
    id: '',
    name: '',
    content: '',
    description: '',
    image: null
  };

  constructor(
    private snackService: SnackBarService,
    private editorService: ContentEditorService,
    private themeService: ThemeService,
    private themathicService: ThemathicService
  ) {}

 

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
      subtitle: '',
      image: null,
      imageSrc: null
    };
    this.editorService.reset();
  }

  getAction(event) {
    let action: string = event['action'];
    let data: ITheme = event['item'];

    switch (action) {
      case 'update':
        this.newTheme = {
          id: data.id,
          name: data.name,
          description: data.description,
          content: data.description,
          imageSrc: data.imageSrc
        }
        console.log("DATOS DE THEME (ACTION) update antes de actualizarse");
        console.log(this.newTheme);
        this.isUpdated = true;
        this.isReset = true;
        this.isReset = false;


        this.editorService.setContent(this.newTheme.content);
        break;
      case 'delete':
        this.deleteTheme(Number(data.id));  
      break;

      default:
        console.log("No existe esa opcion")
    }

  }

  public updateTheme() {
    if (this.emptyTextfieldTheme()) {
      this.snackService.openSnackBar("Existen campos vacios", "Aceptar")
    } else {
      let _themeUpdated: ITheme = {
        id: this.newTheme.id,
        name: this.newTheme.name,
        subtitle: 'Tema del lenguaje',
        description: this.newTheme.description,
        content: this.newTheme.content,
        imageSrc: this.newTheme.imageSrc,
        image: this.newTheme.image
      }
      //Tema apunto de ser actualizado
      console.log("Tema apunto de ser actualizado");
      console.log(_themeUpdated);

      this.themeService.updateTheme(_themeUpdated).subscribe(res => {
        console.log("RESPONSE")
        console.log(res);
         if(res['result']){
           if(res['result'].image){ //Si enviamos una imagen la va a devolver, si ese es el caso la recibimos y la asignamos antes de actializar el dato en pantalla
              _themeUpdated.imageSrc = res['result'].image;
           }
           this.themathicService.deleteTheme(_themeUpdated.id)
           this.themathicService.addTheme(_themeUpdated);
          //this.themathicService.updateTheme(_themeUpdated);
          this.isUpdated = false;

          this.clearTheme();
          console.log(this.language.themes);
          this.snackService.openSnackBar("¡Has actualizado el tema con exito!", "Aceptar")
        }else{
          this.snackService.openSnackBar("¡Paila socio, hubo un problema actualizando los datos!", "Aceptar")          
        } 
      }) 
    }
  }

  public addTheme() {
    if (this.emptyTextfieldTheme()) {
      this.snackService.openSnackBar("Existen campos vacios", "Aceptar")
    } else {
      if(isNull(this.language.idLanguage)){ // SI el id del lenguaje es null, quiere decir que no se ha guardado en base de datos.
        this.snackService.openSnackBar("Debe diligenciar los datos del lenguaje para proseguir", "Aceptar")
      }else{
        let _theme: ITheme = {
          id: uuid(),
          name: this.newTheme.name,
          subtitle: 'Tema del lenguaje',
          description: this.newTheme.description,
          content: this.newTheme.content,
          image: this.newTheme.image,
          subthemes: []
        }
        this.isReset = true;
         Object.assign(_theme, { idLanguage: Number(this.language.idLanguage) }) //Agregamos el idLanguage
         this.themeService.createTheme(_theme, this.language.idLanguage).subscribe(res => {
          console.log(res);
          if(res['result']){
            _theme.id = res['result'].id;
            _theme.imageSrc = res['result'].image;
            this.themathicService.addTheme(_theme);
            this.snackService.openSnackBar("Has creado un nuevo tema", "Aceptar");
            this.clearTheme();
            this.isReset = false;
          }


        }) 
      }
      

      
    }
  }

  deleteTheme(idTheme: number){
    this.themeService.deleteTheme(idTheme).subscribe(res => {
      console.log(res);
      if(res['result']){
        if(res['result'] === 'OK'){
          _.remove(this.language.themes, (n:ITheme) => n.id === String(idTheme));
          this.themathicService.deleteTheme(String(idTheme));
          this.snackService.openSnackBar("Has eliminado un tema", "Aceptar");

        }
      }
      
    })
  }

  ngOnInit() {
    this.editorService.getContent().subscribe(content => this.newTheme.content = content);
    this.themathicService.getLanguage().subscribe((language: ILanguage) => this.language = language);
  }
}
