import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';



@NgModule({
  imports: [
    AdminRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    AdminComponent
  ],
})
export class AdminModule {
}
