import { NgModule } from '@angular/core';
import { InvitedRoutingModule, routedComponents } from './invited-routing.module';
import { ComponentsModule } from 'src/app/@theme/components/components.module';
import { CKEditorModule } from "ng2-ckeditor";
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    ComponentsModule,
    InvitedRoutingModule,
    CKEditorModule,
    QRCodeModule,
  
  ],
  declarations: [ ...routedComponents ],
  entryComponents: []
})
export class InvitedModule {
}
