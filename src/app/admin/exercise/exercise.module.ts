import { NgModule } from '@angular/core';
import {  routedComponents,ExerciseRoutingModule } from './exercise-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';


@NgModule({
  imports: [
    ComponentsModule,
    ExerciseRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
})
export class ExerciseModule { }
