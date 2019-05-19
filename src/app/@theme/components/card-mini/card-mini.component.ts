import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICardSubTheme } from '../card/ICard.interface';


@Component({
  selector: "app-card-mini",
  templateUrl: "./card-mini.component.html",
  styleUrls: ["./card-mini.component.css"]
})
export class CardMiniComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  @Input() option:string;
  @Input() idTheme: string
  @Input('item') data:any;
 

  constructor() {}

  ngOnInit() {
   this.data.idTheme = this.idTheme;
  }

  deleteItem(){
    this.action.emit({action: 'delete', item: this.data})
  }

  updateItem(){
    this.action.emit({action: 'update', item: this.data})
  }

}
