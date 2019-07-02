import { NgModule } from '@angular/core';
import {  routedComponents,ExerciseRoutingModule } from './exercise-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { DialogOption } from './exercise-list/exercise-list.component'

@NgModule({
  imports: [
    ComponentsModule,
    ExerciseRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
  entryComponents: [DialogOption ]
})
export class ExerciseModule { }
