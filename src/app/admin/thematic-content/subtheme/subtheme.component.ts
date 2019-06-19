import { Component, OnInit } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

import { ITheme } from 'src/app/@core/data/theme.data';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import { ThemathicService} from 'src/app/@core/services/themathic.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateSubthemeDialog } from '../../modal/create-subtheme/create-subtheme.component';
import { ISubthemeDialog } from '../../modal/create-subtheme/create-subtheme.component'
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { ISubtheme } from 'src/app/@core/data/subtheme-data';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { ILanguage } from 'src/app/@core/data/language.data';
import { SubthemeService } from 'src/app/@core/services/subtheme.service';
import { SnackBarService } from 'src/app/@core/services/snackbar.service';

@Component({
  selector: 'app-subthemes',
  templateUrl: './subtheme.component.html',
  styleUrls: ['./subtheme.component.css']
})
export class SubthemeComponent implements OnInit {
  public idThemeSelected: string;

  public language: ILanguage = null;


  public data: ISubthemeDialog = {
    id: '',
    name: '',
    description: '',
    contentEditor: '',
    contentCode: '',
    image: null,
    imageSrc: '',
    addVideo: false,
    url_video: '',
    addCode: false,
    action: ''
  }

  constructor(
    private subthemeService: SubthemeService,
    private editorService: ContentEditorService,
    private monacoService: MonacoService,
    private themathicService: ThemathicService,
    public dialog: MatDialog,
    private snackService: SnackBarService
  ) {}


  ngOnInit() {
    this.themathicService.getLanguage().subscribe((language: ILanguage) => this.language = language);
    this.monacoService.content$.subscribe(content => this.data.contentCode = content );
    this.editorService.getContent().subscribe(content => {
      console.log("NG_ON_INIT EDITOR")
      this.data.contentEditor = content;
      console.log(content);
    });
   }

  
 
  clearDataDialog(){
    this.data = {
      id: '',
      name: '',
      description: '',
      contentEditor: '',
      contentCode: '',
      imageSrc: '',
      image: null,
      url_video: '',
      addVideo: false,
      addCode: false,
      action: ''
    }
  }//780ZStdM9gNY

  //Limpiamos los observables de monaco editor y el editor de html
  clearObservables(){
    this.monacoService.reset();
    this.editorService.reset();
  }

  //Metodo para eliminar un subtheme
  deleteSubtheme(idTheme: string, idSubTheme: string){
    this.subthemeService.deleteSubtheme(Number(idSubTheme)).subscribe(res => {
      console.log(res)
      if(res.status === 'OK'){
        this.language.themes.forEach( theme => (theme.id === idTheme) 
            ? _.remove(theme.subthemes, (sub: ISubtheme ) => sub.id == idSubTheme)
            : theme
        )
        this.snackService.openSnackBar("Has eliminado un subtema", "Aceptar");

      }else{
        this.snackService.openSnackBar("Hubo un problema eliminando el subtema", "Aceptar");
      }  
    })
  }

  //Metodo que interactua con el emisor de card-mi (elimina, actualiza)
  getActionCardMini(event){
    const {item, action} = event;
    console.log("Esto viene de la card mini (CUANDO ACTUALIZA O ELIMINA)")
    console.log(item)
     switch(action){
      case 'update':  

      if(item.contentCode){
        if(item.contentCode.trim() !== ""){
          this.data.addCode = true;
        }else{
          this.data.addCode = false;
        }
      }else{
        this.data.addCode = false;
      }

      if(item.url_video){
        if(item.url_video.trim() !== ""){
          this.data.addVideo = true;
        }else{
          this.data.addVideo = false
        }
      }else{
        this.data.addVideo = false;
      }
       this.data = {
         id: item.id,
         name: item.name,
         contentCode: item.contentCode,
         description: item.description,
         image: item.image,
         url_video: item.url_video,
         contentEditor: item.contentEditor,
         action: 'update'
       };

       console.log("==================== CAMBIAMOS LOS DATOS DE DATA ====================");
       console.log(this.data)
       if(this.data.contentCode){
        this.monacoService.setMonacoContent(this.data.contentCode);
       }

       if(this.data.contentEditor){
         this.editorService.setContent(this.data.contentEditor);
      }

       this.openDialog(item.idTheme, 'update');
      break;
      case 'delete':
       this.deleteSubtheme(item.idTheme, item.id) //id -> Theme, id -> Subtheme
      break;
    } 
  }
  
