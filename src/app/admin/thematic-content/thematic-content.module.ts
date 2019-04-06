import { NgModule } from '@angular/core';
import {  routedComponents, ThematicRoutingModule } from './thematic-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { ThemeComponent } from './theme/theme.component';


@NgModule({
  imports: [
    ComponentsModule,
    ThematicRoutingModule,
    CKEditorModule
  ],
  declarations: [
    ...routedComponents,
    ThemeComponent
  ],
})
export class ThematicModule { }
