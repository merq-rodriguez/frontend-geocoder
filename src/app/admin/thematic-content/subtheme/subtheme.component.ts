import { Component, OnInit } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

import { v4 as uuid } from 'uuid';
import { MatSnackBar } from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';
import { ICardTheme } from 'src/app/@theme/components/card/ICard.interface';
import { ITheme } from 'src/app/@core/data/theme.data';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';



@Component({
  selector: 'app-subthemes',
  templateUrl: './subtheme.component.html',
  styleUrls: ['./subtheme.component.css']
})
export class SubthemeComponent implements OnInit {
  itemCard: ICardTheme = {
    content: 'xxxxxxx',
    description: 'xxxxxxxx',
    id : 'xxxxxxxx',
    image: '', 
    name: '',
    subtitle: 'Theme'
  } 
  arrayThemes: ICardTheme[] = [
    {
      id: '',
      name: 'Operaciones de algo',
      subtitle: 'sssssss',
      description: 'sssss',
      content: 'ssssss',
      image: 'ssssssss',
      subthemes: [
        {
          name: 'Funciones',
          description: '',
          image: ''
        },
        {
          name: 'Operadores logicos',
          description: '',
          image: ''
        },
        {
          name: 'Clases',
          description: '',
          image: ''
        }
      ],
    },
    {
      id: 'ssssss',
      subtitle: 'sssssss',
      description: 'sssss',
      content: 'ssssss',
      image: 'ssssssss',
      subthemes: [],
      name: 'Orientacion a objetos',
    },
    {
      id: 'ssssss',
      subtitle: 'sssssss',
      description: 'sssss',
      content: 'ssssss',
      image: 'ssssssss',
      subthemes: [],
      name: 'ssssssssss',
    },
    {
      id: 'ssssss',
      subtitle: 'sssssss',
      description: 'sssss',
      content: 'ssssss',
      image: 'ssssssss',
      subthemes: [],
      name: 'ssssssssss',
    }
  ]


 
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
 
  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
 
  review = [
    'Take bath',
    'Wash car',
  ];
 
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
    private editorService: ContentEditorService
  ) {
  }




  ngOnInit() {
   
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  




}
