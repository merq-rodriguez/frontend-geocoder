import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, of } from 'rxjs';
import { Api } from './api.service';
import { ThemeData, ITheme } from '../data/theme.data';

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
    
    
  createTheme(theme: ITheme, idLanguage: number): Observable<any> {
    const form = new FormData();
    if(theme.image)
        form.append('image', theme.image, theme.image.name);
    
    form.append('name', theme.name);
    form.append('description', theme.description);
    form.append('content', theme.content);
    form.append('idLanguage', String(idLanguage));
    return this.api.post(this.controller, 'createTheme', form);
  }
    
      updateTheme(theme: ITheme): Observable<any> {
        const form = new FormData();
        if(theme.image)
            form.append('image', theme.image, theme.image.name);
        
        form.append('idTheme', theme.id);
        form.append('name', theme.name);
        form.append('description', theme.description);
        form.append('content', theme.content);
        return this.api.put(this.controller, 'updateTheme', form);
    }

    deleteTheme(idTheme: number): Observable<any> {
        return this.api.delete(this.controller, 'deleteTheme', idTheme)
      }
      
    
}

