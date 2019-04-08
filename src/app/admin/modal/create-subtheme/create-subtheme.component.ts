import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';

export interface ISubthemeDialog{
  name: string;
  description: string;
  contentEditor?: string;
  contentCode?: string;
  image?: string;
  addVideo: boolean;
  url_video: string;
  addCode: boolean;
}



@Component({
  selector: 'create-subtheme-dialog',
  templateUrl: 'create-subtheme-dialog.html',
  animations: fuseAnimations
})
export class CreateSubthemeDialog {

  _destroy = true;

  constructor(
    public dialogRef: MatDialogRef<CreateSubthemeDialog>,
    
    @Inject(MAT_DIALOG_DATA) public data: ISubthemeDialog) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    getDestroy(){
      this._destroy = !this._destroy;
      console.log("Destruido: "+this._destroy)
    }


}