import { Observable } from 'rxjs';
import { ICardTheme } from 'src/app/@theme/components/card/ICard.interface';


export abstract class ThemeListData {
    abstract addTheme(theme: ICardTheme):void;
    abstract getListTheme(): Observable<any>;
  }