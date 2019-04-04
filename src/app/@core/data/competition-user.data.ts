import { Observable } from 'rxjs';
import { ILocation } from './location.data';
import { IRadius } from './test-competence.data';


export interface ICompetitionUser{
  idCompetence?: number;
  idUser?: number;
  score: number;
}

export abstract class CompetitionUserData {
    abstract findCompetitor(competitor: ICompetitionUser):   Observable<any[]>;
    abstract createCompetitor(competitor: ICompetitionUser): Observable<any>;
    abstract updateCompetitor(competitor: ICompetitionUser): Observable<any>;
    abstract deleteCompetitor(competitor: ICompetitionUser): Observable<any>;
  }