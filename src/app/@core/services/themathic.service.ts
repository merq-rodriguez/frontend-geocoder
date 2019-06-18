import { Injectable, OnInit } from '@angular/core';
import { of as observableOf ,Observable, BehaviorSubject } from 'rxjs';
import { ThemathicData } from '../data/theme-list.data';
import { ICardTheme } from 'src/app/@theme/components/card-mini/ICard.interface';
import * as _ from 'lodash';
import { ITheme } from '../data/theme.data';
import { ILanguage } from '../data/language.data';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './auth.service';


@Injectable()
export class ThemathicService implements ThemathicData  {
    /* private arrayTheme: ITheme[] = [];
    private themesObservableSource = new BehaviorSubject<any>(null);    
    public  themesObservable$ = this.themesObservableSource.asObservable();
     */
    //Language
    public language: ILanguage = {
        idLanguage: null,
        name: '',
        description: '',
        imageSrc: `${environment}+'/uploads/images/image-default.png'`,
        idUser: null,
        themes: []
    }  
    private languageSource = new BehaviorSubject<ILanguage>(this.language);    
    public  languageObservable$ = this.languageSource.asObservable();

    constructor(private readonly authService: AuthService) {
        this.authService.userObservable.subscribe(user => this.language.idUser = user.idUser)
     }

   

    addTheme(theme: ITheme):void{
       this.language.themes.push(theme);
       this.languageSource.next(this.language);
    }

    deleteTheme(id: string):void{
        _.remove(this.language.themes, (n) => n.id === id);        
        this.languageSource.next(this.language);
    }

    updateTheme(_themeUpdated: ITheme):void{
        this.language.themes.map(theme =>  (theme.id === _themeUpdated.id) 
              ? Object.assign(theme, _themeUpdated) 
              : theme);
        this.languageSource.next(this.language);
    }

   
    getLanguage(): Observable<any> { 
        return this.languageObservable$; 
    }
}