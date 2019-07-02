import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseComponent } from './exercise.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { DialogOption, ExerciseListComponent } from './exercise-list/exercise-list.component';
import { AnswerExerciseComponent } from './answer-exercise/answer-exercise.component';
import { ExerciseMenuComponent } from './exercise-menu/exercise-menu.component';


const routes: Routes = [{
  path: '',
  component: ExerciseComponent,
  children: [
    { path: 'exercise-menu', component: ExerciseMenuComponent },
    { path: 'create-exercise', component: CreateExerciseComponent },
    { path: 'list-exercise', component: ExerciseListComponent },
    { path: 'answer-exercise', component: AnswerExerciseComponent },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseRoutingModule { }

export const routedComponents = [
  ExerciseComponent,
  CreateExerciseComponent,
  ExerciseListComponent,
  AnswerExerciseComponent,
  ExerciseMenuComponent,
  DialogOption
];
