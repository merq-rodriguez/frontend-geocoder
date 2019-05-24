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

  getLanguagesWithThematic(idUser: number) {
    return forkJoin(
      [
        this.getLanguages(idUser),
        this.themeService.getThemes()
      ]
    )
  }

  getLanguages(idUser: number): Observable<any> {
    return this.api.get(this.controller + '/getAll/' + idUser)

  }

  findLanguage(): Observable<any> {
    return observableOf(this.languages);
  }
  createLanguage(): Observable<any> {
    return observableOf(this.languages);
  }

  saveLanguageAndThemes(language): Observable<any> {
    return this.api.post(this.controller, 'saveLanguageAndThemes', language);
  }

  updateLanguage(): Observable<any> {
    return observableOf(this.languages);
  }
  
  deleteLanguage(): Observable<any> {
    return observableOf(this.languages);
  }


}

