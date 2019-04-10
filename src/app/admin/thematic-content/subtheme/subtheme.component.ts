import { Component, OnInit } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

import { v4 as uuid } from 'uuid';
import { MatSnackBar } from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';
import { ICardTheme } from 'src/app/@theme/components/card/ICard.interface';
import { ITheme } from 'src/app/@core/data/theme.data';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import { Observable } from 'rxjs';
import { ThemeListService } from 'src/app/@core/services/themeList.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateSubthemeDialog } from '../../modal/create-subtheme/create-subtheme.component';
import { ISubthemeDialog } from '../../modal/create-subtheme/create-subtheme.component'
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { ICardSubTheme } from 'src/app/@theme/components/card-mini/ICard.interface';
import { ISubtheme } from 'src/app/@core/data/subtheme-data';

@Component({
  selector: 'app-subthemes',
  templateUrl: './subtheme.component.html',
  styleUrls: ['./subtheme.component.css']
})
export class SubthemeComponent implements OnInit {
  public idThemeSelected: string;
  public observerArrayTheme: Observable<any>;
  public arrayThemes: ICardTheme[] = []

  data: ISubthemeDialog = {
    name: '',
    description: '',
    contentEditor: '',
    contentCode: '',
    image: '',
    addVideo: false,
    url_video: '',
    addCode: false,
  }
 
  clearDataDialog(){
    this.data = {
      name: '',
      description: '',
      contentEditor: '',
      contentCode: '',
      image: '',
      addVideo: false,
      url_video: '',
      addCode: false,
    }
  }//780ZStdM9gNY

  clearObservables(){
    this.monacoService.setContentMonaco('');
    this.editorService.setBehaviorContent('');
  }

  deleteSubtheme(idTheme: string, idSubTheme: string){
    this.arrayThemes.forEach(
        theme => (theme.id === idTheme) 
            ? _.remove(theme.subthemes, (sub: ICardSubTheme ) => sub.id === idSubTheme)
            : theme        
    )
    //
  }


  getAction(event){
    const {item, action} = event;
    console.log(item)
     switch(action){
      case 'update':  
        
      break;
      case 'delete':
        this.deleteSubtheme(item.idTheme, item.id) //id -> Theme, id -> Subtheme
      break;
    } 
  }

  openDialog(idTheme: string): void {
    this.idThemeSelected = idTheme; 
    const dialogRef = this.dialog.open(CreateSubthemeDialog, {
      width: '900px',
      data: this.data
    });

    //Despues de cerrar el dialog
    dialogRef.afterClosed().subscribe((result:ISubthemeDialog) => {
      console.log('Dialog cerrado');
      if(this.data.name.trim() !== '' || this.data.description.trim() !== ''){
        console.log(this.data);

      this.editorService.content$.subscribe(content => this.data.contentEditor = content);
      this.monacoService.content$.subscribe(content => this.data.contentCode = content);
      
     let _subtheme = {
          id: uuid(),
          name: this.data.name,
          description: this.data.description,
          image: this.data.image,
          content: this.data.contentEditor,
          contentCode: this.data.contentCode,
          subtitle: 'Subtheme'
      } as ICardSubTheme 
      
      //Se procede a insertar el subthema en en el tema al que pertenece 
      //haciendo uso del id para encontrarlo.
      this.arrayThemes.forEach(theme => (theme.id === this.idThemeSelected) ? theme.subthemes.push(_subtheme): theme);
      this.clearObservables();
      this.clearDataDialog();
      console.log(this.arrayThemes)
      }
    });
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


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  constructor(
    private snackBar: MatSnackBar,
    private editorService: ContentEditorService,
    private monacoService: MonacoService,
    private themeListService: ThemeListService,
    public dialog: MatDialog
  ) {}


  ngOnInit() {
    this.observerArrayTheme = this.themeListService.getListTheme();
    this.observerArrayTheme.subscribe(res => this.arrayThemes = res);
   }

}
