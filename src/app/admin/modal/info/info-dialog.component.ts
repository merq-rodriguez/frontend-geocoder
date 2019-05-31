import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { fuseAnimations } from 'src/app/@theme/animations';
import { MonacoService } from 'src/app/@core/services/monaco.service';
import { ContentEditorService } from 'src/app/@core/services/content-editor.service';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs';

export interface InfoDialog{
  id: number;
  title: string;
  message: string;
  image: string;
}

@Component({
  selector: 'app-info-dialog',
  templateUrl: 'info-dialog.html'
})
export class InfoDialogComponent {
  _destroy = true;

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InfoDialog) {
    }

   

    onNoClick(): void {
      this.dialogRef.close();
    }

 

    getDestroy(){
      this._destroy = !this._destroy;
      console.log("Destruido: "+this._destroy)
    }
}