import { Observable } from 'rxjs';

export interface IExercise{
  idExercise?: number;
  name: string;
  description: string;
  content: string;
  output: string;
  input: string;
  idUser: number;
}

export abstract class ExerciseData {
    abstract getExercises():   Observable<any[]>;
    abstract findExercise(idExercise: number):   Observable<any>;
    abstract createExercise(exercise: IExercise): Observable<any>;
    abstract updateExercise(exercise: IExercise): Observable<any>;
    abstract deleteExercise(idExercise: number): Observable<any>;
  }