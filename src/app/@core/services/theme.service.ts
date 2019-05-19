import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, of } from 'rxjs';
import { Api } from './api.service';
import { ThemeData } from '../data/theme.data';

@Injectable()
export class ThemeService extends ThemeData{

    constructor( private api: Api,
      ){
      super()
    }

    private controller: string = "themes"  
    themes = [];

    getThemes():Observable<any>{
        return this.api.get(this.controller+'/getAll')
    }

    findTheme(): Observable<any> {
        return observableOf(this.themes);
    }
    
      createTheme(): Observable<any> {
        return observableOf(this.themes);
    }
    
      updateTheme(): Observable<any> {
        return observableOf(this.themes);
    }

    deleteTheme(): Observable<any> {
        return observableOf(this.themes);
      }
      
    
}

