import { Observable } from 'rxjs';
import { ITheme } from './theme.data';


export abstract class ThemathicData {
    abstract addTheme(theme: ITheme):void;
    abstract getLanguage(): Observable<any>;
  }