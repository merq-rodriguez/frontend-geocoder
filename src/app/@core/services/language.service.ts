import { Injectable } from '@angular/core';
import { LanguageData, ILanguage } from '../data/language.data';
import { of as observableOf, Observable, of } from 'rxjs';
import { Api } from './api.service';
import { ThemeService } from './theme.service';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class LanguageService extends LanguageData {

  constructor(
    private api: Api,
    private themeService: ThemeService
  ) {
    super()
  }

  private controller: string = "languages"
  languages = [];


  getLanguages(idUser: number): Observable<any> {
    return this.api.get(this.controller + '/getAll', idUser)

  }

  findLanguage(): Observable<any> {
    return observableOf(this.languages);
  }


  createLanguage(language: ILanguage): Observable<any> {
    const form = new FormData();
    if(language.image)
        form.append('image', language.image, language.image.name);
    
    form.append('name', language.name);
    form.append('description', language.description);
    form.append('idUser', String(language.idUser));
    return this.api.post(this.controller, 'createLanguage', form);
  }


  updateLanguage(language: ILanguage): Observable<any> {
    const form = new FormData();
    if(language.image)
        form.append('image', language.image, language.image.name);
    
    form.append('idLanguage', String(language.idLanguage));
    form.append('name', language.name);
    form.append('description', language.description);
    form.append('idUser', String(language.idUser));
    return this.api.put(this.controller, 'updateLanguage', form);
  }


  saveLanguageAndThemes(language): Observable<any> {
    return this.api.post(this.controller, 'saveLanguageAndThemes', language);
  }

 
  
  deleteLanguage(): Observable<any> {
    return observableOf(this.languages);
  }


}

