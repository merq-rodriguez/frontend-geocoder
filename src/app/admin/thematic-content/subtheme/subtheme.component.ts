import { Component, OnInit } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

import { v4 as uuid } from 'uuid';
import { MatSnackBar } from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';
import { ITheme } from 'src/app/@core/data/theme.data';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import { Observable } from 'rxjs';
import { ThemathicService} from 'src/app/@core/services/themathic.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateSubthemeDialog } from '../../modal/create-subtheme/create-subtheme.component';
import { ISubthemeDialog } from '../../modal/create-subtheme/create-subtheme.component'
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { ICardSubTheme } from 'src/app/@theme/components/card-mini/ICard.interface';
import { ISubtheme } from 'src/app/@core/data/subtheme-data';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { ILanguage } from 'src/app/@core/data/language.data';

@Component({
  selector: 'app-subthemes',
  templateUrl: './subtheme.component.html',
  styleUrls: ['./subtheme.component.css']
})
export class SubthemeComponent implements OnInit {
  public idThemeSelected: string;
  public subscriberArrayTheme: any;
  public subscriberEditor$: any;
  public subscribeMonaco$: any;
  public arrayThemes: ITheme[] = []


  constructor(
    private snackBar: MatSnackBar,
    private editorService: ContentEditorService,
    private monacoService: MonacoService,
    private themathicService: ThemathicService,
    public dialog: MatDialog
  ) {}


  ngOnInit() {
    
    this.subscriberArrayTheme = this.themathicService.getLanguage().subscribe((language: ILanguage) => this.arrayThemes = language.themes);
    this.subscriberEditor$ = this.editorService.content$.subscribe(content => this.data.contentEditor = content);
    this.subscribeMonaco$ = this.monacoService.content$.subscribe(content => this.data.contentCode = content );

   }

  data: ISubthemeDialog = {
    id: '',
    name: '',
    description: '',
    contentEditor: '',
    contentCode: '',
    image: '',
    addVideo: false,
    url_video: '',
    addCode: false,
    action: ''
  }
 
  clearDataDialog(){
    this.data = {
      id: '',
      name: '',
      description: '',
      contentEditor: '',
      contentCode: '',
      image: '',
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
    this.arrayThemes.forEach( theme => (theme.id === idTheme) 
            ? _.remove(theme.subthemes, (sub: ICardSubTheme ) => sub.id === idSubTheme)
            : theme        
    )
    //
  }

  //Metodo que interactua con el emisor de card-mi (elimina, actualiza)
  getActionCardMini(event){
    const {item, action} = event;
    console.log("Esto viene de la card mini")
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
         id: item.idSubtheme,
         name: item.name,
         contentCode: item.contentCode,
         description: item.description,
         image: item.image,
         url_video: item.url_video,
         contentEditor: item.contentEditor,
         action: 'update'
          
       };
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
  this.editorService.content$.subscribe(content => this.data.contentEditor = content);
  this.monacoService.content$.subscribe(content => this.data.contentCode = content);
  this.arrayThemes.forEach((theme: ITheme ) => {
    if(theme.id === this.idThemeSelected){
      theme.subthemes.forEach((subtheme: ISubtheme) => {
        if(subtheme.idSubtheme === this.data.id){
          
          subtheme.idSubtheme = this.data.id;
          subtheme.name = this.data.name;
          subtheme.description = this.data.description;
          subtheme.image = this.data.image;
          subtheme.contentEditor = this.data.contentEditor;
          subtheme.contentCode = this.data.contentCode;
          subtheme.url_video = this.data.url_video;
          console.log("Encontrado y actualizado");
        }
      })
    }
  })
            
  this.clearObservables();
  this.clearDataDialog();
}




  addSubtheme(){
    let _subtheme: ISubtheme = {
      idSubtheme: uuid(),
      name: this.data.name,
      description: this.data.description,
      image: this.data.image,
      contentEditor: this.data.contentEditor,
      contentCode: this.data.contentCode,
      url_video: this.data.url_video,

  }

//Se procede a insertar el subthema en en el tema al que pertenece 
//haciendo uso del id para encontrarlo.
  this.arrayThemes.forEach(theme => (theme.id === this.idThemeSelected) 
            ? theme.subthemes.push(_subtheme)
            : theme);
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
      console.log('Dialog cerrado');
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

      console.log(this.arrayThemes)
    });
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
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
