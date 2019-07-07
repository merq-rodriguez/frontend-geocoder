import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, of } from 'rxjs';
import { Api } from './api.service';
import { CodeData, ICode } from '../data/code.data';

export interface IAnswerCalification{
    idAnswer: number;
    idScore: number;
    points: number;
    observation: string;
    solved: boolean
} 

@Injectable()
export class AnswerExerciseService {

    constructor( private readonly api: Api){}

    private controller: string = "answer-exercises"  

    getHistoricalExercise(idExercise: number):Observable<any>{
        return this.api.get(this.controller+'/getHistoricalExercise', idExercise);
    }
    
    getExercisesSolved(idUser: number):Observable<any>{
        return this.api.get(this.controller+'/getExercisesSolved', idUser);
    }
  
    sendAnswerExercise(code: ICode): Observable<any> {
      return this.api.post(this.controller, 'sendAnswerExercise', code);
    }

    sendCalificationAnswer(calification: IAnswerCalification): Observable<any> {
      return this.api.put(this.controller, 'sendCalificationAnswer', calification);
    }


      
    
}

