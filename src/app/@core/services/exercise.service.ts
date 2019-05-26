import { Injectable } from '@angular/core';
import { LanguageData, ILanguage } from '../data/language.data';
import { of as observableOf, Observable, of } from 'rxjs';
import { Api } from './api.service';
import { ThemeService } from './theme.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { ExerciseData, IExercise } from '../data/exercise.data';

@Injectable()
export class ExerciseService extends ExerciseData {

  constructor( private api: Api) {
    super()
  }

  private controller: string = "exercises"

 

  getExercises(idUser: number): Observable<any> {
    return this.api.get(this.controller + '/getAll' + idUser)
  }

  findExercise(idExercise: number): Observable<any> {
    return this.api.get(this.controller + 'findExercise' + idExercise)
  }
  
  createExercise(exercise: IExercise): Observable<any> {
    return this.api.post(this.controller, 'createExercise', exercise)
  }

  updateExercise(exercise: IExercise): Observable<any> {
    return this.api.post(this.controller, 'updateExercise', exercise)    
  }
  
  deleteExercise(idExercise: number): Observable<any> {
    return this.api.delete(this.controller, 'deleteExercise', idExercise);       
  }


}

