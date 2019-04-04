import { Observable } from 'rxjs';

export interface ISubtheme{
  idSubtheme?: string;
  name: string;
  description: string;
  content?: string;
  contentCode?: string;
  image?: string;
  idTheme?: number;
}



export abstract class SubthemeData {
    abstract getSubthemes():   Observable<any[]>;
    abstract findSubtheme(idSubtheme: number):   Observable<any>;
    abstract createSubtheme(subtheme: number): Observable<any>;
    abstract updateSubtheme(subtheme: number): Observable<any>;
    abstract deleteSubtheme(idSubtheme: number): Observable<any>;
  }