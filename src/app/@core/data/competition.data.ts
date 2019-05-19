import { Observable } from 'rxjs';
import { ILocation } from './location.data';
import { IRadius } from './test-competence.data';


export interface ICompetition{
  idCompetition?: number;
  name: string;
  description: string;
  image: string;
  type: string;
  dateInit: string;
  hourInit: string;
  location: ILocation;
  radius: IRadius;
  idUser?: number;
}

export abstract class CompetitionData {
    abstract getCompetition(idUser: number):   Observable<any[]>;
    abstract findCompetition(idCompetition: number):   Observable<any>;
    abstract createCompetition(competition: ICompetition): Observable<any>;
    abstract updateCompetition(competition: ICompetition): Observable<any>;
    abstract deleteCompetition(idCompetition: number): Observable<any>;
  }