  updateSubtheme(){
  // Esta vaina va a traer lo que hay en el editor HTML y monaco
    console.log("ANTES DE ACTUALIZAR");
    console.log(this.data);
    let _subtheme:ISubtheme = { 
      id: this.data.id,
      name: this.data.name,
      description: this.data.description ,
      contentCode: this.data.contentCode,
      contentEditor: this.data.contentEditor,
      image: this.data.image,
      url_video: this.data.url_video
    }
  this.subthemeService.updateSubtheme( _subtheme, Number(this.idThemeSelected)).subscribe( res => {
      console.log("=================== UPDATE SUBTHEME RESPONSE =====================");
      console.log(res);
      if(res.result){
        if(res.result.image){ // Si se envio una imagen nueva, nos la devuelve 
          _subtheme.imageSrc = res.result.image;
          console.log("ID THEME SELECTEC")
          console.log(this.idThemeSelected);
          console.log("SUBTHEME ID")
          console.log(_subtheme.id);
          this.language.themes.forEach( theme => (theme.id === this.idThemeSelected) 
            ? _.remove(theme.subthemes, (sub: ISubtheme ) => sub.id == _subtheme.id)
            : theme
          )
          //Hago esta trampa porque me mame de trasnochar haciendo esto .l.
          this.language.themes.forEach(theme => (theme.id === this.idThemeSelected) 
            ? theme.subthemes.push(_subtheme)
            : theme);
          console.log(this.language.themes)
        }
      }
    })

  
            
  this.clearObservables();
  this.clearDataDialog();
}




  addSubtheme(){
    let _subtheme: ISubtheme = {
      name: this.data.name,
      description: this.data.description,
      image: this.data.image,
      imageSrc: this.data.imageSrc,
      contentEditor: this.data.contentEditor,
      contentCode: this.data.contentCode,
      url_video: this.data.url_video
  }

  this.subthemeService.createSubtheme(_subtheme, Number(this.idThemeSelected)).subscribe(res => {
        console.log("============================== RESPONSE CREATE SUBTHEME ==============================")
        console.info(res)
        if(res.result){
          _subtheme.imageSrc = res.result.image;
          _subtheme.id = res.result.id;
        }
        console.log(_subtheme)
  });

  //Se procede a insertar el subthema en en el tema al que pertenece 
  //haciendo uso del id para encontrarlo.
  this.language.themes.forEach(theme => (theme.id === this.idThemeSelected) 
            ? theme.subthemes.push(_subtheme)
            : theme);
  console.log(this.language.themes)
  this.clearObservables();
  this.clearDataDialog();
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



  openDialog(idTheme: string, action: string): void {
    this.idThemeSelected = idTheme; 
    this.data.action = action;
    console.log("Iniciando la modal")
    console.log(this.data)
    const dialogRef = this.dialog.open(CreateSubthemeDialog, {
      width: '900px',
      data: this.data
    });

    //Despues de cerrar el dialog
    dialogRef.afterClosed().subscribe((result:ISubthemeDialog) => {
      console.log('======================== Dialog cerrado ========================');
    //if(this.data.name.trim() !== '' || this.data.description.trim() !== ''){
        console.log("DATOS:")
        console.log(this.data);
      
        if(this.data.name  || this.data.description){
          switch(this.data.action){
            case 'create':
              this.addSubtheme()
            break;
            case 'update':
              this.updateSubtheme();
            break;
          }
        }else{
          console.error('Ocurrio algo malo, algo muy malo ... D:')

        }

      console.log(this.language.themes)
    });
  }


  


   public getRoutesItem(){
    return ROUTES_SUBTHEME; 
  }
}

const ROUTES_SUBTHEME: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '/admin/thematic-content/menu-language', icon: "school", title: "Menu Lenguaje", class: "", active: true },
  { path: '/admin/thematic-content/language-list', icon: "school", title: "Listado de Lenguajes", class: "", active: true },
  {  icon: "school", title: "Ver Lenguaje", class: "", active: false },
];
