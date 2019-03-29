import { NgModule } from '@angular/core';
import {  routedComponents,CompetenceRoutingModule } from './competence-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';


@NgModule({
  imports: [
    ComponentsModule,
    CompetenceRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
})
export class CompetenceModule { }
