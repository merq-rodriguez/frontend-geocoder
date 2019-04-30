import { ICode } from './code.data';
import { Observable } from 'rxjs';
import { IOption } from './option.data';

export interface IQuestion{
    idQuestion?: number;
    name: string;
    options: Array<IOption>;
    code?: ICode;
    state?: boolean;
}


export abstract class QuestionData {
    abstract getQuestions():   Observable<any[]>;
    abstract findQuestion(idQuestion: number):   Observable<any>;
    abstract createQuestion(question: IQuestion): Observable<any>;
    abstract updateQuestion(question: IQuestion): Observable<any>;
    abstract deleteQuestion(idQuestion: number): Observable<any>;
  }