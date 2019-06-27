import { Observable } from 'rxjs';
import { ISubtheme } from './subtheme-data';



export interface ITheme{
  id: string;
  name: string;
  description: string;
  content?: string;
  image?: File;
  imageSrc?: string;
  subtitle?: string;
  idLanguage?: number;
  subthemes?: Array<ISubtheme>
}


export abstract class ThemeData {
    abstract getThemes(idLanguage: number):   Observable<any[]>;
    abstract findTheme(idTheme: number):   Observable<any>;
    abstract createTheme(theme: ITheme, idLanguage: number): Observable<any>;
    abstract updateTheme(theme: ITheme): Observable<any>;
    abstract deleteTheme(idTheme: number): Observable<any>;
  }