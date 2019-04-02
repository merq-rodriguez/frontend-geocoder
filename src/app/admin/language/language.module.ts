import { NgModule } from '@angular/core';
import {  routedComponents, LanguageRoutingModule } from './language-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  imports: [
    ComponentsModule,
    LanguageRoutingModule,
    CKEditorModule
  ],
  declarations: [
    ...routedComponents
  ],
})
export class LanguageModule { }
