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
  url_video: string;
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
    public dialogRef: MatDialogRef<ShowSubthemeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ISubthemeDialog) {
    }

    
    onNoClick(): void {
      this.dialogRef.close();
    }


    getDestroy(){
      this._destroy = !this._destroy;
      console.log("Destruido: "+this._destroy)
    }
}