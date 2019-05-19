import { Observable } from 'rxjs';

export interface ITest{
    idTest: number;
    name: string;
    description: string;
    image: string;
    type: string;
    scores: number;
    idTheme?: number;
}

export abstract class TestData {
    abstract getTests():   Observable<any[]>;
    abstract findTest(idTest: number):   Observable<any>;
    abstract createTest(test: ITest): Observable<any>;
    abstract updateTest(test: ITest): Observable<any>;
    abstract deleteTest(idTest: number): Observable<any>;
  }