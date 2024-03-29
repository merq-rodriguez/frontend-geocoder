import { Observable } from 'rxjs';
import { ILocation } from './location.data';

export interface IExercise{
  idExercise?: string;
  name: string;
  description: string;
  contentEditor?: string;
  contentCode?: string;
  idCode?: string;
  output: string;
  input: string;
  idUser?: number;
  image: File;
  imageSrc?: string;
  location: ILocation;
  radius: number;
}

export abstract class ExerciseData {
    abstract getExercises(idUser: number):   Observable<any[]>;
    abstract findExercise(idExercise: number):   Observable<any>;
    abstract createExercise(exercise: IExercise): Observable<any>;
    abstract updateExercise(exercise: IExercise): Observable<any>;
    abstract deleteExercise(idExercise: number): Observable<any>;
  }