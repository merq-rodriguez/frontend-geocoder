import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, BehaviorSubject } from 'rxjs';
import { ThemeListData } from '../data/theme-list.data';
import { ICardTheme } from 'src/app/@theme/components/card-mini/ICard.interface';
import * as _ from 'lodash';


@Injectable()
export class ThemeListService implements ThemeListData  {

    private arrayTheme: ICardTheme[] = [];
    private themesObservableSource = new BehaviorSubject<any>(null);    
    public  themesObservable$ = this.themesObservableSource.asObservable();

    constructor() { }

    addTheme(theme: ICardTheme):void{
       this.arrayTheme.push(theme);
       this.themesObservableSource.next(this.arrayTheme);
    }

    deleteTheme(id: string):void{
        _.remove(this.arrayTheme, (n) => n.id === id);        //this.arrayTheme.push(theme);
        this.themesObservableSource.next(this.arrayTheme);
    }

    updateTheme(_themeUpdated: ICardTheme):void{
        this.arrayTheme.map(theme => {
            if (theme.id === _themeUpdated.id) {
              theme.id = _themeUpdated.id,
                theme.image = _themeUpdated.image,
                theme.content = _themeUpdated.content,
                theme.description = _themeUpdated.description,
                theme.name = _themeUpdated.name,
                theme.subtitle = _themeUpdated.subtitle
            }
          });
          this.themesObservableSource.next(this.arrayTheme);
    }

    getListTheme(): Observable<any> { 
        return this.themesObservable$; 
    }
}