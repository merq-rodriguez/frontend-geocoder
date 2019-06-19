import {
  Component,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { fuseAnimations } from '../../animations';
@Component({
  selector: 'image-preview',
  styleUrls: ['./image-preview.component.css'],
  templateUrl: './image-preview.component.html',
  animations: fuseAnimations

})
export class MtImagePreviewComponent {
  @Input('image') image;
  // Uso FileReader para leer el archivo desde la entrada
  default: string = '../../../../assets/img/image-default.png';

  // Emitir un evento cuando un archivo ha sido elegido. Aquí devolvemos el archivo en sí.
  @Output() onChange: EventEmitter<File> = new EventEmitter<File>();

  constructor(){}

  // Si la entrada ha cambiado (archivo seleccionado), proyectamos el archivo en la vista previa de img
  updateSource($event: Event, type: string) {
    // Accedemos al archivo con $event.target['files'][0]
      this.projectImage($event.target['files'][0]);
  }

  
  projectImage(file: File) {
    let reader = new FileReader;
    // TODO: Define type of 'e'
    reader.onload = (e: any) => {
      // Simply set e.target.result as our <img> src in the layout
      this.image = e.target.result;
      this.onChange.emit(file);
    };
    // This will process our file and get it's attributes/data
    reader.readAsDataURL(file);
  }
}