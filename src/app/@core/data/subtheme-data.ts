import { Observable } from 'rxjs';

export interface ISubtheme{
  id?: string;
  name: string;
  description: string;
  subtitle?: string;
  contentEditor?: string;
  contentCode?: string;
  image?: File;
  imageSrc?: string;
  url_video?: string;
  idTheme?: number;
}



export abstract class SubthemeData {
    abstract getSubthemes(idTheme: number):   Observable<any[]>;
    abstract findSubtheme(idSubtheme: number):   Observable<any>;
    abstract createSubtheme(subtheme: ISubtheme, idTheme: number): Observable<any>;
    abstract updateSubtheme(subtheme: ISubtheme, idTheme: number): Observable<any>;
    abstract deleteSubtheme(idSubtheme: number): Observable<any>;
  }