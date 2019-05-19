import { Observable } from 'rxjs';

export interface IQuestionTest{
  idQuestion: number;
  idTest: number;
}

export abstract class QuestionTestData {
    abstract assignQuestionTest(question_test :IQuestionTest): Observable<any>;
    abstract deleteQuestionTest(question_test :IQuestionTest): Observable<any>;
  }