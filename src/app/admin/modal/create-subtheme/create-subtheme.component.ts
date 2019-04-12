import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs';

export interface ISubthemeDialog{
  id?: string;
  name: string;
  description: string;
  contentEditor?: string;
  contentCode?: string;
  image?: string;
  addVideo?: boolean;
  url_video: string;
  addCode?: boolean;
  action?: string;
}


@Component({
  selector: 'create-subtheme-dialog',
  templateUrl: 'create-subtheme-dialog.html',
  animations: fuseAnimations
})
export class CreateSubthemeDialog {
  _saveData= true;
  _destroy = true;
  selectedFile: File = null;
  subscribeMonaco$: any;
  subscribeEditor$: any;
  contentMonaco: string = '';
  contentEditor: string = '';

  constructor(
    private snackBar: MatSnackBar,
    private monacoService: MonacoService,
    private editorService: ContentEditorService,
    public dialogRef: MatDialogRef<CreateSubthemeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ISubthemeDialog) {
      this.subscribeMonaco$ = this.monacoService.content$.subscribe(content => this.contentMonaco = content );
      this.subscribeEditor$ = this.editorService.content$.subscribe(content => this.contentEditor = content );
    }

    onFileSelected(event){
      console.log(event)
      console.log(<File>event.target.files[0])
        this.selectedFile = <File>event.target.files[0];
        console.log(this.selectedFile)
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }



    getDestroy(){
      this._destroy = !this._destroy;
      console.log("Destruido: "+this._destroy)
    }

    validatorData():void{
      if(this.textfieldRequired()){
       this.openSnackBar('El nombre y la descripcion son obligatorios','Aceptar');
       this._saveData = false;
      }else{
        this._saveData = true;
      }

     if(this.contentEditor){
      if(this.contentEditor.trim() === ''){
        this.openSnackBar('Debes construir el contenido en el editor','Aceptar');
        this._saveData = false;
      }else{
        this._saveData = true;
      }
     }

      if(this.data.addCode){ //Primero verificamos que la persona haya anexado codigo (Esto es opcional, no es obligatorio añadir codigo para un subtema)
        if(this.contentMonaco.trim() === ''){ // Si añadio codigo validamos que no esté vacio
          this.openSnackBar('Debes ingresar codigo de programacion','Aceptar');
          this._saveData = false;
        }else{
          this._saveData = true;
        }
      }
      
      if(this.data.addVideo){
        if(this.data.url_video.trim() === ''){
          this.openSnackBar('Debes ingresar la url de un video o desabilita la opcion','Aceptar');
          this._saveData = false;
        }else{
          this._saveData = true;
        }
      }
          
        //if(this.validatorMonaco()){
        //this._saveData = true;
       // }
       

       // ? this._saveData = true 
      // : this._saveData = false; 
    }


    textfieldRequired():boolean{
      return (this.data.name.trim() === '' || this.data.description.trim() === ''); 
             
    }

    validatorEditor():boolean{
      let result: boolean;
      this.editorService.content$.subscribe(content => content.trim() === '' ? result = true : result = false);
      return result;  
    }

    validatorMonaco():boolean{
      let result: boolean;
      this.monacoService.content$.subscribe(content => {
        console.log(">"+content);
      });
      return result;
    }

}