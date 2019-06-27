import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';


export interface IThemeDialog {
  id?: string;
  name: string;
  description: string;
  content?: string;
  image?: string;
  url_video?: string;
}


@Component({
  selector: 'show-theme-dialog',
  templateUrl: 'show-theme-dialog.html',
  styleUrls: ['show-theme.component.css']
})
export class ShowThemeDialog {
  _saveData = true;
  _destroy = true;

  constructor(
    public dialogRef: MatDialogRef<ShowThemeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IThemeDialog) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


  getDestroy() {
    this._destroy = !this._destroy;
    console.log("Destruido: " + this._destroy)
  }
}