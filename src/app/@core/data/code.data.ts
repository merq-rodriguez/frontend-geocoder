import { Observable } from 'rxjs';

export interface ICode {
    idExercise: number;
    idUser: number;
    content: string;
}


export abstract class CodeData {
    abstract getCodes(idUser: number):   Observable<any[]>;
    abstract findCode(idCode: number):   Observable<any>;
    abstract createCode(code: ICode): Observable<any>;
    abstract updateCode(code: ICode): Observable<any>;
    abstract deleteCode(idCode: number): Observable<any>;
  }