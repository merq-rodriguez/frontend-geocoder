import { Observable } from 'rxjs';

export interface ITheme{
  id: string;
  name: string;
  description: string;
  content?: string;
  image?: string;
  idLanguage?: number;
}



export abstract class ThemeData {
    abstract getThemes():   Observable<any[]>;
    abstract findTheme(idTheme: number):   Observable<any>;
    abstract createTheme(theme: ITheme): Observable<any>;
    abstract updateTheme(theme: ITheme): Observable<any>;
    abstract deleteTheme(idTheme: number): Observable<any>;
  }