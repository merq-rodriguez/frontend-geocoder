import { Component, OnInit, Input } from "@angular/core";
import { ICardTest, ICardTheme, ICardSubTheme } from './ICard.interface';


@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input('item') item: ICardTheme | ICardTest | ICardSubTheme
  @Input('type') type:string
  public data;
  constructor() {}

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

}
