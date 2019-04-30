import { NgModule } from '@angular/core';
import {  routedComponents, TestRoutingModule } from './test-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { MonacoEditorModule } from 'ngx-monaco';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  imports: [
    ComponentsModule,
    TestRoutingModule,
    CKEditorModule,
  ],
  declarations: [
    ...routedComponents
  ],
})
export class TestModule { }
