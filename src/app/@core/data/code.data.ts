import { Observable } from 'rxjs';

export interface ICode {
    idCode: number;
    content: string;
}


export abstract class CodeData {
    abstract getCodes():   Observable<any[]>;
    abstract findCode(idCode: number):   Observable<any>;
    abstract createCode(code: ICode): Observable<any>;
    abstract updateCode(code: ICode): Observable<any>;
    abstract deleteCode(idCode: number): Observable<any>;
  }