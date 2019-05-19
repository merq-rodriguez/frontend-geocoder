import { Observable } from 'rxjs';
import { ILocation } from './location.data';


export interface ITestCompetence{
  idTest?: number;
  idCompetence?: number;
  location?: ILocation;
  radius?: IRadius;
}

export interface IRadius{
  idRadius?: number;
  number: number;
}

export abstract class TestCompetenceData {
    abstract getTestCompetence(idCompetence: number):   Observable<any[]>;
    abstract findTestCompetence(idTest: number, idCompetence: number):   Observable<any>;
    abstract createTestCompetence(test_competence: ITestCompetence): Observable<any>;
    abstract updateTestCompetence(test_competence: ITestCompetence): Observable<any>;
    abstract deleteTestCompetence(idTest: number, idCompetence: number): Observable<any>;
  }