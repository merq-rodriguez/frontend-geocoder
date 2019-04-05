import { Component, OnInit } from "@angular/core";
import * as _ from 'lodash';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { v4 as uuid } from 'uuid';
import {MatSnackBar} from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';
import { ICardTheme } from 'src/app/@theme/components/card/ICard.interface';
import { ITheme } from 'src/app/@core/data/theme.data';
import { ILanguage } from 'src/app/@core/data/language.data';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';



@Component({
  selector: "app-create-language",
  templateUrl: "./create-language.component.html",
  animations   : fuseAnimations,
  styleUrls: ["./create-language.component.css"]
})
export class CreateLanguageComponent implements OnInit {
  isUpdated: boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = true;
  listCoordinates: [] = []
  hiddenTimeEnd = false;
  isLinear = false;
  valueSlider: number = 0;
  
  public arrayTheme: ICardTheme[] = []
  
  public newTheme: ITheme = {
    id: '',
    name: '',
    content: '',
    description: '',
    image: ''
  };

  public language: ILanguage = {
    idLanguage: null,
    name: '',
    description: '',
    image: '',
  }
  constructor(
    private _formBuilder: FormBuilder, 
    private snackBar: MatSnackBar,
    private editorService: ContentEditorService
  ) {
   // this.editorService.setBehaviorContent('Hola');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }



  private emptyTextfieldTheme(){
    return (this.newTheme.name.trim() === '' || this.newTheme.description.trim() === '' || this.newTheme.image === '') ? true : false;
  }
  
  private emptyTextfieldLanguage(){
    return (this.language.name.trim() === '' || this.language.description.trim() === '' || this.language.image === '') ? true : false;
  }

  private clearTheme(){
   this.newTheme = {
      id: '',
      name: '',
      content: '',
      description: '',
      image: ''
    };
    this.editorService.setBehaviorContent('');
  }



  public addTheme(){
    if(this.emptyTextfieldTheme()){
      this.openSnackBar("Existen campos vacios","Aceptar")
    }else{
      this.editorService.getBehaviorContent()
          .subscribe(content => this.newTheme.content = content);
      let _theme: ICardTheme = {
        id: uuid(),
        name: this.newTheme.name,
        subtitle: 'Tema del lenguaje',
        description: this.newTheme.description,
        content: this.newTheme.content,
        image: '../../../../assets/img/funciones-en-python-t1.jpg'
      //  image: this.newTheme.image
      }
      this.arrayTheme.push(_theme);
      this.openSnackBar("Has creado un nuevo tema","Aceptar");
      this.clearTheme();
    }
    
  }

  getAction(event){
    let action:string = event['action'];
    let data: ICardTheme = event['item'];
    
    switch(action){
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
        this.editorService.setBehaviorContent(this.newTheme.content);
      break;
      case 'delete':
        _.remove(this.arrayTheme, (n) =>  n.id === data.id);
      break;
    
      default:
        console.log("No existe esa opcion")
    }
    
  }

  public updateTheme(){
    if(this.emptyTextfieldTheme()){
      this.openSnackBar("Existen campos vacios","Aceptar")
    }else{
      this.editorService.getBehaviorContent()
          .subscribe(content => this.newTheme.content = content);
      let _themeUpdated: ICardTheme = {
        id: this.newTheme.id,
        name: this.newTheme.name,
        subtitle: 'Tema',
        description: this.newTheme.description,
        content: this.newTheme.content,
        image: '../../../../assets/img/funciones-en-python-t1.jpg'
      //  image: this.newTheme.image
      }
      console.log(_themeUpdated);
       //this.arrayTheme.map(theme => theme.id === _themeUpdated.id ? (theme = _themeUpdated): theme ); 
        this.arrayTheme.map(theme => {
          if(theme.id === _themeUpdated.id){
             theme.id = _themeUpdated.id,
             theme.image = _themeUpdated.image,
             theme.content = _themeUpdated.content,
             theme.description = _themeUpdated.description,
             theme.name = _themeUpdated.name,
             theme.subtitle = _themeUpdated.subtitle
          }
        });
       console.log(this.arrayTheme);
       this.isUpdated = false;
      this.openSnackBar("Has actualizado un tema","Aceptar");
      this.clearTheme();
    }
  }

  saveLanguage(){
    if(this.emptyTextfieldLanguage()){
      this.openSnackBar("Existen campos vacios","Aceptar");
    }
    console.log(this.language)
  }

 

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      nameLanguageCtrl:         [this.language.name, Validators.required],
      descriptionLanguageCtrl:  [this.language.description, Validators.required],
      imageLanguageCtrl:        ['', Validators.required],
      imageFakeLanguageCtrl: new FormControl(
        { 
           value: this.language.image, disabled: true
        },[ Validators.required ])
    });
    
    this.secondFormGroup = this._formBuilder.group({
      nameThemeCtrl: ['', Validators.required],
      descriptionThemeCtrl: ['', Validators.required],
      imageThemeCtrl: ['', Validators.required],
      imageFakeThemeCtrl: new FormControl(
        {  
          value: '', disabled: false
        },
          [ Validators.required ]
        )

     

    }); 

   
  }
}
