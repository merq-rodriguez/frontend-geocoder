import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMenuComponent } from './test-menu/test.component';
import { TestComponent } from './test.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestExerciseComponent } from './test-exercise/test-exercise.component';
import { TestQuestionComponent } from './test-question/test-question.component';
import { CreateTestComponent } from './create-test/create-test.component';


const routes: Routes = [{
  path: '',
  component: TestComponent,
  children: [
    { path: 'menu-test',           component: TestMenuComponent },
    { path: 'test-exercise',       component: TestExerciseComponent }, 
    { path: 'test-question',       component: TestQuestionComponent }, 
    { path: 'create-test',         component: CreateTestComponent },
    { path: 'test-list',           component: TestListComponent },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule { }

export const routedComponents = [
  TestComponent,
  TestMenuComponent,
  TestExerciseComponent,
  TestQuestionComponent,
  CreateTestComponent,
  TestListComponent
];
