import { NgModule } from '@angular/core';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { CKEditorModule } from "ng2-ckeditor";
import { CreateSubthemeDialog } from './modal/create-subtheme/create-subtheme.component';


@NgModule({
  imports: [
    ComponentsModule,
    AdminRoutingModule,
    CKEditorModule,
  
  ],
  declarations: [ ...routedComponents ],
  entryComponents: [CreateSubthemeDialog]
})
export class AdminModule {
}
