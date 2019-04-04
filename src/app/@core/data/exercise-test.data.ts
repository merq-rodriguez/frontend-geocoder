import { Observable } from 'rxjs';

export interface IExerciseTest{
  idExercise: number;
  idTest: number;
}

export abstract class ExerciseTestData {
    abstract getExerciseTests(idTest: number):   Observable<any[]>;
    abstract findExerciseTest(exercise_test :IExerciseTest):   Observable<any>;
    abstract assignExerciseTest(exercise_test :IExerciseTest): Observable<any>;
    abstract deleteExerciseTest(exercise_test :IExerciseTest): Observable<any>;
  }