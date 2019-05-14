import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseComponent } from './exercise.component';
import { CreateExerciseComponent } from './create-exercise/exercise.component';


const routes: Routes = [{
  path: '',
  component: ExerciseComponent,
  children: [
    { path: 'create-exercise',  component: CreateExerciseComponent },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseRoutingModule { }

export const routedComponents = [
  ExerciseComponent,
  CreateExerciseComponent
];
