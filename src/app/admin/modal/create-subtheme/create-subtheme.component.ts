import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';

export interface ISubthemeDialog{
  idSubtheme?: string;
  name: string;
  description: string;
  content?: string;
  contentCode?: string;
  image?: string;
  idTheme?: number;
  addVideo: boolean;
  addCode: boolean;
}



@Component({
  selector: 'create-subtheme-dialog',
  templateUrl: 'create-subtheme-dialog.html',
  animations: fuseAnimations
})
export class CreateSubthemeDialog {

  constructor(
    public dialogRef: MatDialogRef<CreateSubthemeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ISubthemeDialog) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  _destroy = true;
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
  getDestroy(){
    this._destroy = !this._destroy;
    console.log(this._destroy)
  }

}