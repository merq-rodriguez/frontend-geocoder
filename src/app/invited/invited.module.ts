import { NgModule } from '@angular/core';
import { InvitedRoutingModule, routedComponents } from './invited-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { CKEditorModule } from "ng2-ckeditor";


@NgModule({
  imports: [
    ComponentsModule,
    InvitedRoutingModule,
    CKEditorModule,
  
  ],
  declarations: [ ...routedComponents ],
  entryComponents: []
})
export class InvitedModule {
}
