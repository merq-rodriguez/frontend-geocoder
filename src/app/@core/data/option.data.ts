import { ICode } from './code.data';
import { Observable } from 'rxjs';



export interface IOption{
    idOption?: number;
    name: string;
    veracity: boolean
}

export abstract class OptionData {
    abstract getOptions(idQuestion: number):   Observable<any[]>;
    abstract findOption(idOption: number):   Observable<any>;
    abstract createOption(option: IOption): Observable<any>;
    abstract updateOption(option: IOption): Observable<any>;
    abstract deleteOption(idOption: number): Observable<any>;
  }