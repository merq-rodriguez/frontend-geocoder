import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


export interface ICardMenu {
  name: string;
  description: string;
  subtitle: string;
  image: string;
}

@Component({
  selector: "app-card-menu",
  templateUrl: "./card-menu.component.html",
  styleUrls: ["./card-menu.component.css"]
})



export class CardMenuComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  @Input('item') item: ICardMenu
  public data: ICardMenu;


  constructor() {
    //  this.action.emit('action')
  }

  ngOnInit() {
    this.data = this.item;
  }


  /*   showItem(){
      this.action.emit({action: 'show', item: this.data})
    }
   */
}
