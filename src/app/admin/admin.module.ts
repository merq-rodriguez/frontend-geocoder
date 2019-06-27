import { NgModule } from '@angular/core';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { CKEditorModule } from "ng2-ckeditor";
import { CreateSubthemeDialog } from './modal/create-subtheme/create-subtheme.component';
import { ShowSubthemeDialog } from './modal/show-subtheme/show-subtheme.component';
import { ShowThemeDialog } from './modal/show-theme/show-theme.component';


@NgModule({
  imports: [
    ComponentsModule,
    AdminRoutingModule,
    CKEditorModule,
    
  
  ],
  declarations: [ ...routedComponents ],
  entryComponents: [CreateSubthemeDialog, ShowSubthemeDialog, ShowThemeDialog]
})
export class AdminModule {
}
