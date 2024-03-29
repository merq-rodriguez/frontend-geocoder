import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {  ICardSubTheme } from './ICard.interface';
import { IExercise } from 'src/app/@core/data/exercise.data';
import { ITheme } from 'src/app/@core/data/theme.data';
import { environment } from 'src/environments/environment';


@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  @Input('item') item: ITheme  | ICardSubTheme | IExercise;
  @Input('type') type:string
  public data;
  public image: string ;
  imageDefault: string = `${environment.api + 'uploads/images/image-default.png'}`;

  constructor() {}

  ngOnInit() {
    console.log("Antes de agregar  datos a una card...")

    switch(this.type){
        case 'test':
            this.data = this.item;
        break;
        case 'theme':
            this.data = this.item; 
            console.log(this.data)
          if(this.data.imageSrc){
            this.image = this.data.imageSrc;
          }else{
            this.image = this.imageDefault;
          }       
        break;
        case 'subtheme':
            this.data = this.item;
        break;
        case 'exercise':
          this.data = this.item;
          console.log(this.data)
          if(this.data.imageSrc){
            this.image = this.data.imageSrc;
          }else{
            this.image = this.imageDefault;
          }
        break;
      }
      
      console.log(this.data)
  }



   // ABRE LA IMAGEN DESDE UN ARCHIVO.
   /*  projectImage(file: File) {
      let reader = new FileReader;
      // TODO: Define type of 'e'
      reader.onload = (e: any) => {
        // Simplemente configure e.target.result como nuestro <img> src en el diseño
        this.image = e.target.result;
        console.log(e.target.result);
      };
      // Esto procesará nuestro archivo y obtendrá sus atributos / datos
      reader.readAsDataURL(file);
    } */




  deleteItem(){
    this.action.emit({action: 'delete', item: this.data})
  }
  
  updateItem(){
    this.action.emit({action: 'update', item: this.data})
  }

}
