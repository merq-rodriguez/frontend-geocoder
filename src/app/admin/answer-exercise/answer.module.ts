import { NgModule } from '@angular/core';
import {  routedComponents,AnswerExerciseRoutingModule } from './answer-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { DialogExerciseFavorite } from './exercise-favorite/exercise-favorite.component';

@NgModule({
  imports: [
    ComponentsModule,
    AnswerExerciseRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
  entryComponents: [DialogExerciseFavorite ]
})
export class AnswerExerciseModule { }
