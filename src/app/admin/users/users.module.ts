import { NgModule } from '@angular/core';
import {  routedComponents, UsersRoutingModule } from './users-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';


@NgModule({
  imports: [
    ComponentsModule,
    UsersRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
})
export class UsersModule { }
