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
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-subthemes',
  templateUrl: './subtheme.component.html',
  styleUrls: ['./subtheme.component.css']
})
export class SubthemeComponent implements OnInit {

  public observerArrayTheme: Observable<any>;
  public arrayThemes: ICardTheme[] = []


  animal: string;
  name: string;

 

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateSubthemeDialog, {
      width: '900px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  
 /** arrayThemes: ICardTheme[] = [
    {
      id: '',
      name: 'Operaciones en Observables',
      subtitle: 'sssssss',
      description: 'sssss',
      content: 'ssssss',
      image: 'ssssssss',
      subthemes: [
        {
          name: 'Funciones',
          description: '',
          image: '../../../../assets/img/cover.jpeg'
        },
        {
          name: 'Operadores logicos',
          description: '',
          image: '../../../../assets/img/funciones-en-python-t1.jpg'
        },
        {
          name: 'Clases',
          description: '',
          image: '../../../../assets/img/coder2.png'
        }
      ],
    },
    {
      id: 'ssssss',
      subtitle: 'sssssss',
      description: 'sssss',
      content: 'ssssss',
      image: 'ssssssss',
      name: 'Orientacion a objetos',
      subthemes: [
        {
          name: 'Funciones',
          description: '',
          image: '../../../../assets/img/cover.jpeg'
        },
        {
          name: 'Operadores logicos',
          description: '',
          image: '../../../../assets/img/funciones-en-python-t1.jpg'
        },
        {
          name: 'Clases',
          description: '',
          image: '../../../../assets/img/coder2.png'
        }
      ],
    },
    {
      id: 'ssssss',
      subtitle: 'sssssss',
      description: 'sssss',
      content: 'ssssss',
      image: 'ssssssss',
      name: 'ssssssssss',
      subthemes: [
        {
          name: 'Funciones',
          description: '',
          image: '../../../../assets/img/cover.jpeg'
        },
        {
          name: 'Operadores logicos',
          description: '',
          image: '../../../../assets/img/funciones-en-python-t1.jpg'
        },
        {
          name: 'Clases',
          description: '',
          image: '../../../../assets/img/coder2.png'
        }
      ],
    },
    {
      id: 'ssssss',
      subtitle: 'sssssss',
      description: 'sssss',
      content: 'ssssss',
      image: 'ssssssss',
      name: 'ssssssssss',
      subthemes: [
        {
          name: 'Funciones',
          description: '',
          image: '../../../../assets/img/cover.jpeg'
        },
        {
          name: 'Operadores logicos',
          description: '',
          image: '../../../../assets/img/funciones-en-python-t1.jpg'
        },
        {
          name: 'Clases',
          description: '',
          image: '../../../../assets/img/coder2.png'
        }
      ],
    }
  ]
 */

 

 
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  
  constructor(
    private snackBar: MatSnackBar,
    private editorService: ContentEditorService,
    private themeListService: ThemeListService,
    public dialog: MatDialog
  ) {
  }


  ngOnInit() {
   this.observerArrayTheme = this.themeListService.getListTheme();
   this.observerArrayTheme.subscribe(res => this.arrayThemes = res);
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  




}
