import { NgModule } from '@angular/core';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { CKEditorModule } from "ng2-ckeditor";


@NgModule({
  imports: [
    ComponentsModule,
    AdminRoutingModule,
    CKEditorModule,
  
  ],
  declarations: [ ...routedComponents ],
})
export class AdminModule {
}
