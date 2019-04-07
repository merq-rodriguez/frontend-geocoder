import { Observable } from 'rxjs';


export abstract class ThemeListData {
    abstract setBehaviorListTheme(list: Object):void;
    abstract getBehaviorListTheme(): Observable<any>;
  }