import { Observable } from 'rxjs';


export interface ILanguage{
  idLanguage?: number;
  name: string;
  description: string;
  image?: File;
  imageSrc?: string;
  idUser?: number;
  state?: string;
}

export abstract class LanguageData {
    abstract getLanguages(idUser: number):   Observable<any[]>;
    abstract findLanguage(idLanguage: number):   Observable<any>;
    abstract createLanguage(language: ILanguage): Observable<any>;
    abstract updateLanguage(language: ILanguage): Observable<any>;
    abstract deleteLanguage(idLanguage: number): Observable<any>;
  }