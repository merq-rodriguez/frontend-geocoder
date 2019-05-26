import { Observable } from 'rxjs';

export interface IExercise{
  idExercise?: number;
  name: string;
  description: string;
  contentEditor: string;
  contentCode?: string;
  output: string;
  input: string;
  idUser: number;
  image: File;
}

export abstract class ExerciseData {
    abstract getExercises():   Observable<any[]>;
    abstract findExercise(idExercise: number):   Observable<any>;
    abstract createExercise(exercise: IExercise): Observable<any>;
    abstract updateExercise(exercise: IExercise): Observable<any>;
    abstract deleteExercise(idExercise: number): Observable<any>;
  }