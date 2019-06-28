import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';


export interface ISubthemeDialog{
  id?: string;
  name: string;
  description: string;
  content?: string;
  imageSrc?: string;
  url_video: string;
}


@Component({
  selector: 'show-subtheme-dialog',
  templateUrl: 'show-subtheme-dialog.html',
  styleUrls: ['show-subtheme.component.css']
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