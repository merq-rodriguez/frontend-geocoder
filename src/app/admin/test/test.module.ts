import { NgModule } from '@angular/core';
import {  routedComponents, TestRoutingModule } from './test-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';


@NgModule({
  imports: [
    ComponentsModule,
    TestRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
})
export class TestModule { }
