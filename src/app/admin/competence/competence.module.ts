import { NgModule } from '@angular/core';
import {  routedComponents,CompetenceRoutingModule } from './competence-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { HTMLMarkerComponent } from './map-competence/html-marker.component';


@NgModule({
  imports: [
    ComponentsModule,
    CompetenceRoutingModule
  ],
  declarations: [ ...routedComponents],
  entryComponents: [ HTMLMarkerComponent ]
})
export class CompetenceModule { }
