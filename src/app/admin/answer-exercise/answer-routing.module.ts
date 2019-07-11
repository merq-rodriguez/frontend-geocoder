import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswerComponent } from './answer.component';
import { AnswerExerciseStudentComponent } from './answer-exercise/answer-exercise.component';
import { DetailAnswerComponent } from './detail-answer/detail-answer.component';
import { DialogExerciseFavorite, ExerciseFavoriteComponent } from './exercise-favorite/exercise-favorite.component';


const routes: Routes = [{
  path: '',
  component: AnswerComponent,
  children: [
    { path: 'answer-exercise', component: AnswerExerciseStudentComponent },
    { path: 'exercise-favorite', component: ExerciseFavoriteComponent },
    { path: 'detail-answer', component: DetailAnswerComponent }, 

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswerExerciseRoutingModule { }

export const routedComponents = [
  DialogExerciseFavorite,
  AnswerComponent,
  ExerciseFavoriteComponent,
  AnswerExerciseStudentComponent,
 DetailAnswerComponent, 
];
