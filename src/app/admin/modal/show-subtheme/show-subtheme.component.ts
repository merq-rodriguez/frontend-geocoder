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
  selector: 'show-subtheme-dialog',
  templateUrl: 'show-subtheme-dialog.html',
  animations: fuseAnimations
})
export class ShowSubthemeDialog {
  _saveData= true;
  _destroy = true;
  selectedFile: File = null;
  subscribeMonaco$: any;
  contentMonaco: string = '';

  constructor(
    private snackBar: MatSnackBar,
    private monacoService: MonacoService,
    private editorService: ContentEditorService,
    public dialogRef: MatDialogRef<ShowSubthemeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ISubthemeDialog) {
      this.subscribeMonaco$ = this.monacoService.content$.subscribe(content => this.contentMonaco = content );
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
}