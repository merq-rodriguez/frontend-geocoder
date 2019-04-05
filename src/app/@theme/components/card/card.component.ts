import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICardTest, ICardTheme, ICardSubTheme } from './ICard.interface';


@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  @Input('item') item: ICardTheme | ICardTest | ICardSubTheme
  @Input('type') type:string
  public data;
 

  constructor() {
  //  this.action.emit('action')
  }

  ngOnInit() {
    switch(this.type){
        case 'test':
            this.data = this.item;
        break;
        case 'theme':
            this.data = this.item;        
        break;
        case 'subtheme':
            this.data = this.item;
        break;

      }
  }

  deleteItem(){
    this.action.emit({action: 'delete', item: this.data})
  }
  updateItem(){
    this.action.emit({action: 'update', item: this.data})
  }
  showItem(){
    this.action.emit({action: 'show', item: this.data})
  }

}
